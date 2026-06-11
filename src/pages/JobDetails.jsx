import { useParams } from "react-router-dom";
import jobsData from "../data/jobs";
import ApplyForm from "../components/ApplyForm";

function JobDetails() {

  const { id } = useParams();

  const job = jobsData.find(
    (item) =>
      String(item.id) === String(id)
  );

  if (!job) {

    return (

      <div className="details-container">

        <h2>
          Job Not Found
        </h2>

      </div>

    );

  }

  return (

    <div className="details-container">

      <h1>
        {job.title}
      </h1>

      <p>
        <strong>
          Company:
        </strong>
        {" "}
        {job.company}
      </p>

      <p>
        <strong>
          Location:
        </strong>
        {" "}
        {job.location}
      </p>

      <p>
        <strong>
          Salary:
        </strong>
        {" "}
        {job.salary}
      </p>

      <p>
        <strong>
          Experience:
        </strong>
        {" "}
        {job.experience}
      </p>

      <ApplyForm />

    </div>

  );

}

export default JobDetails;