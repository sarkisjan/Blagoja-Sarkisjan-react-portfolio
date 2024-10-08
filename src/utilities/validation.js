// validation.js
export const validateContactForm = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  // Last Name validation
  if (!formData.lastName.trim()) {
    errors.lastName = "Last Name is required";
  }

  // Email validation
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }

  // Message validation
  if (!formData.msg.trim()) {
    errors.msg = "Message is required";
  }

  return errors; // Return the errors object
};
