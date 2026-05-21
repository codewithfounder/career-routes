import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { BASE_URL } from "../config/api";
import { useToast } from "../context/ToastContext";
import { Link } from "react-router-dom";

function AppliedJobs() {
    const { user } = useOutletContext();
    const { showToast } = useToast();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAppliedJobs();
    }, []);

    const fetchAppliedJobs = async () => {
        try {
            const token = localStorage.getItem("auth_token");
            console.log("Fetching applied jobs with token:", token);
            
            const response = await fetch(`${BASE_URL}/jobs/applied_jobs/${token}`);
            const data = await response.json();
            
            console.log("Applied jobs response:", data);
            
            if (data.status) {
                setAppliedJobs(data.data || []);
            } else {
                showToast(data.message || "Failed to load applied jobs", "error");
            }
        } catch (error) {
            console.log("Error fetching applied jobs:", error);
            showToast("Failed to load applied jobs", "error");
        } finally {
            setLoading(false);
        }
    };

    const getTimeAgo = (date) => {
        if (!date) return "Recently";
        
        const now = new Date();
        const postDate = new Date(date);
        const seconds = Math.floor((now - postDate) / 1000);
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
                        <p className="mt-3">Loading applied jobs...</p>
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
                        Applied Jobs
                    </h5>
                    <Link to="/" className="site-button right-arrow button-sm float-end">
                        Back
                    </Link>
                </div>

                {appliedJobs.length === 0 ? (
                    <div className="text-center p-5">
                        <i className="fa fa-briefcase fa-3x text-muted mb-3"></i>
                        <p>You haven't applied for any jobs yet.</p>
                        <Link to="/browse-jobs" className="site-button">
                            Browse Jobs
                        </Link>
                    </div>
                ) : (
                    <ul className="post-job-bx browse-job-grid row">
                        {appliedJobs.map((job) => (
                            <li className="col-xl-12 col-lg-12 col-md-12" key={job.id}>
                                <div className="post-bx">
                                    <div className="d-flex m-b30">
                                        <div className="job-post-info">
                                            <h5>
                                                <Link to={`/job-details/${job.Job_id}`}>
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
                                                    Applied: {getTimeAgo(job.applied_date)}
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
                                            <span className="text-success">
                                                <i className="fa fa-check-circle"></i> Application Submitted
                                            </span>
                                        </div>
                                        <div className="salary-bx">
                                            <span>₹{job.Salary || 0} LPA</span>
                                        </div>
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

export default AppliedJobs;