import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config/api";
import { useToast } from "../context/ToastContext";
import Sidebar from "./sidebar/Sidebar";

function ProfileLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const { showToast } = useToast();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Get token from URL or localStorage
        const pathSegments = location.pathname.split('/');
        const tokenFromUrl = pathSegments[2];
        const token = tokenFromUrl || localStorage.getItem("auth_token");
        
        if (token) {
            fetchProfile(token);
        } else {
            showToast("Please login first", "error");
            navigate("/login");
        }
    }, [location.pathname]);

    const fetchProfile = async (token) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/profile/${token}`);
            const data = await response.json();
            
            if (data.status) {
                setUser(data.user);
                // Store user data in localStorage for other components
                localStorage.setItem("user_data", JSON.stringify(data.user));
                localStorage.setItem("auth_token", token);
            } else {
                if (data.message === "Session expired. Please login again." || 
                    data.message === "Invalid token") {
                    showToast("Your session has expired. Please login again.", "error");
                    localStorage.removeItem("auth_token");
                    localStorage.removeItem("user_data");
                    navigate("/login");
                } else {
                    showToast(data.message || "Failed to load profile", "error");
                }
            }
        } catch (error) {
            console.log("Profile error ", error);
            showToast("Failed to load profile", "error");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="page-content bg-white">
                <div className="content-block">
                    <div className="section-full bg-white browse-job p-t50 p-b20">
                        <div className="container">
                            <div className="row">
                                <Sidebar />
                                <div className="col-xl-9 col-lg-8 m-b30">
                                    <div className="job-bx job-profile">
                                        <p>Loading profile...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page-content bg-white">
            <div className="content-block">
                <div className="section-full bg-white browse-job p-t50 p-b20">
                    <div className="container">
                        <div className="row">
                            <Sidebar user={user} />
                            <Outlet context={{ user, setUser }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileLayout;