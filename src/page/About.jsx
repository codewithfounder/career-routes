function About() {
    return (
        <>
            <div className="page-content bg-white">
                {/* <!-- inner page banner --> */}
                <div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(./images/bnr1.jpg)" }}>
                    <div className="container">
                        <div className="dez-bnr-inr-entry">
                            <h1 className="text-white">About Us</h1>
                            {/* <!-- Breadcrumb row --> */}
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><a href="index.html">Home</a></li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                            {/* <!-- Breadcrumb row END --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- inner page banner END --> */}
                <div className="content-block">
                    <div className="section-full content-inner">
                        <div className="container">
                            <div className="row align-items-center m-b50">
                                <div className="col-md-12 col-lg-6 m-b20">
                                    <h2 className="m-b5">About Us</h2>
                                    <h3 className="fw4">We create unique experiences</h3>
                                    <p className="m-b15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p>
                                    <p className="m-b15">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p>
                                    <a href="javascript:void(0)" className="site-button">Read More</a>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <img src="./images/pic1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                                    <div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
                                        <div className="icon-md text-primary m-b20"> <a href="#" className="icon-cell text-primary"><i className="ti-desktop"></i></a> </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte text-uppercase">Elegant / Unique design</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                                    <div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
                                        <div className="icon-md text-primary m-b20"> <a href="#" className="icon-cell text-primary"><i className="ti-image"></i></a> </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte text-uppercase">Make it Simple</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                                    <div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
                                        <div className="icon-md text-primary m-b20"> <a href="#" className="icon-cell text-primary"><i className="ti-cup"></i></a> </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte text-uppercase">Different Layout Type</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Why Chose Us -->
			<!-- Call To Action --> */}
                    <div className="section-full content-inner-2 call-to-action overlay-black-dark text-white text-center bg-img-fix" style={{ backgroundImage: "url(./images/bg4.jpg)" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="m-b10">Make a Difference with Your Online Resume!</h2>
                                    <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <a href="register-2.html" className="site-button m-t20 outline outline-2 radius-xl">Create an Account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Call To Action END -->*/}
                </div>
                {/* <!-- contact area END --> */}
            </div>
        </>
    )
}

export default About;