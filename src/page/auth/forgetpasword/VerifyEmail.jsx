import { Link } from "react-router-dom";

function VerifyEmail(){
    return(
        <>
        <div class="page-content">
        {/* <!-- inner page banner --> */}
        <div class="dez-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage:"url(images/bnr2.jpg)"}}>
            <div class="container">
                <div class="dez-bnr-inr-entry">
                    <h1 class="text-white">Forget Password</h1>
					{/* <!-- Breadcrumb row --> */}
					<div class="breadcrumb-row">
						<ul class="list-inline">
							<li><Link to="/">Home</Link></li>
							<li>Forget Password</li>
						</ul>
					</div>
					{/* <!-- Breadcrumb row END --> */}
                </div>
            </div>
        </div>
        {/* <!-- inner page banner END -->
        <!-- contact area --> */}
        <div class="section-full content-inner-2 shop-account bg-white">
            {/* <!-- Product --> */}
            <div class="container">
               	<div class="max-w500 m-auto bg-white m-b30">
					<div class="p-a30 card browse-job radius-sm">
						<div class="tab-content nav">
							<form id="login" class="col-12 p-a0">
								<h4 class="font-weight-700">FORGET PASSWORD ?</h4>
								<p class="font-weight-600">We will send you an email to reset your password. </p>
								<div class="form-group">
									<label class="font-weight-700">E-MAIL *</label>
									<input name="dzName" required="" class="form-control" placeholder="Your Email Address" type="email"/>
								</div>
								<div class="text-left"> 
									<Link class="site-button outline gray button-lg" to="/login">Back</Link>
									<button class="site-button float-end button-lg">Submit</button>
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

export default VerifyEmail;