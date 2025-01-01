import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
    
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Bringing Your Events To Life</h1>
          <p>
           We are here to make your events extraordinary,every moment counts!!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
