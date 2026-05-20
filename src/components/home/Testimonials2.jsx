import React from "react";
import "./Testimonials.css";

const testimonials = [
    {
        id: 1,
        name: "Shiwangi Singla",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        review:
            "Thanks Career Routes for helping me find a job without much hassle. If you are a fresher or skilled person, you can easily find a job through the app.",
    },

    {
        id: 2,
        name: "Jenil Ghevriya",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        review:
            "This app is very helpful if you are looking for a job. The team guided me through every stage and I quickly got interview calls after applying.",
    },

    {
        id: 3,
        name: "Kaynat Mansuri",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        review:
            "It is definitely a great app with complete job details. I would also recommend my friends for career development.",
    },
];

// duplicate for smooth infinite loop
const sliderData = [...testimonials, ...testimonials];

function Testimonials2() {
    return (
        <section className="testimonial-section mt-5">

            {/* LEFT */}

            <div className="left-box">

                <div className="quote-circle">
                    “
                </div>

                <h1>
                    Join the community
                    <br />
                    of 5 crore satisfied
                    <br />
                    job seekers...
                </h1>

                <div className="rating">

                    <span>Play Store Ratings</span>

                    <div className="stars">
                        ★★★★★
                    </div>

                </div>

            </div>

            {/* RIGHT */}

            <div className="right-box">

                <div className="scroll-wrapper">

                    {sliderData.map((item, index) => (
                        <div className="card" key={index}>

                            <div className="user">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div className="user-info">

                                    <h3>{item.name}</h3>

                                    <div className="rating-line">

                                        <span>
                                            4.5 ⭐⭐⭐⭐⭐
                                        </span>

                                        <span className="badge">
                                            PLACED
                                        </span>

                                    </div>

                                </div>

                            </div>

                            <p className="review">
                                "{item.review}"
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Testimonials2;