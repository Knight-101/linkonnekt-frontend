import React, { useState, useEffect, useRef } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./Footer.css";

const Footer = () => {
  const [phoneInput, setPhoneInput] = useState('');
  function handleInputChange(event) {
    setPhoneInput(event.target.value);
  }

  function handleSubmit(event) {
    alert('A number was submitted: ' + phoneInput);
    event.preventDefault();
  }
  return (
    <div>
      <div className="fwaves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#457B9D"
            fill-opacity="1"
            d="M0,128L21.8,138.7C43.6,149,87,171,131,154.7C174.5,139,218,85,262,90.7C305.5,96,349,160,393,197.3C436.4,235,480,245,524,224C567.3,203,611,149,655,149.3C698.2,149,742,203,785,208C829.1,213,873,171,916,144C960,117,1004,107,1047,117.3C1090.9,128,1135,160,1178,170.7C1221.8,181,1265,171,1309,144C1352.7,117,1396,75,1418,53.3L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="foot">
        <div className="foot-grid">
          <div className="foot-left">
            <h2>Linkonnekt</h2>
          </div>
          <div></div>
          <div>
            <h4> Support</h4>
          </div>
          <div>
            <h4> Community</h4>
          </div>
          <div>
            <h4> Contact Us </h4>
          </div>
          <div className="foot-left">
            <p id="subscribe">Request a Callback</p>
            <form onSubmit={handleSubmit}>
            <input id="mail" placeholder="+91 12345 67890" value={phoneInput} onChange={handleInputChange} >
            </input>
            <input type="submit" value="Submit" />
            </form>
            <p>
              Linkonnekt is a network of Content Creators and makes discovery
              and Collaboration easier.
            </p>
          </div>
          <div></div>
          <div>
            <ul>
              <li>About Us</li>
              <li>Support</li>
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Blog</li>
              <li>Partnership</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Contact info</li>
            </ul>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/sanskar-mohapatra-51215815a/"
                className="socials-link"
              >
                <LinkedInIcon fontSize="large" />
              </a>
              <a
                href="https://twitter.com/SanskarMohapat1"
                className="socials-link"
              >
                <TwitterIcon fontSize="large" />
              </a>
              <a href="" className="socials-link">
                <FacebookIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>ⓒ 2021 Linkonnekt. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
