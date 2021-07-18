import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";

export default function Platforms(props) {
  return (
    <>
      <div>
        <InputLabel
          shrink
          htmlFor="platform"
          style={{ textAlign: "left", marginTop: "3rem" }}
        >
          Select your platform
        </InputLabel>
        <NativeSelect
          fullWidth
          id={props.id}
          name="Platform"
          onChange={props.handlePlatforms}
        >
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
        {props.platform === "YouTube" && (
          <TextField
            className="followers"
            id={props.id}
            name="Subscribers"
            label="Subscribers"
            type="Number"
            required
            onChange={props.handlePlatforms}
          />
        )}
        {props.platform !== "YouTube" && props.platform !== "" && (
          <TextField
            className="followers"
            id={props.id}
            name="Followers"
            label="Followers"
            type="Number"
            required
            onChange={props.handlePlatforms}
          />
        )}
      </div>
    </>
  );
}
