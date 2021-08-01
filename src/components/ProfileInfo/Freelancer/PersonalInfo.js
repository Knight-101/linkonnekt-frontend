import React, { useState } from "react";
import "./PersonalInfo.css";
import TextField from "@material-ui/core/TextField";

const PerosnalInfo = () => {
  const [buttonClicked, setButtonClicked] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
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

  return (
    <div>
      <div id="personalInfo">
        <TextField
          id="fName"
          label="First Name"
          required
          value={firstName}
          onChange={handleFirstName}
        />
        <TextField
          id="lName"
          label="Last Name"
          required
          value={lastName}
          onChange={handleLastName}
        />
        <TextField
          id="country"
          select
          required
          label="Country"
          SelectProps={{
            native: true,
          }}
          // onChange={handleChange}
          // helperText="Please select your currency"
        ></TextField>
        <TextField
          id="State"
          select
          required
          label="State"
          SelectProps={{
            native: true,
          }}
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
        ></TextField>
        <TextField
          className="address"
          label="Address"
          value={Address}
          required
          onChange={handleAddress}
        />
        <TextField id="pinCode" label="Pin Code" required />
      </div>
      <div id="roleSelection">
        <h6>Select your role</h6>
        <div id="roles">
          <button className="rolesOptions" onClick={() => setButtonClicked(1)}>
            Creator
          </button>
          <button className="rolesOptions" onClick={() => setButtonClicked(2)}>
            Brand
          </button>
          <button className="rolesOptions" onClick={() => setButtonClicked(3)}>
            Freelancer
          </button>
          <button className="rolesOptions" onClick={() => setButtonClicked(4)}>
            Collaborator
          </button>
        </div>
        <div id="skip-next">
          <button id="skip" className="skip-next-btn">
            Skip
          </button>
          <button
            id="next"
            type="submit"
            className="skip-next-btn"
            onClick={handleSubmit}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerosnalInfo;
