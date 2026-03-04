import React from 'react'
import { useState } from 'react';
import "./Contact.css"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    eventType: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "917995257595"; 
   

    const text = `Hello, I am ${formData.name}.
Event Type: ${formData.eventType}
Event Date: ${formData.date}
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className='parent'>
    <div className="booking-container">
      <h2 className='bookyourevent'>Book Your Event</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          required
          onChange={handleChange}
        />

        <select
          name="eventType"
          required
          onChange={handleChange}
        >
          <option value="">Select Event Type</option>
          <option value="Wedding">Wedding</option>
          <option value="Birthday">Birthday</option>
          <option value="Engagement">Engagement</option>
          <option value="Reception">Reception</option>
          <option value="Huldi">Huldi</option>
          <option value="Party">Party</option>
          <option value="Corporate Event">Corporate Event</option>
        </select>

        <textarea
          name="message"
          placeholder="Enter your requirements..."
          rows="4"
          required
          onChange={handleChange}
        />

        <button type="submit">Send to WhatsApp</button>
      </form>
    </div>
    </div>
  );
};
export default Contact