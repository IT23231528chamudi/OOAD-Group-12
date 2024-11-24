import React, { useState } from "react";

const Login = () => {
// State to handle form submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <section className="register-section">
      <div className="register-container">
        <h2>LOGIN</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="register-button">
            Register
          </button>

          {isSubmitted && <p className="success-message">Login successful!</p>}

          <p>
            Don't have an account? <a href="#">Sign Up here</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
