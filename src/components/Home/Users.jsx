import React, { useState, useEffect } from "react";

import imgcat1 from "./CategoryImages/Cat1.png";
import imgcat2 from "./CategoryImages/Cat2.png";
import imgcat3 from "./CategoryImages/Cat3.png";
import imgcat4 from "./CategoryImages/Cat4.png";
import imgcat5 from "./CategoryImages/Cat5.png";
import imgcat6 from "./CategoryImages/Cat6.png";
import imgcat7 from "./CategoryImages/Cat7.png";
import imgcat8 from "./CategoryImages/Cat8.png";

const arr = [
  imgcat1,
  imgcat2,
  imgcat3,
  imgcat4,
  imgcat5,
  imgcat6,
  imgcat7,
  imgcat8,
];

export default function Users() {
  // const [category, setCategory] = useState("Music");
  // const array = ['dance', 'lifestyle', 'healthcare', 'education'];
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('This will run after 1 second!')
  //   }, 1000);
  //   setCategory(array.shift());
  //   return () => clearTimeout(timer);
  // }, []);

  // setCategory()
  return (
    <div className="category">
      <h2>
        Get Connected with Talented People in
        <span className="categoryDesigned"> 
        {/* {category} */}
         </span>
      </h2>

      <div className="categories">
        {arr.map((img) => (
          <div className="imgdiv">
            <img src={img} className="catImg" id={arr.index} alt="logo"></img>
          </div>
        ))}
      </div>
    </div>
  );
}
