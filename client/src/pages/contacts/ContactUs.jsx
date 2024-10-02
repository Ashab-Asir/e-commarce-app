import React from "react";
import "./ContactUs.css"; // Import the CSS file
import Heading from "../../components/Heading/Heading";

const ContactUs = () => {
  return (
    <>
      <Heading></Heading>
      <div className="contact-container">
        <h2 className="contact-heading">Contact Us</h2>
        <div className="contact-content">
          {/* Contact Info Section */}
          <div className="contact-info">
            <h3>Location</h3>
            <p>
              123 Main St,
              <br />
              New York, NY 10001
            </p>

            <h3>Phone</h3>
            <p>+1 (123) 456-7890</p>

            <h3>Email</h3>
            <p>info@example.com</p>
          </div>

          {/* Map Section with iframe */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.987690486588!2d-73.9871514845936!3d40.74881797932783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18d8f785%3A0x7c5c956bc5f988bf!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1606176552786!5m2!1sen!2sus"
              width="600"
              height="300"
              allowFullScreen=""
              loading="lazy"
              title="Map"
              className="map-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
