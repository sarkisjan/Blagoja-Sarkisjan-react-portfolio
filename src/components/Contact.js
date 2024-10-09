import React, { useState } from "react";
import { useObserver } from "../hooks/useObserver";
import { validateContactForm } from "../utilities/validation"; // Import validation logic

const Contact = () => {
  const [ref, reveal] = useObserver(); // This is for the appearing effect

  // State to hold form input values
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
    e.preventDefault(); // Prevent default form submission

    // Validate the form using the imported validation logic
    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
    } else {
      // Clear errors if validation passes
      setErrors({});
      // Here you would send the form data to the server or service
      console.log("Form submitted", formData);
      // Optional: You can use the form action attribute for an actual form submit
      e.target.submit();
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`appear-section ${reveal ? "active" : ""}`}
    >
      <div className="form-panel" id="contact_me">
        <h1 className="formTitle section-title">Contact me</h1>
        <h3>
          Feel free to reach out, and I’ll get back to you as soon as I can
        </h3>
        <form
          id="form"
          action="https://formsubmit.co/baze_sarkisjan@yahoo.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="formFields">
            <div className="formSender">
              <div className="inputBox">
                <input
                  className="input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder=""
                  value={formData.name}
                  onChange={handleChange}
                />
                <label id="nameLabel" className="floatLabel" htmlFor="name">
                  Name <span className="nameError"></span>
                </label>
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div className="inputBox">
                <input
                  className="input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder=""
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <label
                  id="lastNameLabel"
                  className="floatLabel"
                  htmlFor="lastName"
                >
                  Last Name <span className="lastNameError"></span>
                </label>
                {errors.lastName && (
                  <span className="error">{errors.lastName}</span>
                )}
              </div>

              <div className="inputBox">
                <input
                  className="input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder=""
                  value={formData.email}
                  onChange={handleChange}
                />
                <label id="emailLabel" className="floatLabel" htmlFor="email">
                  Email <span className="emailError"></span>
                </label>
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <input type="hidden" name="_subject" value="New Contact" />
            </div>

            <div className="formMsg">
              <div className="inputBox">
                <textarea
                  className="input"
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="10"
                  placeholder=""
                  value={formData.msg}
                  onChange={handleChange}
                ></textarea>
                <label id="msgLabel" className="floatLabel" htmlFor="msg">
                  Type Your Message Here <span className="msgError"></span>
                </label>
                {errors.msg && <span className="error">{errors.msg}</span>}
              </div>
            </div>
          </div>

          <div className="send">
            <button className="btn" type="submit">
              <h2>Send</h2>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
