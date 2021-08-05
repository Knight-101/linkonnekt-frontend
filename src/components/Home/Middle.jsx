import React from "react";
import imgsrc3 from "./Assets/amico.png";
import imgsrc2 from "./Assets/bro.png";
import imgsrc1 from "./Assets/cuate.png";
import "./Middle.css";
import Faq from "./Faq";
import Users from "./Users";
const Middle = () => {
  return (
    <div>
      <div className="mid">
        <div className="about">
          <div className="working">
            <h3>How it works</h3>
            <hr></hr>
            <div>
              <p>Hola Amigos ! Thanks for dropping by our site 😀</p>
              <p>
                Well now you are here , we would like to ask you if you are
                looking forward to create an impact and take your content
                creation journey to the moon 🚀?
              </p>
              <p>Why ?</p>
              <p>
                Because , it requires COLLABORATION and we can surely help you
                with that.
              </p>
              <p>- Collaborate with people having similar interests. </p>
              <p>-Bring your creation to a wider audience.</p>
              <p>- Invite folks for your next livestream or podcast.</p>
              <p>
                What are you waiting for? Just log in and there you goooo 🏃🏻‍♀️.
              </p>
            </div>
          </div>
          <div className="aboutimg boxstyle">
            <img src={imgsrc1} className="about1img" alt="logo"></img>
            <h3> Discover Interesting People </h3>
          </div>
          <div
            className="aboutimg aboutParent"
            style={{ width: "300px", height: "900px" }}
          >
            <div className="aboutChild boxstyle">
              <img src={imgsrc3} className="about3img" alt="logo"></img>
              <h3> Collaborate </h3>
            </div>
            <div className="aboutChild boxstyle">
              <img src={imgsrc2} className="about2img" alt="logo"></img>
              <h3> Increase Your Reach </h3>
            </div>
          </div>
        </div>
        <Users></Users>
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Middle;
