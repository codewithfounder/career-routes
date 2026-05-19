function BrowseJobs() {
    return (
        <>
            <div class="page-content bg-white">
                {/* <!-- inner page banner --> */}
                <div class="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}>
                    <div class="container">
                        <div class="dez-bnr-inr-entry">
                            <h1 class="text-white">Browse Job Filter Grid</h1>
                            {/* <!-- Breadcrumb row --> */}
                            <div class="breadcrumb-row">
                                <ul class="list-inline">
                                    <li><a href="index.html">Home</a></li>
                                    <li>Browse Job Filter Grid</li>
                                </ul>
                            </div>
                            {/* <!-- Breadcrumb row END --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- inner page banner END -->
		<!-- Filters Search --> */}
                <div class="section-full browse-job-find">
                    <div class="container">
                        <div class="find-job-bx">
                            <form class="dezPlaceAni">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="form-group">
                                            <label>Job Title, Keywords, or Phrase</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" />
                                                <div class="input-group-append">
                                                    <span class="input-group-text"><i class="fa fa-search"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6">
                                        <div class="form-group">
                                            <label>City, State or ZIP</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" />
                                                <div class="input-group-append">
                                                    <span class="input-group-text"><i class="fas fa-map-marker-alt"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6">
                                        <div class="form-group">
                                            <div class="dropdown bootstrap-select"><select class="">
                                                <option>Select Sector</option>
                                                <option>Construction</option>
                                                <option>Corodinator</option>
                                                <option>Employer</option>
                                                <option>Financial Career</option>
                                                <option>Information Technology</option>
                                                <option>Marketing</option>
                                                <option>Quality check</option>
                                                <option>Real Estate</option>
                                                <option>Sales</option>
                                                <option>Supporting</option>
                                                <option>Teaching</option>
                                            </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Select Sector"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Select Sector</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-1" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-6">
                                        <button type="submit" class="site-button btn-block">Find Job</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <!-- Filters Search END -->
        <!-- contact area --> */}
                <div class="content-block">
                    {/* <!-- Browse Jobs --> */}
                    <div class="section-full browse-job p-b50">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-5 m-b30">
                                    <aside id="accordion1" class="sticky-top sidebar-filter">
                                        <h6 class="title"><i class="fa fa-sliders m-r5"></i> Refined By <a href="javascript:void(0);" class="font-12 float-end">Reset All</a></h6>
                                        <div class="panel">
                                            <div class="acod-head">
                                                <h6 class="acod-title">
                                                    <a data-bs-toggle="collapse" href="#companies">
                                                        Companies
                                                    </a>
                                                </h6>
                                            </div>
                                            <div id="companies" class="acod-body collapse show">
                                                <div class="acod-content">
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="companies1" type="checkbox" name="checkbox-companies" />
                                                        <label class="form-check-label" for="companies1">Job Mirror Consultancy <span>(50)</span> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="companies2" type="checkbox" name="checkbox-companies" />
                                                        <label class="form-check-label" for="companies2">Engineering Group <span>(80)</span> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="companies3" type="checkbox" name="checkbox-companies" />
                                                        <label class="form-check-label" for="companies3">Electric Co. <span>(235)</span> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="companies4" type="checkbox" name="checkbox-companies" />
                                                        <label class="form-check-label" for="companies4">Telecom industry <span>(568)</span></label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="companies5" type="checkbox" name="checkbox-companies" />
                                                        <label class="form-check-label" for="companies5">Safety/ Health <span>(798)</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel">
                                            <div class="acod-head">
                                                <h6 class="acod-title">
                                                    <a data-bs-toggle="collapse" href="#experience" class="collapsed" aria-expanded="false">
                                                        Experience
                                                    </a>
                                                </h6>
                                            </div>
                                            <div id="experience" class="acod-body collapse">
                                                <div class="acod-content">
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="one-years" type="radio" name="radio-years" />
                                                        <label class="form-check-label" for="one-years">0-1 Years <span>(120)</span> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="two-years" type="radio" name="radio-years" />
                                                        <label class="form-check-label" for="two-years">1-2 Years <span>(300)</span> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="three-years" type="radio" name="radio-years" />
                                                        <label class="form-check-label" for="three-years">2-3 Years <span>(235)</span> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="four-years" type="radio" name="radio-years" />
                                                        <label class="form-check-label" for="four-years">3-4 Years <span>(568)</span></label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="five-years" type="radio" name="radio-years" />
                                                        <label class="form-check-label" for="five-years">4-5 Years <span>(798)</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel">
                                            <div class="acod-head">
                                                <h6 class="acod-title">
                                                    <a data-bs-toggle="collapse" href="#salary" class="collapsed">
                                                        Salary
                                                    </a>
                                                </h6>
                                            </div>
                                            <div id="salary" class="acod-body collapse">
                                                <div class="acod-content">
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="salary-op1" type="radio" name="radio-currency" />
                                                        <label class="form-check-label" for="salary-op1">0-1 lacs <span>(120)</span> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="salary-op2" type="radio" name="radio-currency" />
                                                        <label class="form-check-label" for="salary-op2">1-2 lacs <span>(300)</span> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="salary-op3" type="radio" name="radio-currency" />
                                                        <label class="form-check-label" for="salary-op3">2-3 lacs <span>(235)</span> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="salary-op4" type="radio" name="radio-currency" />
                                                        <label class="form-check-label" for="salary-op4">3-4 lacs <span>(568)</span></label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="salary-op5" type="radio" name="radio-currency" />
                                                        <label class="form-check-label" for="salary-op5">4-5 lacs <span>(798)</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel">
                                            <div class="acod-head">
                                                <h6 class="acod-title">
                                                    <a data-bs-toggle="collapse" href="#job-function" class="collapsed">
                                                        Job Function
                                                    </a>
                                                </h6>
                                            </div>
                                            <div id="job-function" class="acod-body collapse">
                                                <div class="acod-content">
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="function-services-1" type="radio" name="radio-function" />
                                                        <label class="form-check-label" for="function-services-1">Production Management <span>(120)</span> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="function-services-2" type="radio" name="radio-function" />
                                                        <label class="form-check-label" for="function-services-2">Design Engineering <span>(300)</span> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="function-services-3" type="radio" name="radio-function" />
                                                        <label class="form-check-label" for="function-services-3">Safety/ Health <span>(235)</span> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="function-services-4" type="radio" name="radio-function" />
                                                        <label class="form-check-label" for="function-services-4">Engineering <span>(568)</span></label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="function-services-5" type="radio" name="radio-function" />
                                                        <label class="form-check-label" for="function-services-5">Product Development <span>(798)</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel">
                                            <div class="acod-head">
                                                <h6 class="acod-title">
                                                    <a data-bs-toggle="collapse" href="#industry" class="collapsed">
                                                        Industry
                                                    </a>
                                                </h6>
                                            </div>
                                            <div id="industry" class="acod-body collapse">
                                                <div class="acod-content">
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="industry1" type="radio" name="radio-industry" />
                                                        <label class="form-check-label" for="industry1">Telecom <span>(5)</span> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="industry2" type="radio" name="radio-industry" />
                                                        <label class="form-check-label" for="industry2">Consulting Services <span>(10)</span> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="industry3" type="radio" name="radio-industry" />
                                                        <label class="form-check-label" for="industry3">Engineering/Projects <span>(15)</span> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="industry4" type="radio" name="radio-industry" />
                                                        <label class="form-check-label" for="industry4">Manufacturing/Industrial <span>(12)</span></label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="industry5" type="radio" name="radio-industry" />
                                                        <label class="form-check-label" for="industry5">Architecture/Interior Design <span>(8)</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                                <div class="col-xl-9 col-lg-8 col-md-7">
                                    <div class="job-bx-title clearfix">
                                        <h5 class="font-weight-700 float-start text-uppercase">2269 Jobs Found</h5>
                                        <div class="float-end">
                                            <span class="select-title">Sort by freshness</span>
                                            <div class="dropdown bootstrap-select dropup"><select class="" tabindex="null">
                                                <option>Last 2 Months</option>
                                                <option>Last Months</option>
                                                <option>Last Weeks</option>
                                                <option>Last 3 Days</option>
                                            </select>
                                                <button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Last 2 Months">
                                                    <div class="filter-option">
                                                        <div class="filter-option-inner">
                                                            <div class="filter-option-inner-inner">Last 2 Months</div>
                                                        </div>
                                                    </div>
                                                </button>
                                                <div class="dropdown-menu" style={{ maxHeight: "393.667px", overflow: "hidden", minHeight: "124px" }}>
                                                    <div class="inner show" role="listbox" id="bs-select-2" tabindex="-1" aria-activedescendant="bs-select-2-0" style={{maxHeight: "373.667px", overflowY: "auto", minHeight: "104px"}}>
                                                        <ul class="dropdown-menu inner show" role="presentation" style={{marginTop: "0px", marginBottom: "0px"}}>
                                                            <li class="selected active">
                                                                <a role="option" class="dropdown-item active selected" id="bs-select-2-0" tabindex="0" aria-setsize="4" aria-posinset="1" aria-selected="true">
                                                                    <span class="text">Last 2 Months</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a role="option" class="dropdown-item" id="bs-select-2-1" tabindex="0">
                                                                    <span class="text">Last Months</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a role="option" class="dropdown-item" id="bs-select-2-2" tabindex="0">
                                                                    <span class="text">Last Weeks</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a role="option" class="dropdown-item" id="bs-select-2-3" tabindex="0">
                                                                    <span class="text">Last 3 Days</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div class="float-end p-tb5 p-r10">
                                                <a href="browse-job-filter-list.html" class="p-lr5"><i class="fa fa-th-list"></i></a>
                                                <a href="browse-job-filter-grid.html" class="p-lr5"><i class="fa fa-th"></i></a>
                                            </div> */}
                                        </div>
                                    </div>
                                    <ul class="post-job-bx browse-job-grid row">
                                        <li class="col-lg-6 col-md-12">
                                            <div class="post-bx">
                                                <div class="d-flex m-b30">
                                                    <div class="job-post-info">
                                                        <h5><a href="/job-deails">Digital Marketing Executive</a></h5>
                                                        <ul>
                                                            <li><i class="fas fa-map-marker-alt"></i> Sacramento, California</li>
                                                            <li><i class="far fa-bookmark"></i> Full Time</li>
                                                            <li><i class="far fa-clock"></i> Published 11 months ago</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex">
                                                    <div class="job-time me-auto">
                                                        <a href="javascript:void(0);"><span>Full Time</span></a>
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
                                        <li class="col-lg-6 col-md-12">
                                            <div class="post-bx">
                                                <div class="d-flex m-b30">
                                                    <div class="job-post-info">
                                                        <h5><a href="/job-deails">Digital Marketing Executive</a></h5>
                                                        <ul>
                                                            <li><i class="fas fa-map-marker-alt"></i> Sacramento, California</li>
                                                            <li><i class="far fa-bookmark"></i> Full Time</li>
                                                            <li><i class="far fa-clock"></i> Published 11 months ago</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex">
                                                    <div class="job-time me-auto">
                                                        <a href="javascript:void(0);"><span>Full Time</span></a>
                                                    </div>
                                                    <div class="salary-bx">
                                                        <span>$1200 - $ 2500</span>
                                                    </div>
                                                </div>
                                                <label class="like-btn">
                                                    <input type="checkbox" />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </li>
                                        <li class="col-lg-6 col-md-12">
                                            <div class="post-bx">
                                                <div class="d-flex m-b30">
                                                    <div class="job-post-info">
                                                        <h5><a href="/job-deails">Digital Marketing Executive</a></h5>
                                                        <ul>
                                                            <li><i class="fas fa-map-marker-alt"></i> Sacramento, California</li>
                                                            <li><i class="far fa-bookmark"></i> Full Time</li>
                                                            <li><i class="far fa-clock"></i> Published 11 months ago</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex">
                                                    <div class="job-time me-auto">
                                                        <a href="javascript:void(0);"><span>Full Time</span></a>
                                                    </div>
                                                    <div class="salary-bx">
                                                        <span>$1200 - $ 2500</span>
                                                    </div>
                                                </div>
                                                <label class="like-btn">
                                                    <input type="checkbox" />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </li>
                                        <li class="col-lg-6 col-md-12">
                                            <div class="post-bx">
                                                <div class="d-flex m-b30">
                                                    <div class="job-post-info">
                                                        <h5><a href="/job-deails">Digital Marketing Executive</a></h5>
                                                        <ul>
                                                            <li><i class="fas fa-map-marker-alt"></i> Sacramento, California</li>
                                                            <li><i class="far fa-bookmark"></i> Full Time</li>
                                                            <li><i class="far fa-clock"></i> Published 11 months ago</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex">
                                                    <div class="job-time me-auto">
                                                        <a href="javascript:void(0);"><span>Full Time</span></a>
                                                    </div>
                                                    <div class="salary-bx">
                                                        <span>$1200 - $ 2500</span>
                                                    </div>
                                                </div>
                                                <label class="like-btn">
                                                    <input type="checkbox" />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </li>
                                        <li class="col-lg-6 col-md-12">
                                            <div class="post-bx">
                                                <div class="d-flex m-b30">
                                                    <div class="job-post-info">
                                                        <h5><a href="/job-deails">Digital Marketing Executive</a></h5>
                                                        <ul>
                                                            <li><i class="fas fa-map-marker-alt"></i> Sacramento, California</li>
                                                            <li><i class="far fa-bookmark"></i> Full Time</li>
                                                            <li><i class="far fa-clock"></i> Published 11 months ago</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex">
                                                    <div class="job-time me-auto">
                                                        <a href="javascript:void(0);"><span>Full Time</span></a>
                                                    </div>
                                                    <div class="salary-bx">
                                                        <span>$1200 - $ 2500</span>
                                                    </div>
                                                </div>
                                                <label class="like-btn">
                                                    <input type="checkbox" />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </li>
                                        <li class="col-lg-6 col-md-12">
                                            <div class="post-bx">
                                                <div class="d-flex m-b30">
                                                    <div class="job-post-info">
                                                        <h5><a href="/job-deails">Digital Marketing Executive</a></h5>
                                                        <ul>
                                                            <li><i class="fas fa-map-marker-alt"></i> Sacramento, California</li>
                                                            <li><i class="far fa-bookmark"></i> Full Time</li>
                                                            <li><i class="far fa-clock"></i> Published 11 months ago</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex">
                                                    <div class="job-time me-auto">
                                                        <a href="javascript:void(0);"><span>Full Time</span></a>
                                                    </div>
                                                    <div class="salary-bx">
                                                        <span>$1200 - $ 2500</span>
                                                    </div>
                                                </div>
                                                <label class="like-btn">
                                                    <input type="checkbox" />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </li>
                                        <li class="col-lg-6 col-md-12">
                                            <div class="post-bx">
                                                <div class="d-flex m-b30">
                                                    <div class="job-post-info">
                                                        <h5><a href="/job-deails">Digital Marketing Executive</a></h5>
                                                        <ul>
                                                            <li><i class="fas fa-map-marker-alt"></i> Sacramento, California</li>
                                                            <li><i class="far fa-bookmark"></i> Full Time</li>
                                                            <li><i class="far fa-clock"></i> Published 11 months ago</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex">
                                                    <div class="job-time me-auto">
                                                        <a href="javascript:void(0);"><span>Full Time</span></a>
                                                    </div>
                                                    <div class="salary-bx">
                                                        <span>$1200 - $ 2500</span>
                                                    </div>
                                                </div>
                                                <label class="like-btn">
                                                    <input type="checkbox" />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </li>
                                        <li class="col-lg-6 col-md-12">
                                            <div class="post-bx">
                                                <div class="d-flex m-b30">
                                                    <div class="job-post-info">
                                                        <h5><a href="/job-deails">Digital Marketing Executive</a></h5>
                                                        <ul>
                                                            <li><i class="fas fa-map-marker-alt"></i> Sacramento, California</li>
                                                            <li><i class="far fa-bookmark"></i> Full Time</li>
                                                            <li><i class="far fa-clock"></i> Published 11 months ago</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="d-flex">
                                                    <div class="job-time me-auto">
                                                        <a href="javascript:void(0);"><span>Full Time</span></a>
                                                    </div>
                                                    <div class="salary-bx">
                                                        <span>$1200 - $ 2500</span>
                                                    </div>
                                                </div>
                                                <label class="like-btn">
                                                    <input type="checkbox" />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="pagination-bx float-end m-t30">
                                        <ul class="pagination">
                                            <li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
                                            <li class="active"><a href="javascript:void(0);">1</a></li>
                                            <li><a href="javascript:void(0);">2</a></li>
                                            <li><a href="javascript:void(0);">3</a></li>
                                            <li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Browse Jobs END --> */}
                </div>
            </div>
        </>
    )
}

export default BrowseJobs;