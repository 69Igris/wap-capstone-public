import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-contain">
      <div className="contact-left">
        <h2>Transforming Ideas into <br /> <strong>Reality</strong></h2>
        <p>Your one-stop solution for all digital needs.</p>
      </div>

      <div className="contact-right">
        <h3>Get in Touch</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
