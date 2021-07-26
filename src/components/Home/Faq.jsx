import React from "react";
import imgsrc1 from "./CategoryImages/Cat1.png";
import "./Faq.css";
import StarIcon from "@material-ui/icons/Star";

export default function Faq() {
  return (
    <div className="parentContainer">
      <div className="imageParent">
        
        <img src={imgsrc1} className="about1img" alt="logo"></img>
      </div>
      <div className="Text">
        <h2>Their app helped me a lot </h2>
        <StarIcon style={{ color: "gold" }}/>
        <StarIcon style={{ color: "gold" }}/>
        <StarIcon style={{ color: "gold" }}/>
        <StarIcon style={{ color: "gold" }}/>
        <StarIcon style={{ color: "gold" }}/>

        <p>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetur adipisLorem ipsum dolor sit amet, consectetur adipis
        </p>
      </div>
    </div>
  );
}
