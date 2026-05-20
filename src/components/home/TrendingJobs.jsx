import React from "react";
import "./TrendingJobs.css";

const firstRow = [
    {
        title: "Housekeeping",
        openings: "399 openings",
        icon: "/images/amazon.png",
    },
    {
        title: "Civil Engineer",
        openings: "338 openings",
        icon: "/images/man1.png",
    },
    {
        title: "Machine Operator",
        openings: "335 openings",
        icon: "/images/microsoft.png",
    },
    {
        title: "Hospitality",
        openings: "297 openings",
        icon: "/images/google.png",
    },
];

// duplicate for infinite effect
const firstRowLoop = [...firstRow, ...firstRow];

const secondRow = [
    {
        title: "Housekeeping",
        openings: "399 openings",
        icon: "/images/amazon.png",
    },
    {
        title: "Civil Engineer",
        openings: "338 openings",
        icon: "/images/man1.png",
    },
    {
        title: "Machine Operator",
        openings: "335 openings",
        icon: "/images/microsoft.png",
    },
    {
        title: "Hospitality",
        openings: "297 openings",
        icon: "/images/google.png",
    },
];

const secondRowLoop = [...secondRow, ...secondRow];

function TrendingJobs() {
    return (
        <section className="job-main-section">
            <div className="container-fluid">

                <h2 className="job-main-title">
                    Trending job roles on Career Routes
                </h2>

                {/* Row 1 */}

                <div className="job-scroll-wrapper">
                    <div className="job-scroll-track">

                        {firstRowLoop.map((job, index) => (
                            <div className="job-card-box" key={index}>

                                <div className="job-card-left">

                                    <div className="job-icon-circle">
                                        <img src={job.icon} alt={job.icon} />
                                    </div>

                                    <div className="job-card-content">
                                        <h3>{job.title}</h3>
                                        <p>{job.openings}</p>
                                    </div>

                                </div>

                                {/* <BsChevronRight className="job-arrow-icon" /> */}

                            </div>
                        ))}

                    </div>
                </div>

                {/* Row 2 */}

                <div className="job-scroll-wrapper">

                    <div className="job-scroll-track job-scroll-slow">

                        {secondRowLoop.map((job, index) => (
                            <div className="job-card-box" key={index}>

                                <div className="job-card-left">

                                    <div className="job-icon-circle">
                                        {/* <i class={`${job.icon}`}></i> */}
                                        <img src={job.icon} alt={job.icon} />
                                    </div>

                                    <div className="job-card-content">
                                        <h3>{job.title}</h3>
                                        <p>{job.openings}</p>
                                    </div>

                                </div>

                                {/* <BsChevronRight className="job-arrow-icon" /> */}

                            </div>
                        ))}

                    </div>

                </div>

                {/* Button */}

                <div className="job-btn-wrapper">

                    <a href="/" className="job-view-btn">
                        View all
                        {/* <BsChevronRight /> */}
                    </a>

                </div>

            </div>
        </section>
    );
}

export default TrendingJobs;