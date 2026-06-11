import { useEffect, useState } from "react";
import axios from "axios";

function RemoteJobs() {

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    axios
      .get(
        "http://localhost:3000/jobs"
      )
      .then((response) => {

        setJobs(
          response.data
        );

      })
      .catch((error) => {

        console.log(error);

      });

  }, []);

  const filteredJobs =
    jobs.filter((job) =>
      job.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (

    <div className="remote-page">

      <div className="remote-hero">

        <h1>Remote Jobs</h1>

        <p>
          Find your dream tech job
        </p>

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

      <div className="jobs-container">

        {filteredJobs.map((job) => (

          <div
            key={job.id}
            className="remote-job-card"
          >

            <h2>
              {job.title}
            </h2>

            <p>
              🏢 {job.company}
            </p>

            <p>
              📍 {job.location}
            </p>

            <p>
              💰 {job.salary}
            </p>

            <button>
              Apply Now
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default RemoteJobs;