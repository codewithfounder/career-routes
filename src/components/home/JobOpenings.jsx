import React from "react";
import "./JobOpenings.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const companies = [
    {
        id: 1,
        logo:
            "images/company.gif",
        title: "Paytm Service Pvt. Ltd.",
        desc: "Digital payment and e-commerce facilitator.",
    },
    {
        id: 2,
        logo:
            "images/company.gif",
        title: "Zomato",
        desc: "Online food delivery marketplace.",
    },
    {
        id: 3,
        logo:
            "images/company.gif",
        title: "Swiggy",
        desc: "Food delivery and online ordering platform.",
    },
    {
        id: 4,
        logo:
            "images/company.gif",
        title: "Kotak Life Insurance",
        desc: "Life insurance and financial services company.",
    },
    {
        id: 5,
        logo:
            "images/company.gif",
        title: "Zepto",
        desc: "Delivery and instant grocery platform.",
    },
];

function JobOpenings() {
    return (
        <section className="job-main-section">
            <div className="container-fluid px-lg-5">

                {/* Heading */}
                <div className="job-heading">
                    <h2>Job Openings in Top Companies</h2>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Pagination]}
                    className="job-slider-main"
                    spaceBetween={25}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.1,
                        },
                        576: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2.2,
                        },
                        992: {
                            slidesPerView: 3.2,
                        },
                        1200: {
                            slidesPerView: 4.2,
                        },
                    }}
                >
                    {companies.map((company) => (
                        <SwiperSlide key={company.id}>
                            <div className="job-single-card">

                                <img
                                    src={company.logo}
                                    alt={company.title}
                                    className="job-company-logo job-profile-image"
                                />

                                <h3 className="job-company-title">
                                    {company.title}
                                </h3>

                                <p className="job-company-desc">
                                    {company.desc.length > 25
                                        ? company.desc.substring(0, 18) + "..."
                                        : company.desc}
                                </p>

                                <a href="/" className="job-view-btn">
                                    View jobs
                                    <span>›</span>
                                </a>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Bottom button */}
                <div className="job-bottom-btn">
                    <a href="/" className="job-all-btn">
                        View all
                        <span>›</span>
                    </a>
                </div>

            </div>
        </section>
    );
}

export default JobOpenings;