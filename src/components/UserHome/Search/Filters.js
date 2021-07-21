import React from "react";
import useStyles from "../SidebarStyles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
export default function Filter() {
  const useStyles = makeStyles({
    sidebar: {
      width: "100%",
      borderRadius: "1rem",
      margin: "0.5rem",
      borderTop: "1px solid #274659",
      borderLeft: "1px solid #274659",
    },
    check: {
      width: "2.5rem",
      height: "2.5rem",
    },
    group: {
      padding: "1.5rem",
      border: "2px solid #274659",
      backgroundColor: "#d9eff0",
      borderRadius: "1rem",
      margin: "0.5rem",
    },
  });

  const classes = useStyles();
  const [value, setValue] = React.useState("female");
  const [state, setState] = React.useState({
    nano: true,
    micro: false,
    mini: false,
    mega: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setValue(event.target.value);
  };

  const { nano, micro, mini, mega } = state;

  return (
    <div className={classes.sidebar}>
      <FormControl component="fieldset">
        <div className={classes.group}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </div>
        <div className={classes.group}>
          <FormLabel component="legend">Creator Type</FormLabel>
          <FormControlLabel
            control={
              <Checkbox checked={nano} onChange={handleChange} name="nano" />
            }
            label="Nano Creator"
          />
          <FormControlLabel
            control={
              <Checkbox checked={micro} onChange={handleChange} name="micro" />
            }
            label="Micro Creator"
          />
          <FormControlLabel
            control={
              <Checkbox checked={mini} onChange={handleChange} name="mini" />
            }
            label="Mini Creator"
          />
          <FormControlLabel
            control={
              <Checkbox checked={mega} onChange={handleChange} name="mega" />
            }
            label="Mega Creator"
          />
        </div>
      </FormControl>
    </div>
  );
}
