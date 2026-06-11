import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {

  const navigate =
    useNavigate();

  const [jobs, setJobs] =
    useState([]);

  const [title, setTitle] =
    useState("");

  const [company, setCompany] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [salary, setSalary] =
    useState("");

  const [experience,
    setExperience] =
    useState("");

  const [editId,
    setEditId] =
    useState(null);

 useEffect(() => {

  const isLoggedIn =
    sessionStorage.getItem(
      "isLoggedIn"
    );

  const userEmail =
    sessionStorage.getItem(
      "userEmail"
    );

  if (!isLoggedIn) {

    navigate("/login");

    return;

  }

  if (
    userEmail !==
    "Maris123@gmail.com"
  ) {

    alert(
      "Only Admin Can Access"
    );

    navigate("/");

    return;

  }

  fetchJobs();

}, []);

  const fetchJobs =
    async () => {

      try {

        const response =
          await axios.get(
            "http://localhost:3000/jobs"
          );

        setJobs(
          response.data
        );

      } catch (error) {

        console.log(error);

      }

    };

  const addJob =
    async () => {

      if (
        !title ||
        !company ||
        !location
      ) {

        alert(
          "Fill all fields"
        );

        return;

      }

      try {

        await axios.post(
          "http://localhost:3000/jobs",
          {
            title,
            company,
            location,
            salary,
            experience
          }
        );

        clearForm();

        fetchJobs();

      } catch (error) {

        console.log(error);

      }

    };

  const editJob =
    (job) => {

      setEditId(job.id);

      setTitle(job.title);

      setCompany(job.company);

      setLocation(job.location);

      setSalary(
        job.salary
      );

      setExperience(
        job.experience
      );

    };

  const updateJob =
    async () => {

      try {

        await axios.put(

          `http://localhost:3000/jobs/${editId}`,

          {
            id: editId,
            title,
            company,
            location,
            salary,
            experience
          }

        );

        clearForm();

        setEditId(null);

        fetchJobs();

      } catch (error) {

        console.log(error);

      }

    };

  const deleteJob =
    async (id) => {

      try {

        await axios.delete(
          `http://localhost:3000/jobs/${id}`
        );

        fetchJobs();

      } catch (error) {

        console.log(error);

      }

    };

  const clearForm =
    () => {

      setTitle("");

      setCompany("");

      setLocation("");

      setSalary("");

      setExperience("");

    };

  return (

    <div className="admin-page">

      <div className="admin-header">

        <h1>
          Admin Dashboard
        </h1>

        <p>
          Manage Jobs Efficiently 🚀
        </p>

      </div>

      <div className="admin-stats">

        <div className="admin-stat-card">

          <h2>
            {jobs.length}
          </h2>

          <p>
            Total Jobs
          </p>

        </div>

      </div>

      <div className="admin-form">

        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) =>
            setCompany(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) =>
            setLocation(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) =>
            setSalary(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="Experience"
          value={experience}
          onChange={(e) =>
            setExperience(
              e.target.value
            )
          }
        />

        {
          editId ? (

            <button
              className="update-btn"
              onClick={
                updateJob
              }
            >
              Update Job
            </button>

          ) : (

            <button
              className="add-btn"
              onClick={
                addJob
              }
            >
              Add Job
            </button>

          )
        }

      </div>

      <h2 className="admin-title">
        Manage Jobs
      </h2>

      <div className="jobs-container">

        {
          jobs.map((job) => (

            <div
              key={job.id}
              className="job-card"
            >

              <h3>
                {job.title}
              </h3>

              <p>
                🏢 {job.company}
              </p>

              <p>
                📍 {job.location}
              </p>

              <p>
                💰 {job.salary}
              </p>

              <p>
                👨‍💻 {job.experience}
              </p>

              <div className="job-actions">

                <button
                  className="edit-btn"
                  onClick={() =>
                    editJob(job)
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteJob(
                      job.id
                    )
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default Admin;