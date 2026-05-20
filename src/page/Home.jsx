import AboutWork from "../components/home/AboutWork";
import BannerSection from "../components/home/BannerSection";
import HiringBanner from "../components/home/HiringBanner";
import JobCategory from "../components/home/JobCategory";
import JobOpenings from "../components/home/JobOpenings";
import LatestJobs from "../components/home/LatestJobs";
import OurJob from "../components/home/OurJob";
import Partners from "../components/home/Partners";
import PopularSearch from "../components/home/PopularSearch";
import Testimonial from "../components/home/Testimonial";
import Testimonials2 from "../components/home/Testimonials2";
import TrendingJobs from "../components/home/TrendingJobs";

function Home() {
    return (
        <>
            <div class="page-content">
                {/* <!-- Section Banner --> */}
                <BannerSection />
                {/*<!-- Partners --> */}
                <Partners />
                {/* <!-- About Work --> */}
                {/* <AboutWork /> */}
                <PopularSearch />
                {/* <!-- Our Job --> */}
                <OurJob />
                {/*<!-- Job Category --> */}
                <JobCategory />
                <TrendingJobs />
                <JobOpenings />
                {/* <!-- Latest jobs --> */}
                <LatestJobs />
                {/* <!-- Reviews Testimonial --> */}
                <Testimonials2 />
                {/* <Testimonial /> */}
            </div>
            {/* <!-- Modal Box --> */}
            {/* <div class="section-full find-jobs">
                <div class="container">
                    <div class="find-jobs-inner">
                        <div class="section-head style-1">
                            <h3>
                                Let’s Get Connected And Start
                                Finding Your Dream Job
                            </h3>
                        </div>
                        <a class="site-button style-1" href="javascript:void(0);">
                            Click Here
                        </a>
                    </div>
                </div>
            </div> */}
            <HiringBanner />
        </>
    )
}

export default Home;