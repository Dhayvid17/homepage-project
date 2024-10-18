import React from "react";
import DarkImg from "./images/image-about-dark.jpg";
import LightImg from "./images/image-about-light.jpg";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="dark-box">
        <img src={DarkImg} alt="Dark Theme" />
      </div>

      <div className="furniture-box">
        <div>
          <h3>About our furniture</h3>

          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </div>

      <div className="light-box">
        <img src={LightImg} alt="Light Theme" />
      </div>
    </div>
  );
};

export default Footer;
