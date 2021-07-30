import React from "react";
import Typical from "react-typical";
import "./Middle.css";
import image from "./Assets/Image Grid.png";
// import imgcat1 from "./CategoryImages/Cat1.png";
// import imgcat2 from "./CategoryImages/Cat2.png";
// import imgcat3 from "./CategoryImages/Cat3.png";
// import imgcat4 from "./CategoryImages/Cat4.png";
// import imgcat5 from "./CategoryImages/Cat5.png";
// import imgcat6 from "./CategoryImages/Cat6.png";
// import imgcat7 from "./CategoryImages/Cat7.png";
// import imgcat8 from "./CategoryImages/Cat8.png";

// const arr = [
//   imgcat1,
//   imgcat2,
//   imgcat3,
//   imgcat4,
//   imgcat5,
//   imgcat6,
//   imgcat7,
//   imgcat8,
// ];

export default function Users() {
  return (
    <div className="category">
      <Typical
        steps={[
          "Get Connected to",
          1000,
          "Get Connected to Musicians",
          1000,
          "Get Connected to Podcasters",
          1000,
          "Get Connected to Programmers",
          1000,
        ]}
        loop={Infinity}
        wrapper="h2"
      />
      <div className="middleAlign">
        <img src={image} className="ImageAlign" alt="logo"></img>
      </div>
      {/*  <div className="categories">
         {arr.map((img) => (
          <div className="imgdiv">
            <img src={img} className="catImg" id={arr.index} alt="logo"></img>
          </div>
        ))} 
      </div> */}
    </div>
  );
}
