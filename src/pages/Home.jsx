import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import jobsData from "../data/jobs";

function Home() {

  const [jobs, setJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  const [search, setSearch] = useState("");

  const [companyFilter,
    setCompanyFilter] =
    useState("");

  const [locationFilter,
    setLocationFilter] =
    useState("");

  useEffect(() => {

    setJobs(jobsData);

    const saved =
      JSON.parse(
        localStorage.getItem(
          "savedJobs"
        )
      ) || [];

    setSavedJobs(saved);

  }, []);

  const saveJob = (job) => {

    const exists =
      savedJobs.find(
        (item) =>
          item.id === job.id
      );

    if (exists) {

      alert(
        "Job Already Saved"
      );

      return;

    }

    const updatedJobs = [
      ...savedJobs,
      job
    ];

    setSavedJobs(updatedJobs);

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(updatedJobs)
    );

    alert(
      "Job Saved Successfully"
    );

  };

  const filteredJobs =
    jobs.filter((job) => {

      const titleMatch =
        job.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const companyMatch =
        companyFilter === "" ||
        job.company ===
        companyFilter;

      const locationMatch =
        locationFilter === "" ||
        job.location ===
        locationFilter;

      return (
        titleMatch &&
        companyMatch &&
        locationMatch
      );

    });

  return (

    <div>

      <div className="hero">

        <h1>
          Find Your Dream Job
        </h1>

        <p>
          Explore thousands of opportunities
          and build your career with TalentHub
        </p>

      </div>

      <div className="stats-container">

        <div className="stat-card">

          <h2>
            {jobs.length}
          </h2>

          <p>
            Total Jobs
          </p>

        </div>

        <div className="stat-card">

          <h2>
            {savedJobs.length}
          </h2>

          <p>
            Saved Jobs
          </p>

        </div>

      </div>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search Jobs..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

      </div>

      <div className="filter-section">

        <select
          value={companyFilter}
          onChange={(e) =>
            setCompanyFilter(
              e.target.value
            )
          }
        >

          <option value="">
            All Companies
          </option>

          {
            [...new Set(
              jobs.map(
                (job) =>
                  job.company
              )
            )].map((company) => (

              <option
                key={company}
                value={company}
              >
                {company}
              </option>

            ))
          }

        </select>

        <select
          value={locationFilter}
          onChange={(e) =>
            setLocationFilter(
              e.target.value
            )
          }
        >

          <option value="">
            All Locations
          </option>

          {
            [...new Set(
              jobs.map(
                (job) =>
                  job.location
              )
            )].map((location) => (

              <option
                key={location}
                value={location}
              >
                {location}
              </option>

            ))
          }

        </select>

      </div>

      <h2 className="section-title">
        Featured Jobs
      </h2>

      <div className="jobs-container">

        {
          filteredJobs.map((job) => (

            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              saveJob={() =>
                saveJob(job)
              }
            />

          ))
        }

      </div>

    </div>

  );

}

export default Home;