import React, { useState, useEffect, useRef } from "react";
import "./Categories.css";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
// import ContentWriter from "./ContentWriter";
// import VideoEditor from "./VideoEditor";
// import GraphicDesigner from "./GraphicDesigner";

const Categories = (props) => {
  const [categories, setCategories] = useState({
    Category: "",
    Platform: "",
    Followers: "",
    Subscribers: "",
  });

  function handleSubmit() {
    console.log();
    props.handleNext();
    //export this data from the API here
  }
  function handleChoice(e) {
    const { id, value } = e.target;
    setCategories((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="skills">
          <div>
            <h5 style={{ textAlign: "left", marginBottom: "1rem" }}>
              Add your skills
            </h5>
            <InputLabel shrink htmlFor="category" style={{ textAlign: "left" }}>
              Select Category
            </InputLabel>
            <NativeSelect fullWidth id="Category" onChange={handleChoice}>
              <option value="" default>
                Select one
              </option>
              <option value="Beauty">Beauty</option>
              <option value="Animals">Animals</option>
              <option value="Business">Business</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Family">Family</option>
              <option value="Fashion">Food</option>
              <option value="Health">Health</option>
              <option value="Home">Home</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Music">Music</option>
              <option value="Outdoor Activities">Outdoor Activities</option>
              <option value="Society">Society</option>
              <option value="Sport">Sport</option>
              <option value="Technology">Technology</option>
              <option value="Vehicles">Vehicles</option>
            </NativeSelect>
            <InputLabel
              shrink
              htmlFor="platform"
              style={{ textAlign: "left", marginTop: "3rem" }}
            >
              Select your platform
            </InputLabel>
            <NativeSelect fullWidth id="Platform" onChange={handleChoice}>
              <option value="" default>
                Select one
              </option>
              <option value="YouTube">YouTube</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Twitter">Twitter</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
            </NativeSelect>
          </div>
          <div className="reach">
            {categories.Platform === "YouTube" && (
              <TextField
                className="followers"
                id="Subscribers"
                label="Subscribers"
                type="Number"
                required
                onChange={handleChoice}
              />
            )}
            {categories.Platform !== "YouTube" &&
              categories.Platform !== "" && (
                <TextField
                  className="followers"
                  id="Followers"
                  label="Followers"
                  type="Number"
                  required
                  onChange={handleChoice}
                />
              )}
          </div>
        </div>
        <div className="back-next">
          <button
            disabled={props.activeStep === 0}
            onClick={props.handleBack}
            className="back-next-btn"
            id="back"
          >
            Back
          </button>
          <button
            className="back-next-btn"
            id="next"
            type="submit"
            onClick={props.handleNext}
          >
            {props.activeStep === props.steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Categories;
