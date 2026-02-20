import React from "react";
import Conatiner from "./conatiner/Conatiner";
import Card from "./card/Frame";
import BottomContainer from "./content/Container";
import BottomFrame from "./content/Frame";


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img src="/card 1.png" alt="" />
      <div className="footer-bg"></div>

      {/* Main Content */}
      <div className="footer-inner">
        <Conatiner>
          {/* Logo + About */}
          <Card>
            <img src="/Dinaaz-Hair-Skin-logo-vertical.png.png" alt="logo" className="footer-logo" />

            <p>
              Whether you're looking for hair restoration or rejuvenating skin
              treatments, we are dedicated to helping you achieve a youthful and
              confident look.
            </p>
          </Card>

          {/* Quick Links */}
          <Card title="Quick Links">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Skin Treatments</li>
              <li>Results</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </Card>

          {/* Useful Links */}
          <Card title="Useful Links">
            <ul>
              <li>Hair Fixing</li>
              <li>Hair Transplant</li>
              <li>Hair PRP Plus</li>
              <li>Dinaaz Regrow</li>
              <li>Dinaaz ST Plus</li>
              <li>Dinaaz Cover</li>
              <li>Stem Cell Hair Therapy</li>
            </ul>
          </Card>

          {/* Contact */}
          <Card title="Contact">
            <p>7338422548, 9535399710</p>
            <p>Bangalore, India</p>
            <p>dinaazhair@gmail.com</p>
          </Card>
        </Conatiner>

        <BottomContainer>
          <BottomFrame />
        </BottomContainer>
      </div>
    </footer>
  );
};

export default Footer;