import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config/api";
import { useToast } from "../../context/ToastContext";
import { useState } from "react";

function Sidebar({ user, onUserUpdate }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { showToast } = useToast();
    const [uploading, setUploading] = useState(false);
    const [currentUser, setCurrentUser] = useState(user);
    
    const token = localStorage.getItem("auth_token");

    // Update currentUser when prop changes
    useState(() => {
        setCurrentUser(user);
    }, [user]);

    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

    const performLogout = async () => {
        try {
            const token = localStorage.getItem("auth_token");

            if (token) {
                await axios.post(
                    `${BASE_URL}/auth/logout`,
                    {},
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                ).catch(err => console.log("Logout API error:", err));
            }

            // Clear localStorage
            localStorage.removeItem("auth_token");
            localStorage.removeItem("user_data");
            sessionStorage.clear();

            // Dispatch custom event to update header
            window.dispatchEvent(new Event("authChange"));

            // Show toast notification
            showToast("Logged out successfully!", "success");

            // Redirect to home page
            navigate("/");

        } catch (error) {
            console.error("Logout error:", error);
            localStorage.removeItem("auth_token");
            navigate("/");
        }
    };

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            performLogout();
        }
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        // Get token from localStorage
        const authToken = localStorage.getItem("auth_token");
        
        if (!authToken) {
            showToast("Please login first", "error");
            return;
        }

        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
        if (!allowedTypes.includes(file.type)) {
            showToast("Please upload a valid image file (JPEG, PNG, or GIF)", "error");
            return;
        }

        // Validate file size (max 2MB)
        if (file.size > 2 * 1024 * 1024) {
            showToast("Image size should be less than 2MB", "error");
            return;
        }

        setUploading(true);

        try {
            // Create a temporary URL for preview while uploading
            const tempImageUrl = URL.createObjectURL(file);
            setCurrentUser(prev => ({ ...prev, Profile_image: tempImageUrl }));

            const formData = new FormData();
            formData.append('profile_image', file);
            formData.append('token', authToken);

            const response = await axios.post(
                `${BASE_URL}/auth/upload_profile_image`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            if (response.data.status) {
                showToast(response.data.message, "success");
                
                // Update local storage with new image URL
                const userData = localStorage.getItem("user_data");
                if (userData) {
                    const userObj = JSON.parse(userData);
                    userObj.Profile_image = response.data.image_url;
                    localStorage.setItem("user_data", JSON.stringify(userObj));
                }
                
                // Update current user with the actual image URL
                setCurrentUser(prev => ({ ...prev, Profile_image: response.data.image_url }));
                
                // Dispatch event to update header
                window.dispatchEvent(new Event("authChange"));
                
                // Call the callback to update parent component
                if (onUserUpdate) {
                    onUserUpdate();
                }
            } else {
                showToast(response.data.message || "Failed to upload image", "error");
                // Revert to previous image on error
                setCurrentUser(user);
            }
        } catch (error) {
            console.error("Image upload error:", error);
            showToast(error?.response?.data?.message || "Server error. Please try again.", "error");
            // Revert to previous image on error
            setCurrentUser(user);
        } finally {
            setUploading(false);
            // Reset file input
            event.target.value = '';
            // Revoke the temporary object URL after upload
            URL.revokeObjectURL(tempImageUrl);
        }
    };

    return (
        <>
            <div className="col-xl-3 col-lg-4 m-b30">
                <div className="sticky-top">
                    <div className="candidate-info">
                        <div className="candidate-detail text-center">
                            <div className="canditate-des">
                                <Link to="#">
                                    <img 
                                        alt="" 
                                        src={currentUser?.Profile_image || user?.Profile_image} 
                                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                    />
                                </Link>
                                <div className="upload-link" title="Update Profile Picture" data-bs-toggle="tooltip" data-placement="right">
                                    <input 
                                        type="file" 
                                        className="update-flie" 
                                        accept="image/jpeg,image/jpg,image/png,image/gif"
                                        onChange={handleImageUpload}
                                        disabled={uploading}
                                    />
                                    <i className={`fa ${uploading ? 'fa-spinner fa-spin' : 'fa-camera'}`}></i>
                                </div>
                            </div>
                            <div className="candidate-title">
                                <div className="">
                                    <h4 className="m-b5">
                                        <Link to="#">
                                            {currentUser?.Full_name || "User Name"}
                                        </Link>
                                    </h4>
                                    <p className="m-b0">
                                        <Link to="#">
                                            {currentUser?.Designation || "Job Seeker"}
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li className={isActive(`/profile/${token}`)}>
                                <Link to={`/profile/${token}`}>
                                    <i className="far fa-user" aria-hidden="true"></i>
                                    <span>Profile</span>
                                </Link>
                            </li>
                            <li className={isActive(`/profile/${token}/applied-jobs`)}>
                                <Link to={`/profile/${token}/applied-jobs`}>
                                    <i className="fa fa-briefcase" aria-hidden="true"></i>
                                    <span>Applied Jobs</span>
                                </Link>
                            </li>
                            <li className={isActive(`/profile/${token}/saved-jobs`)}>
                                <Link to={`/profile/${token}/saved-jobs`}>
                                    <i className="far fa-heart" aria-hidden="true"></i>
                                    <span>Saved Jobs</span>
                                </Link>
                            </li>
                            <li className={isActive(`/profile/${token}/change-password`)}>
                                <Link to={`/profile/${token}/change-password`}>
                                    <i className="fa fa-key" aria-hidden="true"></i>
                                    <span>Change Password</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" onClick={handleLogout}>
                                    <i className="fas fa-sign-out-alt" aria-hidden="true"></i>
                                    <span>Log Out</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;