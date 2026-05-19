import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { BASE_URL } from "../../../config/api";

function VerifyOtp() {
    const navigate = useNavigate();
    const inputRefs = useRef([]);
    const [otp, setOtp] = useState("", "", "", "", "", "");
    const [loading, setLoading] = useState(false);

    const handleChange = (e, index) => {
        const value = e.target.value;

        // Only allow numbers
        if (!/^[0-9]?$/.test(value)) {
            e.target.value = "";
            return;
        }

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        // Move to previous input on backspace
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();

        const finalOtp = otp.join("");
        const userId = localStorage.getItem('user_id');

        if (!userId) {
            alert("User ID missing. Please signup again.");
            return;
        }

        if (finalOtp.length !== 6) {
            alert("Please enter 6 digit OTP");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(`${BASE_URL}/auth/verify_otp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: userId,
                    otp: finalOtp,
                }),
            });

            const data = await response.json();

            if (data.status) {
                alert(data.message);
                localStorage.removeItem("user_id");
                navigate(`/profile/${data.token}`);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
            alert("Server error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="page-content">

                {/* inner page banner */}
                <div
                    className="dez-bnr-inr overlay-black-middle bg-pt"
                    style={{ backgroundImage: "url(images/bnr2.jpg)" }}
                >
                    <div className="container">
                        <div className="dez-bnr-inr-entry">
                            <h1 className="text-white">OTP Verification</h1>

                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>OTP Verification</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* OTP area */}
                <div className="section-full content-inner browse-job bg-white shop-account">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 m-b30">

                                <div className="card max-w500 radius-sm m-auto">
                                    <div className="tab-content">

                                        <form className="tab-pane active" onSubmit={handleVerifyOtp}>

                                            <h4 className="font-weight-700 m-b5">
                                                VERIFY YOUR EMAIL
                                            </h4>

                                            <p className="font-weight-600">
                                                Enter the 6 digit OTP sent to your email.
                                            </p>

                                            <div
                                                className="form-group"
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                    justifyContent: "center",
                                                    marginBottom: "25px",
                                                }}
                                            >
                                                {[...Array(6)].map((_, index) => (
                                                    <input
                                                        key={index}
                                                        type="text"
                                                        maxLength="1"
                                                        className="form-control text-center p-0"
                                                        ref={(el) => (inputRefs.current[index] = el)}
                                                        onChange={(e) => handleChange(e, index)}
                                                        onKeyDown={(e) =>
                                                            handleKeyDown(e, index)
                                                        }
                                                        style={{
                                                            width: "50px",
                                                            height: "50px",
                                                            fontSize: "22px",
                                                            fontWeight: "600",
                                                        }}
                                                    />
                                                ))}
                                            </div>

                                            <div className="text-center">
                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    className="site-button button-lg outline outline-2"
                                                >
                                                    {loading ? "VERIFYING..." : "VERIFY OTP"}
                                                </button>
                                            </div>

                                            <div className="text-center m-t20">
                                                <p className="font-weight-600">
                                                    Didn't receive OTP?{" "}
                                                    <Link to="#" className="text-primary">
                                                        Resend OTP
                                                    </Link>
                                                </p>
                                            </div>

                                        </form>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* OTP area END */}
            </div>
        </>
    );
}

export default VerifyOtp;