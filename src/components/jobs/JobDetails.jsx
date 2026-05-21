import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config/api";
import { useToast } from "../../context/ToastContext";

function JobDetails({ setNotification }) {
    const { id } = useParams();
    const { showToast } = useToast();

    const [statusCard, setStatusCard] = useState({
        show: false,
        status: "",
        message: ""
    });

    const [job, setJob] = useState({});
    const [loading, setLoading] = useState(true);
    const [latestJobs, setLatestJobs] = useState([]);
    const [isSaved, setIsSaved] = useState(false);
    const [savedJobsMap, setSavedJobsMap] = useState({});

    useEffect(() => {
        getJobDetails();
        getLatestJobs();
        checkIfSaved();
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
                const jobs = response.data.data.slice(0, 3);
                setLatestJobs(jobs);
                // Check saved status for latest jobs
                checkSavedStatusForJobs(jobs);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const checkSavedStatusForJobs = async (jobs) => {
        const token = localStorage.getItem("auth_token");
        if (!token) return;

        const statusMap = {};
        for (const job of jobs) {
            try {
                const response = await axios.post(
                    `${BASE_URL}/jobs/check_saved_job`,
                    {
                        job_id: job.id,
                        token: token
                    }
                );
                if (response.data.status) {
                    statusMap[job.id] = response.data.is_saved;
                }
            } catch (error) {
                console.log("Error checking saved status:", error);
            }
        }
        setSavedJobsMap(statusMap);
    };

    const checkIfSaved = async () => {
        const token = localStorage.getItem("auth_token");
        if (!token) return;

        try {
            const response = await axios.post(
                `${BASE_URL}/jobs/check_saved_job`,
                {
                    job_id: id,
                    token: token
                }
            );
            
            if (response.data.status) {
                setIsSaved(response.data.is_saved);
            }
        } catch (error) {
            console.log("Error checking saved status:", error);
        }
    };

    const handleSaveJob = async (jobId, event) => {
        // Prevent event bubbling
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        const token = localStorage.getItem("auth_token");
        
        if (!token) {
            showToast("Please login to save jobs", "error");
            return;
        }
        
        const isCurrentlySaved = jobId === parseInt(id) ? isSaved : savedJobsMap[jobId];
        const url = isCurrentlySaved 
            ? `${BASE_URL}/jobs/remove_saved_job` 
            : `${BASE_URL}/jobs/save_job`;
        
        try {
            const response = await axios.post(url, {
                job_id: jobId,
                token: token
            });
            
            if (response.data.status) {
                if (jobId === parseInt(id)) {
                    setIsSaved(!isCurrentlySaved);
                } else {
                    setSavedJobsMap(prev => ({
                        ...prev,
                        [jobId]: !isCurrentlySaved
                    }));
                }
                showToast(response.data.message, "success");
            } else {
                showToast(response.data.message, "error");
            }
        } catch (error) {
            console.error("Error saving job:", error);
            showToast("Something went wrong", "error");
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
                showToast("Please login first", "error");
                return;
            }

            const payload = {
                job_id: job.id,
                recruiter_id: job.PostedBY,
                token: token
            };

            const response = await axios.post(
                `${BASE_URL}/jobs/apply_job`,
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data.status) {
                showToast(response.data.message, "success");
            } else {
                showToast(response.data.message, "error");
            }
        }
        catch (error) {
            showToast(error?.response?.data?.message || "Something went wrong", "error");
        }
    };

    return (
        <>
            <div className="page-content bg-white">
                {/* <!-- inner page banner --> */}
                <div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(images/bnr2.jpg)" }}>
                    <div className="container">
                        <div className="dez-bnr-inr-entry">
                            <h1 className="text-white">Job Detail</h1>
                            {/* <!-- Breadcrumb row --> */}
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link to="/">Home</Link></li>
                                    <li>Job Detail</li>
                                </ul>
                            </div>
                            {/* <!-- Breadcrumb row END --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- inner page banner END -->
        <!-- contact area --> */}
                <div className="content-block">
                    {/* <!-- Job Detail --> */}
                    <div className="section-full content-inner-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="sticky-top">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-6">
                                                <div className="m-b30">
                                                    <img
                                                        src="/images/pic4.jpg"
                                                        alt="job"
                                                        className="w-100" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="widget bg-white p-lr20 p-t20  widget_getintuch radius-sm">
                                                    <h4 className="text-black font-weight-700 p-t10 m-b15">Job Details</h4>
                                                    <ul>
                                                        <li><i className="ti-location-pin"></i><strong className="font-weight-700 text-black">Address</strong><span className="text-black-light"> {job.Location}</span></li>
                                                        <li><i className="ti-wallet"></i><strong className="font-weight-700 text-black">₹ Salary</strong> ₹{job.Salary} LPA</li>
                                                        <li><i className="ti-shield"></i><strong className="font-weight-700 text-black">Experience</strong> {job.Experience} Year</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="job-info-box">
                                        <h3 className="m-t0 m-b10 font-weight-700 title-head">{job.Title}</h3>
                                        <ul className="job-info">
                                            <li><strong>Education</strong> {job.Highest_qualification}</li>
                                            <li><strong>Deadline:</strong> {job.Post_date}</li>
                                            <li><i className="ti-location-pin text-black m-r5"></i> {job.Location} </li>
                                        </ul>
                                        <h5 className="font-weight-600 p-t20">Job Description</h5>
                                        {/* <p className="p-t20">{job.Job_description}</p> */}
                                        <div
                                            className="p-t20"
                                            dangerouslySetInnerHTML={{ __html: job.Job_description }}
                                        ></div>
                                        <div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                                        <button className="site-button" onClick={applyJob}>Apply This Job</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Job Detail -->
			            <!-- Our Jobs --> */}
                    <div className="section-full content-inner">
                        <div className="container">
                            <ul className="post-job-bx browse-job-grid row">
                                {latestJobs.map((item) => (
                                    <li className="col-lg-4 col-md-6" key={item.id}>
                                        <div className="post-bx">
                                            <div className="d-flex m-b30">
                                                <div className="job-post-info">
                                                    <h5><Link to={`/job-details/${item.id}`}>{item.Title}</Link></h5>
                                                    <ul>
                                                        <li><i className="fas fa-map-marker-alt"></i> {item.Company}</li>
                                                        <li><i className="far fa-clock"></i> {getTimeAgo(item.Post_date)}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="job-time me-auto">
                                                    <Link to={`/job-details/${item.id}`}>
                                                        <span>{item.Job_type}</span>
                                                    </Link>
                                                </div>
                                                <div className="salary-bx">
                                                    <span>₹{item.Salary} LPA</span>
                                                </div>
                                            </div>
                                            <label className="like-btn" onClick={(e) => e.stopPropagation()}>
                                                <input 
                                                    type="checkbox" 
                                                    className="filled"
                                                    checked={savedJobsMap[item.id] || false}
                                                    onChange={(e) => {
                                                        e.stopPropagation();
                                                        handleSaveJob(item.id, e);
                                                    }}
                                                />
                                                <span className="checkmark"></span>
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