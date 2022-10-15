import React from "react";
import "./Contact.css";
// import line from "../../assets/Line1.svg";

function Contact() {
  const contact = [
    { name: "LOREM IPSUM", no: "93949448635" },
    { name: "LOREM IPSUM", no: "58463743902" },
  ];
  return (
    <div className="contact" id='contact'>
      <div className="line">
        {/* <img src={line} className="line1" alt="" /> */}
        <div className="contact_text">
          <h3>CONTACT</h3>
        </div>
        {/* <img src={line} className="line2" alt="" /> */}
      </div>
      <div className="contactNumber">
        {contact.map((x) => (
          <div className="contact_box" key={x.no}>
            <h5> {x.name}</h5>
            <h5> {x.no}</h5>
          </div>
        ))}
      </div>
      <div className="locationMap">
        <div className="location">
          <div className="location_text">
            <h3>LOCATION</h3>
          </div>
          <div className="location_details">
            <h5>MODEL ENGINEERING COLLEGE</h5>
            <h5>THRIKKAKARA</h5>
            <h5>ERNAKULAM</h5>
          </div>
      </div>
      <div className="location_map">

      </div>
      </div>
    </div>
  );
}

export default Contact;
