import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material"; // Integrated MUI for consistency
import { useObserver } from "../hooks/useObserver";
import { validateContactForm } from "../utilities/validation";

const Contact = () => {
  // Hook for triggering scroll reveal animation
  const [ref, reveal] = useObserver();

  // State to track form input values
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    msg: "",
  });

  // State to hold validation error messages
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields using custom utility
    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form data valid, redirecting to formsubmit.co", formData);
      // Programmatically trigger native HTML submit to dispatch data to formsubmit.co endpoint
      e.target.submit();
    }
  };

  // Handle real-time input change updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Dynamic error clearing: remove error notice once user starts correcting the field input
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      ref={ref}
      className={`appear-section ${reveal ? "active" : ""}`}
      sx={{ width: "100%", py: 8 }}
    >
      <h1 className="section-title">Contact me</h1>
      <Typography
        variant="h6"
        sx={{
          color: "rgba(255,255,255,0.7)",
          textAlign: "start",
          mb: 5,
          fontWeight: 400,
        }}
      >
        Feel free to reach out, and I’ll get back to you as soon as I can
      </Typography>
      <Box
        className="form-panel"
        id="contact_me"
        sx={{ maxWidth: "800px", margin: "0 auto", px: 2 }}
      >
        {/* Traditional submission pipeline connected securely to FormSubmit API handler */}
        <form
          id="form"
          action="https://formsubmit.co/baze_sarkisjan@yahoo.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          {/* FormSubmit Configuration settings hidden inputs */}
          <input
            type="hidden"
            name="_subject"
            value="New Contact from Portfolio!"
          />
          <input type="hidden" name="_captcha" value="false" />{" "}
          {/* Disables annoying captcha redirect templates */}
          <Grid container spacing={3}>
            {/* First Name Input Field */}
            <Grid item xs={12} sm={6}>
              <div className="inputBox">
                <input
                  className="input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" " /* Keeping a space here helps CSS :placeholder-shown focus states */
                  value={formData.name}
                  onChange={handleChange}
                />
                {/* Bug Fix: Label stays floated up if input has value OR is active */}
                <label
                  className={`floatLabel ${formData.name ? "focused" : ""}`}
                  htmlFor="name"
                >
                  Name
                </label>
                {errors.name && (
                  <span className="error-message-text">{errors.name}</span>
                )}
              </div>
            </Grid>

            {/* Last Name Input Field */}
            <Grid item xs={12} sm={6}>
              <div className="inputBox">
                <input
                  className="input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder=" "
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <label
                  className={`floatLabel ${formData.lastName ? "focused" : ""}`}
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                {errors.lastName && (
                  <span className="error-message-text">{errors.lastName}</span>
                )}
              </div>
            </Grid>

            {/* Email Address Input Field */}
            <Grid item xs={12}>
              <div className="inputBox">
                <input
                  className="input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                />
                <label
                  className={`floatLabel ${formData.email ? "focused" : ""}`}
                  htmlFor="email"
                >
                  Email Address
                </label>
                {errors.email && (
                  <span className="error-message-text">{errors.email}</span>
                )}
              </div>
            </Grid>

            {/* Main Message Text Area Input Box */}
            <Grid item xs={12}>
              <div className="inputBox">
                <textarea
                  className="input"
                  name="msg"
                  id="msg"
                  rows="6"
                  placeholder=" "
                  value={formData.msg}
                  onChange={handleChange}
                ></textarea>
                <label
                  className={`floatLabel ${formData.msg ? "focused" : ""}`}
                  htmlFor="msg"
                >
                  Type Your Message Here
                </label>
                {errors.msg && (
                  <span className="error-message-text">{errors.msg}</span>
                )}
              </div>
            </Grid>

            {/* Form Submit Action Control Button */}
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center", mt: 2 }}
            >
              <button className="btn glow-on-hover" type="submit">
                Send Message
              </button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
