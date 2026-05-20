import React from "react";
import "./PopularSearch.css";

const searchData = [
    {
        id: 1,
        trending: "TRENDING AT #1",
        title: "Work from home Jobs",
        bgText: "Work from",
        image:
            "/images/latest-search/img1.webp",
        active: true,
    },
    {
        id: 2,
        trending: "TRENDING AT #2",
        title: "Remote Jobs",
        bgText: "Remote",
        image:
            "/images/latest-search/img2.webp",
    },
    {
        id: 3,
        trending: "TRENDING AT #3",
        title: "Part time Jobs",
        bgText: "Part time",
        image:
            "/images/latest-search/img3.webp",
    },
    {
        id: 4,
        trending: "TRENDING AT #4",
        title: "Jobs for Women",
        bgText: "Jobs for",
        image:
            "/images/latest-search/img4.webp",
    },
    {
        id: 5,
        trending: "TRENDING AT #5",
        title: "Full time Jobs",
        bgText: "Full time",
        image:
            "/images/latest-search/img5.webp",
    },
];

function PopularSearch() {
    return (
        <section className="popular-search-wrapper">
            <div className="popular-search-grid">
                {/* LEFT TITLE */}
                <div className="popular-left">
                    <h2>
                        Popular
                        Searches on
                        Career Routes
                    </h2>
                </div>

                {/* CARDS */}
                {searchData.map((item) => (
                    <div
                        key={item.id}
                        className={`search-card ${item.active ? "active" : ""}`}
                    >
                        <p className="trending">{item.trending}</p>

                        <h3 className="card-title">{item.title}</h3>

                        <a href="/" className="view-btn">
                            View all <span>›</span>
                        </a>

                        <div className="bg-text">{item.bgText}</div>

                        <img src={item.image} className="card-img" alt={item.title} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PopularSearch;