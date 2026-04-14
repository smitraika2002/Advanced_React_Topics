// This is a simple registration form component in React that uses the useState hook 
// to manage form state. The form includes fields for first name, last name, email, password, and role.
//  When the form is submitted, it logs the form data to the console.


import { useState } from "react";
import './index.css';

export default function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        {/* First Name */}
        <label>First name <span>*</span></label>
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First name"
          required
        />

        {/* Last Name */}
        <label>Last name</label>
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last name"
        />

        {/* Email */}
        <label>Email address <span>*</span></label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address"
          required
        />

        {/* Password */}
        <label>Password <span>*</span></label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />

        {/* Role */}
        <label>Role <span>*</span></label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          required
        >
          <option value="">Select role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="developer">Developer</option>
        </select>

        <button type="submit">CREATE ACCOUNT</button>
      </form>
    </div>
  );
}