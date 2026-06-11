import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";

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

    fetchJobs();

    const saved =
      JSON.parse(
        localStorage.getItem(
          "savedJobs"
        )
      ) || [];

    setSavedJobs(saved);

  }, []);

  const fetchJobs = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:3000/jobs"
        );

      setJobs(response.data);

    } catch (error) {

      console.log(error);

    }

  };

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

      {/* HERO */}

      <div className="hero">

        <h1>
          Find Your Dream Job 
        </h1>

        <p>
          Explore thousands of opportunities
          and build your career with TalentHub
        </p>

      </div>

      {/* STATS */}

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

      {/* SEARCH */}

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

      {/* FILTER */}

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

      {/* TITLE */}

      <h2 className="section-title">
        Featured Jobs
      </h2>

      {/* JOBS */}

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