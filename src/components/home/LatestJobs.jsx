import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_URL } from "../../config/api";

function LatestJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchLatestJobs();
  }, [])
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
  return (
    <>
      <div className="section-full latest-jobs content-inner-1 bg-white">
        <div className="container">
          <div className="latest-jobs-inner">
            <div className="section-head style-1">
              <h6>
                Latest Job
              </h6>
              <h2 className="section-title-3">
                New Job Offer
              </h2>
              <p className="dz-text-2">
                More Than +500 Job Offer Everyday
              </p>
            </div>
            {/* <Link className="site-button style-1" to="javascript:void(0);">
              Post a Job
            </Link> */}
          </div>
          <div className="row sp20 m-b20">
            {jobs.map((job) => (
              <div className="col-xl-4 col-md-6" key={job.id}>
                <div className="job-wrapper m-b20">
                  <div className="jobs-profile d-flex align-items-center">
                    <div className="dz-icon">
                      <img alt="" src="images/company.gif" />
                    </div>
                    <div className="Profile-inner">
                      <h5 className="profile-name">
                        {job.Company}
                      </h5>
                      <span className="profile-positions">
                        {job.Title}
                      </span>
                    </div>
                  </div>
                  <div className="Profile-inner-2">
                    <p>
                      It is a long established fact that a reader
                      of a page when looking at its layout.
                    </p>
                    <div className="dz-buttons d-flex align-items-center">
                      <Link className="site-button style-1" to={`/job-details/${job.id}`}>
                        Apply Now
                      </Link>
                      <div className="dz-salary">
                        <span>
                          ₹ {job.Salary}
                        </span>
                        / LPA
                      </div>
                    </div>
                  </div>
                  <div className="dz-timing">
                    <span>
                      {getTimeAgo(job.Post_date)}
                    </span>
                    <Link to="javascript:void(0);">
                      {job.Job_type}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="jobs-btn">
            <Link className="site-button style-1" to="/browse-jobs">
              Load More
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestJobs;