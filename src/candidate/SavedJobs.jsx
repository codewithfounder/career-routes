import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { BASE_URL } from "../config/api";
import { useToast } from "../context/ToastContext";
import { Link } from "react-router-dom";

function SavedJobs() {
    const { user } = useOutletContext();
    const { showToast } = useToast();
    const [savedJobs, setSavedJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSavedJobs();
    }, []);

    const fetchSavedJobs = async () => {
        try {
            const token = localStorage.getItem("auth_token");
            const response = await fetch(`${BASE_URL}/jobs/saved_jobs/${token}`);
            const data = await response.json();
            
            console.log(data)
            if (data.status) {
                setSavedJobs(data.data || []);
            } else {
                showToast(data.message || "Failed to load saved jobs", "error");
            }
        } catch (error) {
            console.log("Error fetching saved jobs:", error);
            showToast("Failed to load saved jobs", "error");
        } finally {
            setLoading(false);
        }
    };

    const removeSavedJob = async (jobId) => {
        try {
            const token = localStorage.getItem("auth_token");
            const response = await fetch(`${BASE_URL}/jobs/remove_saved_job`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    job_id: jobId, 
                    token: token 
                }),
            });
            const data = await response.json();
            
            if (data.status) {
                showToast("Job removed from saved list", "success");
                fetchSavedJobs(); // Refresh the list
            } else {
                showToast(data.message || "Failed to remove job", "error");
            }
        } catch (error) {
            console.log("Error removing saved job:", error);
            showToast("Failed to remove job", "error");
        }
    };

    const getTimeAgo = (date) => {
        if (!date) return "Recently";
        
        const now = new Date();
        const savedDate = new Date(date);
        const seconds = Math.floor((now - savedDate) / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(seconds / 3600);
        const days = Math.floor(seconds / 86400);

        if (seconds < 60) return `${seconds} seconds ago`;
        if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
        if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
        return `${days} day${days > 1 ? "s" : ""} ago`;
    };

    if (loading) {
        return (
            <div className="col-xl-9 col-lg-8 m-b30">
                <div className="job-bx job-profile">
                    <div className="text-center p-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Loading saved jobs...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="col-xl-9 col-lg-8 m-b30">
            <div className="job-bx job-profile">
                <div className="job-bx-title clearfix">
                    <h5 className="font-weight-700 float-start text-uppercase">
                        Saved Jobs ({savedJobs.length})
                    </h5>
                    <Link to="/" className="site-button right-arrow button-sm float-end">
                        Back
                    </Link>
                </div>

                {savedJobs.length === 0 ? (
                    <div className="text-center p-5">
                        <i className="fa fa-heart fa-3x text-muted mb-3"></i>
                        <p>You haven't saved any jobs yet.</p>
                        <Link to="/browse-jobs" className="site-button">
                            Browse Jobs
                        </Link>
                    </div>
                ) : (
                    <ul className="post-job-bx browse-job-grid row">
                        {savedJobs.map((job) => (
                            <li className="col-xl-12 col-lg-12 col-md-12" key={job.id}>
                                <div className="post-bx">
                                    <div className="d-flex m-b30">
                                        <div className="job-post-info">
                                            <h5>
                                                <Link to={`/job-details/${job.job_id}`}>
                                                    {job.Title}
                                                </Link>
                                            </h5>
                                            <ul>
                                                <li>
                                                    <i className="fas fa-map-marker-alt"></i> 
                                                    {job.Company || job.Location || "Location not specified"}
                                                </li>
                                                <li>
                                                    <i className="far fa-clock"></i> 
                                                    Saved: {getTimeAgo(job.saved_date)}
                                                </li>
                                                <li>
                                                    <i className="fas fa-briefcase"></i> 
                                                    Job Type: {job.Job_type || "Not specified"}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="job-time me-auto">
                                            <span className="text-primary">
                                                <i className="fa fa-bookmark"></i> Saved
                                            </span>
                                        </div>
                                        <div className="salary-bx">
                                            <span>₹{job.Salary || 0} LPA</span>
                                        </div>
                                        <button 
                                            onClick={() => removeSavedJob(job.job_id)}
                                            className="btn btn-sm btn-danger ms-3"
                                        >
                                            <i className="fa fa-trash"></i> Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default SavedJobs;