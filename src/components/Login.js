import React, { useState, useEffect } from "react";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrors("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/student/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();
      setLoading(false);

      if (result.status === "success") {
        // ✅ SAVE USER DATA
        localStorage.setItem("user_id", result.user_id);
        localStorage.setItem("student_name", result.name);
        localStorage.setItem("student_email", result.email);

        console.log("Login saved user_id:", result.user_id);

        setShowModal(true);
      } else {
        setErrors(result.message);
      }
    } catch (err) {
      setLoading(false);
      setErrors("Server Error. Try again later.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h2>NIM Academy</h2>
          <p>Student Login</p>
        </div>

        {errors && <div className="login-error">{errors}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email / Username</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email or username"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <button className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Login Successful 🎉</h3>
            <p>Welcome to NIM Academy Student Portal</p>

            <button
              className="modal-btn"
              onClick={() => navigate("/student-dashboard")}
            >
              Go to Dashboard →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
