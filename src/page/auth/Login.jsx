import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config/api";

function Login() {
    const navigate = useNavigate();

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
            console.log(formData)
            const response = await fetch(`${BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.status) {
                alert(data.message);

                localStorage.setItem("auth_token", data.token);

                navigate(`/profile/${data.token}`);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.log("Login Error:", error);
            alert("Server error");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className="page-content">
                {/* <!-- inner page banner --> */}
                <div className="dez-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(/images/bnr2.jpg)" }}>
                    <div className="container">
                        <div className="dez-bnr-inr-entry">
                            <h1 className="text-white">Login</h1>
                            {/* <!-- Breadcrumb row --> */}
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link to="/">Home</Link></li>
                                    <li>Login</li>
                                </ul>
                            </div>
                            {/* <!-- Breadcrumb row END --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- inner page banner END -->
        <!-- contact area --> */}
                <div className="section-full content-inner-2 shop-account bg-white">
                    {/* <!-- Product --> */}
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
                    {/* <!-- Product END --> */}
                </div>
                {/* <!-- contact area  END --> */}
            </div>
        </>
    )
}

export default Login;