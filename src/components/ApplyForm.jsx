import { useState } from "react";

function ApplyForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState("");

  const submitApplication = () => {

    if (
      !name ||
      !email ||
      !phone ||
      !resume
    ) {

      alert(
        "Please fill all fields"
      );

      return;

    }

    const applications =
      JSON.parse(
        localStorage.getItem(
          "applications"
        )
      ) || [];

    applications.push({
      id: Date.now(),
      name,
      email,
      phone,
      resume
    });

    localStorage.setItem(
      "applications",
      JSON.stringify(
        applications
      )
    );

    alert(
      "Application Submitted Successfully 🎉"
    );

    setName("");
    setEmail("");
    setPhone("");
    setResume("");

  };

  return (

    <div className="apply-form">

      <h2>
        Apply For Job
      </h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
      />

      <input
        type="text"
        placeholder="Enter Phone"
        value={phone}
        onChange={(e) =>
          setPhone(
            e.target.value
          )
        }
      />

      <input
        type="text"
        placeholder="Resume Link"
        value={resume}
        onChange={(e) =>
          setResume(
            e.target.value
          )
        }
      />

      <button
        onClick={
          submitApplication
        }
      >
        Submit Application
      </button>

    </div>

  );

}

export default ApplyForm;