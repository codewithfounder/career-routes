import { Link } from "react-router-dom";

function Header() {
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
                                    <img alt="" src="images/logo1.png" />
                                </Link>
                            </div>
                            <div className="logo-header mostion logo-white">
                                <Link to="/">
                                    <img alt="" src="images/logo-white.png" />
                                </Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler collapsed navicon justify-content-end" data-bs-target="#navbarNavDropdown" data-bs-toggle="collapse" type="button">
                                <span>
                                </span>
                                <span>
                                </span>
                                <span>
                                </span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <Link className="layout-btn" to="javascript:void(0);">
                                        <input type="checkbox" />
                                        <span className="mode-label">
                                        </span>
                                    </Link>
                                    <Link className="site-button" to="/signup">
                                        <i className="fa fa-user">
                                        </i>
                                        Sign Up
                                    </Link>
                                    <Link className="site-button" to="/login">
                                        <i className="fa fa-lock">
                                        </i>
                                        login
                                    </Link>
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
                                        <Link to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/browse-jobs">
                                            Jobs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0);">
                                            Auth
                                            <i className="fa fa-chevron-down">
                                            </i>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link className="dez-page" to="/signup">
                                                    Register
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="/login">
                                                    Login
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <li>
                                        <Link to="javascript:void(0);">
                                            For Employers
                                            <i className="fa fa-chevron-down">
                                            </i>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link className="dez-page" to="company-profile.html">
                                                    Company Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="company-resume.html">
                                                    Employer Resume
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="company-post-jobs.html">
                                                    Post A Jobs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="company-manage-job.html">
                                                    Manage jobs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="company-transactions.html">
                                                    Transactions
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="browse-candidates.html">
                                                    Browse Candidates
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="javascript:void(0);">
                                                    Register
                                                    <i className="fa fa-angle-right">
                                                    </i>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link className="dez-page" to="create-account.html">
                                                            Employers Register
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dez-page" to="account-fresher.html">
                                                            Register Fresher
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dez-page" to="account-professional.html">
                                                            Register Professional
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {/* <li>
                                        <Link to="javascript:void(0);">
                                            Pages
                                            <i className="fa fa-chevron-down">
                                            </i>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link className="dez-page" to="about-us.html">
                                                    About Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="job-detail.html">
                                                    Job Detail
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="companies.html">
                                                    companies
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="free-job-alerts.html">
                                                    free job alerts
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="javascript:void(0);">
                                                    Browse Job
                                                    <i className="fa fa-angle-right">
                                                    </i>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link className="dez-page" to="browse-job-list.html">
                                                            browse job list
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dez-page" to="browse-job-grid.html">
                                                            browse job grid
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dez-page" to="browse-job-filter-list.html">
                                                            browse filter list
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dez-page" to="browse-job-filter-grid.html">
                                                            browse filter grid
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="javascript:void(0);">
                                                    Jobs
                                                    <i className="fa fa-angle-right">
                                                    </i>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link className="dez-page" to="category-all-jobs.html">
                                                            all jobs
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dez-page" to="category-company-jobs.html">
                                                            company jobs
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dez-page" to="category-designations-jobs.html">
                                                            designations jobs
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dez-page" to="category-jobs.html">
                                                            category jobs
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dez-page" to="category-location-jobs.html">
                                                            location jobs
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dez-page" to="category-skill-jobs.html">
                                                            skill jobs
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="javascript:void(0);">
                                                    Portfolio
                                                    <i className="fa fa-angle-right">
                                                    </i>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link className="dez-page" to="portfolio-grid-2.html">
                                                            Portfolio Grid 2
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dez-page" to="portfolio-grid-3.html">
                                                            Portfolio Grid 3
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dez-page" to="portfolio-grid-4.html">
                                                            Portfolio Grid 4
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="javascript:void(0);">
                                                    Login
                                                    <i className="fa fa-angle-right">
                                                    </i>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link className="dez-page" to="login.html">
                                                            login 1
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dez-page" to="login-2.html">
                                                            login 2
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dez-page" to="login-3.html">
                                                            login 3
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="javascript:void(0);">
                                                    register
                                                    <i className="fa fa-angle-right">
                                                    </i>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link className="dez-page" to="register.html">
                                                            register 1
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dez-page" to="register-2.html">
                                                            register 2
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="error-404.html">
                                                    Error 404
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="coming-soon.html">
                                                    Coming Soon
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="contact.html">
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {/* <li>
                                        <Link to="javascript:void(0);">
                                            Blog
                                            <i className="fa fa-chevron-down">
                                            </i>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link className="dez-page" to="blog-classic.html">
                                                    Classic
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="blog-classic-sidebar.html">
                                                    Classic Sidebar
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="blog-detailed-grid.html">
                                                    Detailed Grid
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="blog-detailed-grid-sidebar.html">
                                                    Detailed Grid Sidebar
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="blog-left-img.html">
                                                    Left Image Sidebar
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dez-page" to="blog-details.html">
                                                    Blog Details
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}
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