import React, { useState, useEffect, useRef } from "react";
import "./AddSkills.css";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const tagBox = (props) => {
  return <div id="tag-box">{props.tagName}</div>;
};

const AddSkills = () => {
  const [buttonClicked, setButtonClicked] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [tags, setTags] = useState([]);
  function handleSubmit() {
    console.log(firstName, lastName, buttonClicked, Address);
    //export this data from the API here
  }
  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handleAddress(e) {
    setAddress(e.target.value);
  }
  function handleTag(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      const val = event.target.value;
      console.log(val);
      setTags((prevStates) => {
        return [...prevStates, val];
      });
      // event.target.value = tags.map((item) => {
      //   return <tagBox tagName={item} />;
      // });
    }
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
          >
            <option value="">None</option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </div>
        <div id="tags-area">
          <h5>Add relevant tags</h5>
          <TextField className="tags" placeholder="tags" onKeyUp={handleTag} />
        </div>
        <div id="portfolio">
          <h4 style={{ marginBottom: "1rem" }}>Portfolio</h4>
          <input id="portName" placeholder="Name of Project"></input>
        </div>
        <textarea
          id="portDes"
          placeholder="Describe your project in brief"
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
