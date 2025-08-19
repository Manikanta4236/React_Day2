import React, { useState } from "react";
import "./RegistrationForm.css"; 

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    skills: [],
    country: "",
  });

  const [submittedData, setSubmittedData] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (e) => {
    setFormData((prev) => ({ ...prev, gender: e.target.value }));
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const skills = checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value);
      return { ...prev, skills };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label>Gender:</label>
        <div className="gender-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleGenderChange}
            />
            Female
          </label>
        </div>

        <label>Skills:</label>
        <div className="skills-group">
          <label>
            <input
              type="checkbox"
              value="React"
              checked={formData.skills.includes("React")}
              onChange={handleSkillChange}
            />
            React
          </label>
          <label>
            <input
              type="checkbox"
              value="Node.js"
              checked={formData.skills.includes("Node.js")}
              onChange={handleSkillChange}
            />
            Node.js
          </label>
          <label>
            <input
              type="checkbox"
              value="JavaScript"
              checked={formData.skills.includes("JavaScript")}
              onChange={handleSkillChange}
            />
            JavaScript
          </label>
        </div>

        <label>Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Country --</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>

        <button type="submit">Register</button>
      </form>

      {submittedData && (
        <div className="output">
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Skills:</strong> {submittedData.skills.join(", ")}</p>
          <p><strong>Country:</strong> {submittedData.country}</p>
        </div>
      )}
      </div>
  )
};

