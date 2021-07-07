import React, { useState, useEffect, useRef } from "react";
import "./PersonalInfo.css";
import TextField from "@material-ui/core/TextField";

const PerosnalInfo = () => {
  return (
    <div>
      <div id="personalInfo">
        <TextField id="fName" label="First Name" />
        <TextField id="lName" label="Last Name" />
        <TextField
          id="country"
          select
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
          label="State"
          SelectProps={{
            native: true,
          }}
          // value={currency}
          // onChange={handleChange}
          // helperText="Please select your currency"
        ></TextField>
        <TextField className="address" label="Address" />
        <TextField id="pinCode" label="Pin Code" />
      </div>
      <div id="roleSelection">
        <h6>Select your role</h6>
        <div id="roles">
          <button className="rolesOptions">Creator</button>
          <button className="rolesOptions">Brand</button>
          <button className="rolesOptions">Freelancer</button>
          <button className="rolesOptions">Collaborator</button>
        </div>
        <div id="skip-next">
          <button id="skip" className="skip-next-btn">
            Skip
          </button>
          <button id="next" className="skip-next-btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerosnalInfo;
