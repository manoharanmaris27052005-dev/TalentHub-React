import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ApplyForm from "../components/ApplyForm";

function JobDetails() {

  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {

    axios
      .get(
        `http://localhost:3000/jobs/${id}`
      )
      .then((response) => {

        setJob(response.data);

      });

  }, [id]);

  if (!job) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details-container">

      <h1>{job.title}</h1>

      <p>
        <strong>Company:</strong>
        {job.company}
      </p>

      <p>
        <strong>Location:</strong>
        {job.location}
      </p>

      <p>
        <strong>Salary:</strong>
        {job.salary}
      </p>

      <p>
        <strong>Experience:</strong>
        {job.experience}
      </p>

      <ApplyForm />

    </div>
  );
}

export default JobDetails;