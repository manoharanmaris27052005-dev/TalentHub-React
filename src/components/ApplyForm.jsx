import { useState } from "react";
import axios from "axios";

function ApplyForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState("");

  const submitApplication = () => {

    axios.post(
      "http://localhost:3000/applications",
      {
        name,
        email,
        phone,
        resume
      }
    )
    .then(() => {

      alert(
        "Application Submitted Successfully"
      );

      setName("");
      setEmail("");
      setPhone("");
      setResume("");

    })
    .catch((error) => {

      console.log(error);

    });

  };

  return (
    <div className="apply-form">

      <h2>Apply For Job</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Enter Phone"
        value={phone}
        onChange={(e) =>
          setPhone(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Resume Link"
        value={resume}
        onChange={(e) =>
          setResume(e.target.value)
        }
      />

      <button
        onClick={submitApplication}
      >
        Submit Application
      </button>

    </div>
  );
}

export default ApplyForm;