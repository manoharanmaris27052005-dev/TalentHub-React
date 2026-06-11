import { Link } from "react-router-dom";

function JobCard({
  id,
  title,
  company,
  location,
  saveJob
}) {

  return (

    <div className="job-card">

      <div className="job-badge">
        New
      </div>

      <h3>{title}</h3>

      <p>
        🏢 {company}
      </p>

      <p>
        📍 {location}
      </p>

      <div className="job-actions">

        <button
          className="save-btn"
          onClick={saveJob}
        >
          Save Job
        </button>

        <Link to={`/job/${id}`}>

          <button className="details-btn">
            Details
          </button>

        </Link>

      </div>

    </div>

  );

}

export default JobCard;