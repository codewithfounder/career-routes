import { Link } from "react-router-dom";

function JobDetails() {
    return (
        <>
            <div class="page-content bg-white">
                {/* <!-- inner page banner --> */}
                <div class="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(images/bnr2.jpg)" }}>
                    <div class="container">
                        <div class="dez-bnr-inr-entry">
                            <h1 class="text-white">Job Detail</h1>
                            {/* <!-- Breadcrumb row --> */}
                            <div class="breadcrumb-row">
                                <ul class="list-inline">
                                    <li><Link to="index.html">Home</Link></li>
                                    <li>Job Detail</li>
                                </ul>
                            </div>
                            {/* <!-- Breadcrumb row END --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- inner page banner END -->
        <!-- contact area --> */}
                <div class="content-block">
                    {/* <!-- Job Detail --> */}
                    <div class="section-full content-inner-1">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="sticky-top">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-6">
                                                <div class="m-b30">
                                                    <img src="images/pic4.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-6">
                                                <div class="widget bg-white p-lr20 p-t20  widget_getintuch radius-sm">
                                                    <h4 class="text-black font-weight-700 p-t10 m-b15">Job Details</h4>
                                                    <ul>
                                                        <li><i class="ti-location-pin"></i><strong class="font-weight-700 text-black">Address</strong><span class="text-black-light"> Demo Address #8901 Marmora Road Chi Minh City, Vietnam </span></li>
                                                        <li><i class="ti-money"></i><strong class="font-weight-700 text-black">Salary</strong> $800 Monthy</li>
                                                        <li><i class="ti-shield"></i><strong class="font-weight-700 text-black">Experience</strong>6 Year Experience</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div class="job-info-box">
                                        <h3 class="m-t0 m-b10 font-weight-700 title-head">Digital Marketing Executive</h3>
                                        <ul class="job-info">
                                            <li><strong>Education</strong> Web Designer</li>
                                            <li><strong>Deadline:</strong> 25th January 2021</li>
                                            <li><i class="ti-location-pin text-black m-r5"></i> NewYark </li>
                                        </ul>
                                        <p class="p-t20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <h5 class="font-weight-600">Job Description</h5>
                                        <div class="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <h5 class="font-weight-600">How to Apply</h5>
                                        <div class="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                        <h5 class="font-weight-600">Job Requirements</h5>
                                        <div class="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                                        <ul class="list-num-count no-round">
                                            <li>The DexignZone Privacy Policy was updated on 25 June 2021.</li>
                                            <li>Who We Are and What This Policy Covers</li>
                                            <li>Remaining essentially unchanged It was popularised in the 1960s </li>
                                            <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</li>
                                            <li>DexignZone standard dummy text ever since</li>
                                        </ul>
                                        <Link to="jobs-applied-job.html" class="site-button">Apply This Job</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Job Detail -->
			            <!-- Our Jobs --> */}
                    <div class="section-full content-inner">
                        <div class="container">
                            <ul class="post-job-bx browse-job-grid row">
                                <li class="col-xl-4 col-lg-6 col-md-6">
                                    <div class="post-bx">
                                        <div class="d-flex m-b30">
                                            <div class="job-post-info">
                                                <h5><Link to="/job-deails">Digital Marketing Executive</Link></h5>
                                                <ul>
                                                    <li><i class="fas fa-map-marker-alt"></i> Sacramento, California</li>
                                                    <li><i class="far fa-clock"></i> Published 11 months ago</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="job-time me-auto">
                                                <Link to="javascript:void(0);"><span>Full Time</span></Link>
                                            </div>
                                            <div class="salary-bx">
                                                <span>$1200 - $ 2500</span>
                                            </div>
                                        </div>
                                        <label class="like-btn">
                                            <input type="checkbox" class="filled" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li class="col-xl-4 col-lg-6 col-md-6">
                                    <div class="post-bx">
                                        <div class="d-flex m-b30">
                                            <div class="job-post-info">
                                                <h5><Link to="/job-deails">Digital Marketing Executive</Link></h5>
                                                <ul>
                                                    <li><i class="fas fa-map-marker-alt"></i> Sacramento, California</li>
                                                    <li><i class="far fa-clock"></i> Published 11 months ago</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="job-time me-auto">
                                                <Link to="javascript:void(0);"><span>Full Time</span></Link>
                                            </div>
                                            <div class="salary-bx">
                                                <span>$1200 - $ 2500</span>
                                            </div>
                                        </div>
                                        <label class="like-btn">
                                            <input type="checkbox" class="filled" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li class="col-xl-4 col-lg-6 col-md-6">
                                    <div class="post-bx">
                                        <div class="d-flex m-b30">
                                            <div class="job-post-info">
                                                <h5><Link to="/job-deails">Digital Marketing Executive</Link></h5>
                                                <ul>
                                                    <li><i class="fas fa-map-marker-alt"></i> Sacramento, California</li>
                                                    <li><i class="far fa-clock"></i> Published 11 months ago</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="job-time me-auto">
                                                <Link to="javascript:void(0);"><span>Full Time</span></Link>
                                            </div>
                                            <div class="salary-bx">
                                                <span>$1200 - $ 2500</span>
                                            </div>
                                        </div>
                                        <label class="like-btn">
                                            <input type="checkbox" class="filled" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Our Jobs END --> */}
                </div>
            </div>
        </>
    )
}

export default JobDetails;