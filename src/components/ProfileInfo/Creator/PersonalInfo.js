import React, { useState } from "react";
import "./PersonalInfo.css";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Countries from "../Assets/Countries";
import { useDispatch, useSelector } from "react-redux";
import { setProfileData } from "../../../Redux/profileInfo/profileInfoActions";

const PerosnalInfo = (props) => {
  const dispatch = useDispatch();
  const personalInfoState = useSelector(
    (state) => state.profileInfo.personalInfo
  );
  const [personalInfo, setPersonalInfo] = useState(personalInfoState);
  function handleInput(e) {
    const { id, value } = e.target;
    setPersonalInfo((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(setProfileData(personalInfo));
    await props.handleNext();
    //export this data from the API here
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="personalInfo">
          <TextField
            id="firstName"
            label="First Name"
            required
            defaultValue={personalInfo.firstName}
            value={personalInfo.firstName}
            onChange={handleInput}
          />
          <TextField
            id="lastName"
            label="Last Name"
            required
            value={personalInfo.lastName}
            onChange={handleInput}
          />
          <div style={{ textAlign: "left" }}>
            <InputLabel required shrink htmlFor="country">
              Country
            </InputLabel>
            <NativeSelect
              required
              fullWidth
              id="country"
              onChange={handleInput}
            >
              <option value={personalInfo.country} default>
                {personalInfo.country}
              </option>
              <Countries />
            </NativeSelect>
          </div>
          <TextField
            id="state"
            required
            label="State"
            value={personalInfo.state}
            // value={currency}
            onChange={handleInput}
            // helperText="Please select your currency"
          />
        </div>
        <div class="aboutUser">
          <h5 className="aboutUserHead">Tell us about yourself</h5>
          <textarea
            id="about"
            required
            value={personalInfo.about}
            onChange={handleInput}
            className="aboutUserContent"
          ></textarea>
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
