import React, { useState, useEffect, useRef } from "react";
import "./PersonalInfo.css";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Countries from "../Assets/Countries";

const PerosnalInfo = (props) => {
  const [profileInfo, setProfileInfo] = useState({
    fName: "",
    lName: "",
    country: "",
    state: "",
    address: "",
    pinCode: "",
  });

  function handleInput(e) {
    const { id, value } = e.target;
    setProfileInfo((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  }
  function handleSubmit() {
    // console.log(firstName, lastName, buttonClicked, Address);
    console.log(profileInfo);
    props.handleNext();
    //export this data from the API here
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="personalInfo">
          <TextField
            id="fName"
            label="First Name"
            required
            value={profileInfo.fname}
            onChange={handleInput}
          />
          <TextField
            id="lName"
            label="Last Name"
            required
            value={profileInfo.lname}
            onChange={handleInput}
          />
          <div style={{ textAlign: "left" }}>
            <InputLabel shrink htmlFor="country">
              Country
            </InputLabel>
            <NativeSelect fullWidth id="country" onChange={handleInput}>
              <Countries />
            </NativeSelect>
          </div>
          <TextField
            id="state"
            required
            label="State"
            value={profileInfo.state}
            // value={currency}
            onChange={handleInput}
            // helperText="Please select your currency"
          />
          <TextField
            className="address"
            label="Address"
            id="address"
            value={profileInfo.address}
            required
            onChange={handleInput}
          />
          <TextField
            id="pinCode"
            label="Pin Code"
            value={profileInfo.pinCode}
            required
            onChange={handleInput}
          />
        </div>
        <div className="back-next">
          {/* <button
            disabled={props.activeStep === 0}
            onClick={props.handleBack}
            className="back-next-btn"
            id="back"
          >
            Back
          </button> */}
          <button className="back-next-btn" id="next" type="submit">
            {props.activeStep === props.steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PerosnalInfo;
