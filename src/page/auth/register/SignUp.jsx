import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../config/api";

function SignUp(){
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		fullName: "",
		phone: "",
		email: "",
		password: "",
	});

	const [loading, setLoading] = useState(false);
	const handleChange = (e)=>{
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSignup = async (e) => {
	e.preventDefault();

	try {
		setLoading(true);

		const response = await fetch(`${BASE_URL}/auth/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		// GET RAW RESPONSE
		const text = await response.text();

		console.log("RAW RESPONSE:", text);

		// CHECK SERVER ERROR
		if (!response.ok) {
			throw new Error(`HTTP ${response.status}`);
		}

		// PARSE JSON
		const data = JSON.parse(text);

		if (data.status) {

			localStorage.setItem("user_id", data.user_id);

			alert(data.message);

			navigate("/verify-otp");

		} else {

			alert(data.message);

		}

	} catch (error) {

		console.log("FULL ERROR:", error);

		alert("Server error");

	} finally {

		setLoading(false);

	}
};

    return(
        <>
        <div className="page-content">
        {/* <!-- inner page banner --> */}
        <div className="dez-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(images/bnr2.jpg)" }}>
            <div className="container">
                <div className="dez-bnr-inr-entry">
                    <h1 className="text-white">Register</h1>
					{/* <!-- Breadcrumb row --> */}
					<div className="breadcrumb-row">
						<ul className="list-inline">
							<li><Link to="/">Home</Link></li>
							<li>Register</li>
						</ul>
					</div>
					{/* <!-- Breadcrumb row END --> */}
                </div>
            </div>
        </div>
        {/* <!-- inner page banner END -->
        <!-- contact area --> */}
        <div className="section-full content-inner browse-job bg-white shop-account">
            {/* <!-- Product --> */}
            <div className="container">
                <div className="row">
					<div className="col-md-12 m-b30">
						<div className="card max-w500 radius-sm m-auto">
							<div className="tab-content">
								<form id="login" className="tab-pane active" onSubmit={handleSignup}>
									<h4 className="font-weight-700 m-b5">PERSONAL INFORMATION</h4>
									<p className="font-weight-600">If you have an account with us, please log in.</p>
									<div className="form-group">
										<label className="font-weight-700">Full Name *</label>
										<input name="fullName" required className="form-control" placeholder="Full Name" type="text" value={formData.fullName} onChange={handleChange}/>
									</div>
									<div className="form-group">
										<label className="font-weight-700">Phone *</label>
										<input name="phone" required className="form-control" placeholder="Phone" type="tel" value={formData.phone} onChange={handleChange}/>
									</div>
									<div className="form-group">
										<label className="font-weight-700">E-MAIL *</label>
										<input name="email" required className="form-control" placeholder="Your Email Address" type="email" value={formData.email} onChange={handleChange}/>
									</div>
									<div className="form-group">
										<label className="font-weight-700">Password *</label>
										<input name="password" required className="form-control " placeholder="Type Password" type="password" value={formData.password} onChange={handleChange}/>
									</div>
									<div className="text-left">
										<button className="site-button button-lg outline outline-2" type="submit" disabled={loading}>{loading?"PLEASE WAIT...":"CREATE"}</button>
									</div>
								</form>
							</div>
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

export default SignUp;