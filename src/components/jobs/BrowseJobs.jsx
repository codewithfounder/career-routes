import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import FilterSearch from './filter/FilterSearch';
import FilterByMonth from './filter/FilterByMonth';
import NavigationBar from './navigation/NavigationBar';
import axios from 'axios';
import { BASE_URL } from '../../config/api';
import { useToast } from '../../context/ToastContext';

function BrowseJobs() {
    const { showToast } = useToast();
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [savedJobs, setSavedJobs] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const jobsPerPage = 9;

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        setIsLoggedIn(!!token);
        fetchLatestJobs();
    }, [])

    // Check saved status for all jobs
    useEffect(() => {
        if (jobs.length > 0 && isLoggedIn) {
            checkSavedStatusForJobs();
        }
    }, [jobs, isLoggedIn]);

    const fetchLatestJobs = async () => {
        try {
            const response = await axios.get(
                `${BASE_URL}/jobs/latest_jobs`
            );

            if (response.data.status) {
                setJobs(response.data.data);
            }
        } catch (error) {
            console.log(error);
            showToast("Failed to load jobs", "error");
        }
    };

    const checkSavedStatusForJobs = async () => {
        const token = localStorage.getItem("auth_token");
        if (!token) return;

        try {
            // Check saved status for each job
            const savedStatusMap = {};
            
            for (const job of jobs) {
                const response = await axios.post(
                    `${BASE_URL}/jobs/check_saved_job`,
                    {
                        job_id: job.id,
                        token: token
                    }
                );
                
                if (response.data.status) {
                    savedStatusMap[job.id] = response.data.is_saved;
                }
            }
            
            setSavedJobs(savedStatusMap);
        } catch (error) {
            console.log("Error checking saved status:", error);
        }
    };

    const handleSaveJob = async (jobId, event) => {
        event.preventDefault();
        event.stopPropagation();
        
        const token = localStorage.getItem("auth_token");
        
        if (!token) {
            showToast("Please login to save jobs", "error");
            return;
        }
        
        const isCurrentlySaved = savedJobs[jobId];
        const url = isCurrentlySaved 
            ? `${BASE_URL}/jobs/remove_saved_job` 
            : `${BASE_URL}/jobs/save_job`;
        
        try {
            const response = await axios.post(url, {
                job_id: jobId,
                token: token
            });
            
            if (response.data.status) {
                setSavedJobs(prev => ({
                    ...prev,
                    [jobId]: !isCurrentlySaved
                }));
                showToast(response.data.message, "success");
            } else {
                showToast(response.data.message, "error");
            }
        } catch (error) {
            console.error("Error saving job:", error);
            showToast("Something went wrong", "error");
        }
    };

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

    // Pagination Logic
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(
        indexOfFirstJob,
        indexOfLastJob
    );

    const totalPages = Math.ceil(
        jobs.length / jobsPerPage
    );

    return (
        <>
            <div className="page-content bg-white">

                {/* inner page banner */}
                <div
                    className="dez-bnr-inr overlay-black-middle"
                    style={{
                        backgroundImage:
                            "url(images/banner/bnr1.jpg)"
                    }}
                >
                    <div className="container">
                        <div className="dez-bnr-inr-entry">
                            <h1 className="text-white">
                                Browse Job Filter Grid
                            </h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>Browse Job Filter Grid</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <FilterSearch />

                <div className="section-full bg-white p-b50">
                    <div className="container">
                        <FilterByMonth />

                        <ul className="post-job-bx browse-job-grid row">
                            {currentJobs.length > 0 ? (
                                currentJobs.map((job, index) => (
                                    <li
                                        className="col-lg-4 col-md-6"
                                        key={job.id || index}
                                    >
                                        <div className="post-bx">
                                            <div className="d-flex m-b30">
                                                <div className="job-post-info">
                                                    <h5>
                                                        <Link to={`/job-details/${job.id}`}>
                                                            {job.Title}
                                                        </Link>
                                                    </h5>
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-map-marker-alt"></i>
                                                            {" "}{job.Location}
                                                        </li>
                                                        <li>
                                                            <i className="far fa-bookmark"></i>
                                                            {" "}{job.Job_type}
                                                        </li>
                                                        <li>
                                                            <i className="far fa-clock"></i>
                                                            {" "}{getTimeAgo(job.Post_date)}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="d-flex">
                                                <div className="job-time me-auto">
                                                    <Link to={`/job-details/${job.id}`}>
                                                        <span>{job.Job_type}</span>
                                                    </Link>
                                                </div>
                                                <div className="salary-bx">
                                                    <span>₹ {job.Salary} LPA</span>
                                                </div>
                                            </div>

                                            <label className="like-btn">
                                                <input 
                                                    type="checkbox" 
                                                    checked={savedJobs[job.id] || false}
                                                    onChange={(e) => handleSaveJob(job.id, e)}
                                                />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <div className="text-center py-5">
                                    <h4>No jobs found</h4>
                                    <p>Please check back later.</p>
                                </div>
                            )}
                        </ul>

                        <NavigationBar
                            currentPage={currentPage}
                            totalPages={totalPages}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrowseJobs;