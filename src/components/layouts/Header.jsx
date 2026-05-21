import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useToast } from "../context/ToastContext";
import { useToast } from "../../context/ToastContext";


function Header() {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [userImage, setUserImage] = useState("");
     const [token, setToken] = useState(null);

    // Check login status
    const checkLoginStatus = () => {
        const token = localStorage.getItem("auth_token");
        const isLoggedInStatus = !!token;
        
        setIsLoggedIn(isLoggedInStatus);
        setToken(token);
        
        // Get user name from localStorage if available
        if (token) {
            const userData = localStorage.getItem("user_data");
            if (userData) {
                try {
                    const user = JSON.parse(userData);
                    setUserName(user.name || user.Full_name || "User");
                    setUserImage(user.Profile_image || "");
                } catch (e) {
                    console.log("Error parsing user data:", e);
                }
            } else {
                // If no user data, try to fetch it
                fetchUserProfile(token);
            }
        } else {
            setUserName("");
            setUserImage("");
        }
    };

    const fetchUserProfile = async (token) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/auth/profile/${token}`);
            const data = await response.json();
            
            if (data.status) {
                setUserName(data.user.Full_name || "User");
                setUserImage(data.user.Profile_image || "");
                // Store in localStorage for future use
                localStorage.setItem("user_data", JSON.stringify(data.user));
            }
        } catch (error) {
            console.log("Error fetching user profile:", error);
        }
    };

    useEffect(() => {
        checkLoginStatus();
        
        // Listen for storage events (when logout happens in another tab)
        const handleStorageChange = (e) => {
            if (e.key === 'auth_token' || e.key === 'user_data') {
                checkLoginStatus();
            }
        };
        window.addEventListener("storage", handleStorageChange);
        
        // Custom event for login/logout within the same tab
        const handleAuthChange = () => {
            console.log("Auth change detected, updating header...");
            checkLoginStatus();
        };
        window.addEventListener("authChange", handleAuthChange);
        
        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("authChange", handleAuthChange);
        };
    }, []);

    const handleLogout = async () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        
        if (confirmLogout) {
            try {
                const token = localStorage.getItem("auth_token");
                
                // Call backend logout if you have the endpoint
                if (token) {
                    await fetch(`${process.env.REACT_APP_API_URL || ''}/auth/logout`, {
                        method: "POST",
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }).catch(err => console.log("Logout API error:", err));
                }
            } catch (error) {
                console.log("Logout error:", error);
            }
            
            // Clear localStorage
            localStorage.removeItem("auth_token");
            localStorage.removeItem("user_data");
            
            // Dispatch custom event to update other components
            window.dispatchEvent(new Event("authChange"));
            
            // Show toast notification
            showToast("Logged out successfully!", "success");
            
            // Redirect to home page
            navigate("/");
        }
    };

    return (
        <>
            <header className="site-header mo-left header fullwidth">
                {/* <!-- Main Header --> */}
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                                <Link to="/">
                                    <img alt="" src="/images/logo1.png" />
                                </Link>
                            </div>
                            <div className="logo-header mostion logo-white">
                                <Link to="/">
                                    <img alt="" src="/images/logo-white.png" />
                                </Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button 
                                aria-controls="navbarNavDropdown" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation" 
                                className="navbar-toggler collapsed navicon justify-content-end" 
                                data-bs-target="#navbarNavDropdown" 
                                data-bs-toggle="collapse" 
                                type="button"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <a 
                                        href="https://websmileindia.in/CAREERROUTES/admin/auth/signin" 
                                        className="btn text-light bg-dark" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Employer Login
                                    </a>
                                    
                                    {isLoggedIn ? (
                                        <div className="dropdown" style={{ display: "inline-block", marginLeft: "10px" }}>
                                            <button 
                                                className="site-button dropdown-toggle" 
                                                type="button" 
                                                id="userDropdown" 
                                                data-bs-toggle="dropdown" 
                                                aria-expanded="false"
                                                style={{ background: "#4c8dff", border: "none" }}
                                            >
                                                <i className="fa fa-user-circle mx-1"></i>
                                                {userName ? userName.slice(0, 15) : "Profile"}
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="userDropdown">
                                                <li>
                                                    <Link className="dropdown-item" to={`/profile/${token}`}>
                                                        <i className="fa fa-user"></i> My Profile
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to={`/profile/${token}/applied-jobs`}>
                                                        <i className="fa fa-briefcase"></i> Applied Jobs
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to={`/profile/${token}/saved-jobs`}>
                                                        <i className="fa fa-heart"></i> Saved Jobs
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to={`/profile/${token}/change-password`}>
                                                        <i className="fa fa-key"></i> Change Password
                                                    </Link>
                                                </li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li>
                                                    <button 
                                                        className="dropdown-item" 
                                                        onClick={handleLogout}
                                                        style={{ color: "#dc3545" }}
                                                    >
                                                        <i className="fa fa-sign-out-alt"></i> Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <Link
                                            className="site-button"
                                            to="/login"
                                        >
                                            Candidate Login
                                        </Link>
                                    )}
                                </div>
                            </div>
                            {/* <!-- Main Nav --> */}
                            <div className="header-nav navbar-collapse collapse justify-content-start" id="navbarNavDropdown">
                                <div className="logo-header logo-dark">
                                    <Link to="/">
                                        <img alt="" src="images/logo.png" />
                                    </Link>
                                </div>
                                <div className="logo-header logo-white">
                                    <Link to="/">
                                        <img alt="" src="images/logo-white.png" />
                                    </Link>
                                </div>
                                <ul className="nav navbar-nav">
                                    <li>
                                        <Link to="/about">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/browse-jobs">
                                            Browse Jobs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/companies">
                                            Companies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pricing">
                                            Pricing
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header END --> */}
            </header>
        </>
    )
}

export default Header;