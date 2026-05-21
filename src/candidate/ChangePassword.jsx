import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { BASE_URL } from "../config/api";
import { useToast } from "../context/ToastContext";
import { Link } from "react-router-dom";

function ChangePassword() {
    const { user } = useOutletContext();
    const { showToast } = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        current_password: "",
        new_password: "",
        confirm_password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.new_password !== formData.confirm_password) {
            showToast("New passwords do not match", "error");
            return;
        }
        
        if (formData.new_password.length < 6) {
            showToast("Password must be at least 6 characters", "error");
            return;
        }

        try {
            setLoading(true);
            const token = localStorage.getItem("auth_token");
            const response = await fetch(`${BASE_URL}/auth/change_password/${token}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    current_password: formData.current_password,
                    new_password: formData.new_password,
                }),
            });
            const data = await response.json();
            
            if (data.status) {
                showToast("Password changed successfully!", "success");
                setFormData({
                    current_password: "",
                    new_password: "",
                    confirm_password: "",
                });
            } else {
                showToast(data.message || "Failed to change password", "error");
            }
        } catch (error) {
            console.log("Error changing password:", error);
            showToast("Server error. Please try again.", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="col-xl-9 col-lg-8 m-b30">
            <div className="job-bx job-profile">
                <div className="job-bx-title clearfix">
                    <h5 className="font-weight-700 float-start text-uppercase">
                        Change Password
                    </h5>
                    <Link to="/" className="site-button right-arrow button-sm float-end">
                        Back
                    </Link>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>Current Password:</label>
                                <input
                                    type="password"
                                    name="current_password"
                                    value={formData.current_password}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>New Password:</label>
                                <input
                                    type="password"
                                    name="new_password"
                                    value={formData.new_password}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                                <small className="text-muted">Minimum 6 characters</small>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>Confirm New Password:</label>
                                <input
                                    type="password"
                                    name="confirm_password"
                                    value={formData.confirm_password}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <button
                                type="submit"
                                disabled={loading}
                                className="site-button m-b30"
                            >
                                {loading ? "Changing..." : "Change Password"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;