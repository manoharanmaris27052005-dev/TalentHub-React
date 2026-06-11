import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {

    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {

      alert("Please fill all fields");
      return;

    }

    if (password.length < 6) {

      alert(
        "Password must be at least 6 characters"
      );

      return;

    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        email,
        password
      })
    );

    alert(
      "Registration Successful"
    );

    navigate("/login");

  };

  return (

    <div className="register-page">

      <div className="register-card">

        <div className="register-header">

          <h1>TalentHub</h1>

          <p>
            Create your account 🚀
          </p>

        </div>

        <form
          onSubmit={handleRegister}
          className="register-form"
        >

          <div className="input-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
            />

          </div>

          <div className="input-group">

            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

          </div>

          <div className="input-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

          </div>

          <button
            type="submit"
            className="register-btn"
          >
            Create Account →
          </button>

        </form>

        <div className="login-link">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </div>

  );

}

export default Register;