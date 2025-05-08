// ContactUs.jsx
import React from "react";
import "./Contactus.css";

const Contactus = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>📍 123 Sneaker Street<br />
             Fashion District, New York<br />
             NY 10001, USA</p>
          <p>📞 +1 (555) 123-4567<br />
             Mon-Fri: 9am - 6pm<br />
             Sat: 10am - 4pm</p>
          <p>📧 info@kicksvault.com<br />
             support@kicksvault.com</p>
          <p>💬 Follow us on social media</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-instagram" />
            <i className="fab fa-twitter" />
            <i className="fab fa-youtube" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h3>Visit Our Store</h3>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.3472655842243!2d77.0852094232477!3d28.982911690498817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db15c164f0a91%3A0xcab7be79bc1b3bac!2sNewton%20School%20of%20Technology%2C%20Delhi%20NCR!5e1!3m2!1sen!2sin!4v1746681557937!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
