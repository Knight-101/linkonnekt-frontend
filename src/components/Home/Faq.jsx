import React from "react";
import imgsrc1 from "./CategoryImages/Kashish-NoBg.png";
import "./Faq.css";
import StarIcon from "@material-ui/icons/Star";
import { Typography } from "@material-ui/core";

export default function Faq() {
  return (
    <div className="parentContainer">
      <div className="imageParent">
        <img src={imgsrc1} className="reviewImg" alt="logo"></img>
      </div>
      <div className="Text">
        <h2 className="Heading">Their app helped me a lot </h2>
        <div className="Stars">
          <StarIcon style={{ color: "gold" }} />
          <StarIcon style={{ color: "gold" }} />
          <StarIcon style={{ color: "gold" }} />
          <StarIcon style={{ color: "gold" }} />
          <StarIcon style={{ color: "gold" }} />
        </div>
        <p>
          The app helped me connect to a lot of interesting individuals and have
          insightful talks with them. The team is building something really
          amazing.
        </p>
        <Typography variant="h5" className="Name" component="h4">
          Kashish Kapoor
        </Typography>
        <Typography
          variant="h6"
          className="Name"
          component="h4"
          color="textSecondary"
        >
          10-minute finance
        </Typography>
      </div>
    </div>
  );
}
