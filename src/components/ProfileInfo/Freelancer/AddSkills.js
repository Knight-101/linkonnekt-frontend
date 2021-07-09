import React, { useState, useEffect, useRef } from "react";
import "./AddSkills.css";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ContentWriter from './ContentWriter';
import VideoEditor from './VideoEditor';
import GraphicDesigner from './GraphicDesigner';

const AddSkills = () => {
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
          <InputLabel
            shrink
            htmlFor="age-native-label-placeholder"
            style={{ textAlign: "left" }}
          >
            Select Category
          </InputLabel>
          <NativeSelect
            fullWidth
            inputProps={{
              name: "age",
              id: "age-native-label-placeholder",
            }}
            onChange={handleChoice}
          >
            <option value="" disabled default>
              Select one
            </option>
            <option value="Writer">Writer</option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="Video Editor">Video Editor</option>
          </NativeSelect>
        </div>
        <br/>
        {choice==="Writer" ? <ContentWriter /> : <br/>}
        {choice==="Graphic Designer" ? <GraphicDesigner /> : <br/>}
        {choice==="Video Editor" ? <VideoEditor /> : <br/>}

        <div id="portfolio">
          <h4 style={{ marginBottom: "1rem" }}>Portfolio</h4>
          <input
            id="portName"
            placeholder="Name of Project"
            value={projectTitle}
            onChange={handleProjectTitle}
          ></input>
        </div>
        <textarea
          id="portDes"
          placeholder="Describe your project in brief"
          value={projectDescription}
          onChange={handleProjectDescription}
        ></textarea>
        <div id="portImgs">
          <CloudUploadIcon /> Upload Images
        </div>
      </div>
      <div id="skip-next" style={{ marginTop: "0", padding: "0 5rem" }}>
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

export default AddSkills;
