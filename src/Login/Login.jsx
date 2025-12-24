import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Login.css";
import { loginUser, getFinancialYears } from "../Service/Erpsetting.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [year, setYear] = useState("");
  const [financialYears, setFinancialYears] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  /* =============================
     Fetch Financial Years
  ============================== */
  useEffect(() => {
    const fetchFinancialYears = async () => {
      try {
        const data = await getFinancialYears();
        setFinancialYears(data || []);
      } catch (error) {
        console.error("Error fetching financial years:", error);
        toast.error("Failed to load financial years");
      }
    };

    fetchFinancialYears();
  }, []);

  /* =============================
     Login Submit
  ============================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!year) {
      toast.warning("Please select financial year");
      return;
    }

    setIsLoading(true);

    try {
      const data = await loginUser(username, password, year);

      if (data?.message === "Login successful") {
        /* 🔑 SAVE AUTH DATA */
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        localStorage.setItem("username", data.username);
        localStorage.setItem("year", data.year);
        localStorage.setItem("Shortyear", data.Shortyear);

        /* 🔥 MOST IMPORTANT FIX — SAVE PERMISSIONS */
        localStorage.setItem(
          "permissions",
          JSON.stringify(data.permissions || {})
        );

        /* OPTIONAL: debug once */
        console.log("Saved permissions:", data.permissions);

        navigate("/dashboard");
      } else {
        toast.error(data?.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid username or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="home-login">
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="home-form">
              <form onSubmit={handleSubmit}>
                <h6>Produlink</h6>
                <p>
                  Enter your Username and <br /> Password to access the admin
                  panel.
                </p>

                <div className="form1">
                  {/* Financial Year */}
                  <div className="mb-3">
                    <label className="form-label">Year</label>
                    <select
                      className="form-control"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      required
                    >
                      <option value="">Select Year</option>
                      {financialYears.map((fy) => (
                        <option key={fy.id} value={fy.ShortName}>
                          {fy.ShortName}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Username */}
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="homebtn w-100"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </form>

              <div className="outer text-center mt-3">
                <p>Powered by Clumpcoder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
