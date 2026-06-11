import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      email.trim() === "" ||
      password.trim() === ""
    ) {

      alert("Please fill all fields");

      return;

    }
    if (
  email === "Maris123@gmail.com" &&
  password === "Maris@123"
) {

  sessionStorage.setItem(
    "isLoggedIn",
    "true"
  );

  sessionStorage.setItem(
    "userEmail",
    email
  );

  alert(
    "Admin Login Successful"
  );

  window.location.href =
    "/admin";

  return;

}

    const storedUser =
      JSON.parse(
        localStorage.getItem("user")
      );

    if (!storedUser) {

      alert(
        "Please Register First"
      );

      return;

    }

    if (
      email === storedUser.email &&
      password === storedUser.password
    ) {

      sessionStorage.setItem(
        "isLoggedIn",
        "true"
      );

      sessionStorage.setItem(
        "userEmail",
        email
      );

      alert(
        "Login Successful"
      );

      window.location.href = "/";

    } else {

      alert(
        "Invalid Email or Password"
      );

    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <div className="login-header">

          <h1>TalentHub</h1>

          <p>
            Welcome back! Login to continue
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="login-form"
        >

          <div className="input-group">

            <label>Email</label>

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

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
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
            className="login-btn"
          >
            Login →
          </button>

        </form>

        <div className="register-link">

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </div>

      </div>

    </div>

  );

}

export default Login;