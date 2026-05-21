import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config/api";
import { useToast } from "../../context/ToastContext";

function Login() {
    const navigate = useNavigate();
    const { showToast } = useToast();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await fetch(
                `${BASE_URL}/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (data.status) {
                localStorage.setItem("auth_token", data.token);
                
                if (data.user) {
                    localStorage.setItem("user_data", JSON.stringify(data.user));
                }
                
                // Dispatch custom event to update header and other components
                window.dispatchEvent(new Event("authChange"));
                
                showToast(data.message || "Login successful!", "success");

                setTimeout(() => {
                    navigate(`/profile/${data.token}`);
                }, 1000);

            } else {
                showToast(data.message || "Login failed", "error");
            }

        } catch (error) {
            console.log("Login Error:", error);
            showToast("Server error. Please try again.", "error");
        } finally {
            setLoading(false);
        }
    };
    
    return (
        // Your existing JSX
        <div className="page-content">
            <div className="dez-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(/images/bnr2.jpg)" }}>
                <div className="container">
                    <div className="dez-bnr-inr-entry">
                        <h1 className="text-white">Login</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link to="/">Home</Link></li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full content-inner-2 shop-account bg-white">
                <div className="container">
                    <div className="max-w500 m-auto bg-white m-b30">
                        <div className="p-a30 card browse-job radius-sm">
                            <div className="tab-content nav">
                                <form id="login" className="tab-pane active col-12 p-a0 " onSubmit={handleLogin}>
                                    <h4 className="font-weight-700">LOGIN</h4>
                                    <p className="font-weight-600">If you have an account with us, please log in.</p>
                                    <div className="form-group">
                                        <label className="font-weight-700">E-MAIL *</label>
                                        <input name="email" required className="form-control" placeholder="Your Email Address" type="email" value={formData.email} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="font-weight-700">PASSWORD *</label>
                                        <input name="password" required className="form-control " placeholder="Type Password" type="password" value={formData.password} onChange={handleChange} />
                                    </div>
                                    <div className="text-left">
                                        <button
                                            className="site-button m-r5 button-lg"
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {loading ? "Please Wait..." : "Login"}
                                        </button>

                                        <Link
                                            to="/forgetpassword"
                                            className="m-l5 m-t15 forget-pass float-end"
                                        >
                                            <i className="fa fa-unlock-alt"></i> Forgot Password
                                        </Link>

                                        <div className="m-t20">
                                            <span>Don't have an account? </span>
                                            <Link to="/signup" className="text-primary font-weight-600">
                                                Register Here
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;