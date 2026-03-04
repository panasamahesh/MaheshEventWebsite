import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./WhatsappFloat.css";

const WhatsappFloat = () => {

  const location = useLocation();
  const [open, setOpen] = useState(false);

  const phoneNumber = "917995257595";
  const message = "Hi, I am interested in booking an event.";

  /* Hide on specific pages */
  const hidePages = ["/", "/contact"];
  if (hidePages.includes(location.pathname)) {
    return null;
  }

  const handleWhatsapp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  return (
    <div className="whatsapp-container">

      {/* Options Popup */}
      {open && (
        <div className="whatsapp-options">

          <div className="option" onClick={handleWhatsapp}>
            <FaWhatsapp />
            <span>Message</span>
          </div>

          <div className="option" onClick={handleCall}>
            <FaPhoneAlt />
            <span>Call</span>
          </div>

        </div>
      )}

      {/* Main Floating Button */}
      <div 
        className="whatsapp-float" 
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaWhatsapp />}
      </div>

    </div>
  );
};

export default WhatsappFloat;