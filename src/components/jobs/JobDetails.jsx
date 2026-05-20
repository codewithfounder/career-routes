import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config/api";

function JobDetails() {
    const { id } = useParams();

    const [job, setJob] = useState({});
    const [loading, setLoading] = useState(true);

    const [latestJobs, setLatestJobs] = useState([]);

    useEffect(() => {
        getJobDetails();
        getLatestJobs();
    }, [id]);

    const getJobDetails = async () => {
        try {

            const response = await axios.get(
                `${BASE_URL}/jobs/job_details/${id}`
            );

            if (response.data.status) {
                setJob(response.data.data);
            }

        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false);
        }
    };

    const getLatestJobs = async () => {

        try {

            const response = await axios.get(
                `${BASE_URL}/jobs/latest_jobs`
            );

            if (response.data.status) {

                // Exclude current job and show only 3 jobs
                setLatestJobs(response.data.data.slice(0, 3));
            }

        } catch (error) {
            console.log(error);
        }
    };

    if (loading) {
        return <h3 className="text-center p-5">Loading...</h3>;
    }

    const getTimeAgo = (date) => {
        const now = new Date();
        const postDate = new Date(date);

        const seconds = Math.floor((now - postDate) / 1000);

        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(seconds / 3600);
        const days = Math.floor(seconds / 86400);

        if (seconds < 60) {
            return `${seconds} seconds ago`;
        } else if (minutes < 60) {
            return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
        } else if (hours < 24) {
            return `${hours} hour${hours > 1 ? "s" : ""} ago`;
        } else {
            return `${days} day${days > 1 ? "s" : ""} ago`;
        }
    };

    const applyJob = async () => {

        try {

            const token = localStorage.getItem("auth_token");

            if (!token) {

                alert("Please login first");
                return;
            }

            const payload = {
                job_id: job.id,
                recruiter_id: job.PostedBy
            };

            const response = await axios.post(
                `${BASE_URL}/jobs/apply_job`,
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert(response.data.message);

        } catch (error) {

            console.log(error);
        }
    };
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
                                                    <img
                                                        src="/images/pic4.jpg"
                                                        alt="job"
                                                        className="w-100" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-6">
                                                <div class="widget bg-white p-lr20 p-t20  widget_getintuch radius-sm">
                                                    <h4 class="text-black font-weight-700 p-t10 m-b15">Job Details</h4>
                                                    <ul>
                                                        <li><i class="ti-location-pin"></i><strong class="font-weight-700 text-black">Address</strong><span class="text-black-light"> {job.Location}</span></li>
                                                        <li><i class="ti-wallet"></i><strong class="font-weight-700 text-black">₹ Salary</strong> ₹{job.Salary} LPA</li>
                                                        <li><i class="ti-shield"></i><strong class="font-weight-700 text-black">Experience</strong> {job.Experience} Year</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div class="job-info-box">
                                        <h3 class="m-t0 m-b10 font-weight-700 title-head">{job.Title}</h3>
                                        <ul class="job-info">
                                            <li><strong>Education</strong> {job.Highest_qualification}</li>
                                            <li><strong>Deadline:</strong> {job.Post_date}</li>
                                            <li><i class="ti-location-pin text-black m-r5"></i> {job.Location} </li>
                                        </ul>
                                        <h5 class="font-weight-600 p-t20">Job Description</h5>
                                        {/* <p class="p-t20">{job.Job_description}</p> */}
                                        <div
                                            className="p-t20"
                                            dangerouslySetInnerHTML={{ __html: job.Job_description }}
                                        ></div>
                                        <div class="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                                        {/* <ul class="list-num-count no-round">
                                            <li>The DexignZone Privacy Policy was updated on 25 June 2021.</li>
                                            <li>Who We Are and What This Policy Covers</li>
                                            <li>Remaining essentially unchanged It was popularised in the 1960s </li>
                                            <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</li>
                                            <li>DexignZone standard dummy text ever since</li>
                                        </ul> */}
                                        <button class="site-button" onClick={applyJob}>Apply This Job</button>
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
                                {latestJobs.map((item) => (
                                    <li class="col-xl-4 col-lg-6 col-md-6" key={item.id}>
                                        <div class="post-bx">
                                            <div class="d-flex m-b30">
                                                <div class="job-post-info">
                                                    <h5><Link to={`/job-details/${item.id}`}>{item.Title}</Link></h5>
                                                    <ul>
                                                        <li><i class="fas fa-map-marker-alt"></i> {item.Company}</li>
                                                        <li><i class="far fa-clock"></i> {getTimeAgo(item.Post_date)}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="job-time me-auto">
                                                    <Link to="javascript:void(0);"><span>{item.Job_type}</span></Link>
                                                </div>
                                                <div class="salary-bx">
                                                    <span>₹{item.Salary} LPA</span>
                                                </div>
                                            </div>
                                            <label class="like-btn">
                                                <input type="checkbox" class="filled" />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Our Jobs END --> */}
                </div>
            </div >
        </>
    )
}

export default JobDetails;