import React, { useState, useEffect, useRef } from "react";
import "./Categories.css";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import ContentWriter from "./ContentWriter";
// import VideoEditor from "./VideoEditor";
// import GraphicDesigner from "./GraphicDesigner";

const Categories = () => {
  const [buttonClicked, setButtonClicked] = useState(0);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [choice, setChoice] = useState("");

  function handleSubmit() {
    console.log();
    //export this data from the API here
  }
  function handleProjectTitle(e) {
    setProjectTitle(e.target.value);
  }
  function handleProjectDescription(e) {
    setProjectDescription(e.target.value);
  }
  function handleChoice(e) {
    setChoice(e.target.value);
    console.log(choice);
  }

  return (
    <div>
      <div className="skills">
        <div>
          <h5 style={{ textAlign: "left", marginBottom: "1rem" }}>
            Add your skills
          </h5>
          <InputLabel shrink htmlFor="category" style={{ textAlign: "left" }}>
            Select Category
          </InputLabel>
          <NativeSelect
            fullWidth
            inputProps={{
              name: "age",
              id: "category",
            }}
            onChange={handleChoice}
          >
            <option value="" default>
              Select one
            </option>
            <option value="Writer">Writer</option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="Video Editor">Video Editor</option>
          </NativeSelect>
          <InputLabel
            shrink
            htmlFor="platform"
            style={{ textAlign: "left", marginTop: "3rem" }}
          >
            Select your platform
          </InputLabel>
          <NativeSelect
            fullWidth
            inputProps={{
              name: "age",
              id: "platform",
            }}
            onChange={handleChoice}
          >
            <option value="" default>
              Select one
            </option>
            <option value="Writer">Writer</option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="Video Editor">Video Editor</option>
          </NativeSelect>
        </div>
        {/* <br />
        {choice === "Writer" ? <ContentWriter /> : <br />}
        {choice === "Graphic Designer" ? <GraphicDesigner /> : <br />}
        {choice === "Video Editor" ? <VideoEditor /> : <br />} */}
      </div>
      <div
        id="skip-next"
        style={{ position: "relative", bottom: "1rem", padding: "0 5rem" }}
      >
        <button id="skip" className="skip-next-btn">
          Skip
        </button>
        <button id="next" className="skip-next-btn" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Categories;
