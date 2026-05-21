import React from "react";
import "./HiringBanner.css";

// import your image
// import bannerImage from "/image/banner.webp";
// adjust path based on your project structure

function HiringBanner() {
    return (
        <section className="banner-wrapper">

            <div className="banner">

                {/* LEFT IMAGE */}

                <div className="banner-left">

                    <img
                        src="/images/man4.png"
                        alt="People"
                    />

                </div>

                {/* RIGHT CONTENT */}

                <div className="banner-right">

                    <div className="tag">
                        Career Routes FOR EMPLOYERS
                    </div>

                    <h1>
                        Want to hire?
                    </h1>

                    <p>
                        Find the best candidate from
                        5 crore+ active job seekers!
                    </p>

                    <button className="btn-banner">
                        Enquiry now →
                    </button>

                </div>

            </div>

        </section>
    );
}

export default HiringBanner;