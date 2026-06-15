import { useState } from "react";
import React from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill all fields before sending.");
      return;
    }

    const mailSubject = encodeURIComponent(formData.subject);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:sayyedzeeshan696@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  }

  return (
    <main className="contact-page page-shell">
      <section className="contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Let’s build something meaningful.</h1>
        <p>
          Have a project idea, collaboration, internship opportunity, or
          feedback? Send me a message directly from here.
        </p>
      </section>

      <section className="contact-grid">
        <div className="contact-card contact-info-card">
          <h2>Reach Me</h2>

          <a href="mailto:sayyedzeeshan696@gmail.com">
            sayyedzeeshan696@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/sayyed-zeeshan-mp8086"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>

          <a href="https://github.com/FueryS" target="_blank" rel="noreferrer">
            GitHub Profile
          </a>
        </div>

        <form className="contact-card contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>

          {error && <p className="form-error">{error}</p>}

          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows="7"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="button ghost">
            Open Mail App
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
