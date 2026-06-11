import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import JobDetails from "./pages/JobDetails";
import RemoteJobs from "./pages/RemoteJobs";

function App() {

  const isLoggedIn =
    sessionStorage.getItem("isLoggedIn");

  return (

    <BrowserRouter>

      {isLoggedIn && <Navbar />}

      <Routes>

        {/* Public Routes */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Protected Routes */}

        <Route
          path="/"
          element={
            isLoggedIn
              ? <Home />
              : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/remote-jobs"
          element={
            isLoggedIn
              ? <RemoteJobs />
              : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/job/:id"
          element={
            isLoggedIn
              ? <JobDetails />
              : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/admin"
          element={
            isLoggedIn
              ? <Admin />
              : <Navigate to="/login" replace />
          }
        />

        {/* Invalid Route */}

        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;