import React, { useState, useEffect, useRef } from "react";
import "./CompanyInfo.css";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

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
      <div id="companyInfo">
        <TextField
          id="companyName"
          label="Company Name"
          required
          value={firstName}
          onChange={handleFirstName}
        />
        <TextField
          className="row2"
          select
          required
          label="Category"
          SelectProps={{
            native: true,
          }}
        ></TextField>
        <TextField
          id="country"
          className="row2"
          select
          required
          label="Country"
          SelectProps={{
            native: true,
          }}
        ></TextField>

        <TextField
          className="address"
          label="Address"
          value={Address}
          required
          onChange={handleAddress}
        />
      </div>
      <div id="skip-next" style={{ padding: "0 5rem" }}>
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

export default PerosnalInfo;
