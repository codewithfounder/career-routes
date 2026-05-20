import { Link } from "react-router-dom";

function LatestJobs() {
  const jobs = [
    {
      id: 1,
      company: "Infosys",
      title: "Java Developer",
      salary: "3-5",
      jobType: "Full Time",
      posted: "2 Days Ago",
      description:
        "We are looking for a skilled Java Developer with Spring Boot experience.",
    },
    {
      id: 2,
      company: "TCS",
      title: "React Developer",
      salary: "4-6",
      jobType: "Remote",
      posted: "1 Day Ago",
      description:
        "Join our frontend team and build scalable React applications.",
    },
    {
      id: 3,
      company: "Wipro",
      title: "UI/UX Designer",
      salary: "5-7",
      jobType: "Part Time",
      posted: "3 Days Ago",
      description:
        "Create modern and user-friendly interfaces for enterprise products.",
    },
    {
      id: 4,
      company: "Paytm",
      title: "Digital Marketing Executive",
      salary: "3-4",
      jobType: "Work From Home",
      posted: "Today",
      description:
        "Manage online campaigns and improve brand engagement.",
    },
    {
      id: 5,
      company: "HCL",
      title: "Node Developer",
      salary: "6-8",
      jobType: "Full Time",
      posted: "5 Days Ago",
      description:
        "Seeking backend developers experienced in Node.js.",
    },
    {
      id: 6,
      company: "Tech Mahindra",
      title: "Software Engineer",
      salary: "5-9",
      jobType: "Full Time",
      posted: "4 Days Ago",
      description:
        "Develop and maintain software solutions for global clients.",
    },
  ];

  return (
    <div className="section-full latest-jobs bg-white">
      <div className="container">

        <div className="latest-jobs-inner">
          <div className="section-head style-1">

            <h6>Latest Job</h6>

            <h2 className="section-title-3">
              New Job Offer
            </h2>

            <p className="dz-text-2">
              More Than +500 Job Offer Everyday
            </p>

          </div>
        </div>

        <div className="row">

          {jobs.map((job) => (
            <div
              className="col-xl-4 col-md-6 mb-4"
              key={job.id}
            >

              <div className="job-wrapper">

                <div className="jobs-profile d-flex align-items-center">

                  <div className="dz-icon">
                    <img
                      src="/images/company.gif"
                      alt="company"
                    />
                  </div>

                  <div className="Profile-inner">

                    <h5 className="profile-name">
                      {job.company}
                    </h5>

                    <span className="profile-positions">
                      {job.title}
                    </span>

                  </div>

                </div>

                <div className="Profile-inner-2">

                  <p>{job.description}</p>

                  <div className="dz-buttons d-flex align-items-center justify-content-between">

                    <Link
                      className="site-button style-1"
                      to="/job-details"
                    >
                      Apply Now
                    </Link>

                    <div className="dz-salary">
                      <span>₹ {job.salary}</span> / LPA
                    </div>

                  </div>

                </div>

                <div className="dz-timing d-flex justify-content-between mt-3">

                  <span>{job.posted}</span>

                  <span>
                    {job.jobType}
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="jobs-btn text-center mt-4">

          <Link
            className="site-button style-1"
            to="/browse-jobs"
          >
            Load More
          </Link>

        </div>
        .
      </div>
    </div>
  );
}

export default LatestJobs;