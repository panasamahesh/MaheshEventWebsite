import React from "react";
import "./Home.css";
import "@fontsource/great-vibes";
import Watsapp from "./Watsapp";

const Home = () => {
  return (
    <div className="head">

      <div className="matter">
        <div className="content">
          <aside className="weplan">We Plan Your Dream Event</aside>
          <aside className="making">
            Making Your memories unforgettable
          </aside>

          <aside className="makingbutton">
            <button>Book Now</button>
            <button><Watsapp /></button>
          </aside>
        </div>
      </div>

      <div className="hearts">
        <span>❤️</span>
        <span>💖</span>
        <span>💕</span>
        <span>❤️</span>
        <span>💘</span>
        <span>😍</span>
        <span>💫</span>
        <span>💓</span>
        <span>💫</span>
        <span>💘</span>
      </div>

    </div>
  );
};

export default Home;