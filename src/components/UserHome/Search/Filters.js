import React from "react";
import useStyles from "../SidebarStyles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";

export default function Filter(props) {
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
  const BASE_URL = "http://localhost:8000";
  const [value, setValue] = React.useState("");
  const [state, setState] = React.useState({
    nano: true,
    micro: false,
    mini: false,
    mega: false,
  });

  const handleCategory = (event) => {
    const cat = event.target.value;
    setValue(cat);
    cat === "All"
      ? axios
          .get(BASE_URL + "/creator/list")
          .then((res) => {
            props.setNewCreators(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
      : axios
          .get(BASE_URL + "/creator/list/category/" + cat)
          .then((res) => {
            props.setNewCreators(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
  };

  const handleCreatorType = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { nano, micro, mini, mega } = state;

  return (
    <div className={classes.sidebar}>
      <FormControl component="fieldset">
        <div className={classes.group}>
          <FormLabel component="legend">Categories</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleCategory}
          >
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel
              value="Beauty"
              control={<Radio />}
              label="Beauty"
            />
            <FormControlLabel
              value="Animals"
              control={<Radio />}
              label="Animals"
            />
            <FormControlLabel
              value="Business"
              control={<Radio />}
              label="Business"
            />
            <FormControlLabel
              value="Entertainment"
              control={<Radio />}
              label="Entertainment"
            />
            <FormControlLabel
              value="Family"
              control={<Radio />}
              label="Family"
            />
            <FormControlLabel
              value="Fashion"
              control={<Radio />}
              label="Fashion"
            />
            <FormControlLabel value="Food" control={<Radio />} label="Food" />
            <FormControlLabel
              value="Health"
              control={<Radio />}
              label="Health"
            />
            <FormControlLabel value="Home" control={<Radio />} label="Home" />
            <FormControlLabel
              value="Lifestyle"
              control={<Radio />}
              label="Lifestyle"
            />
            <FormControlLabel value="Music" control={<Radio />} label="Music" />
            <FormControlLabel
              value="Outdoor Activities"
              control={<Radio />}
              label="Outdoor Activities"
            />
            <FormControlLabel
              value="Society"
              control={<Radio />}
              label="Society"
            />
            <FormControlLabel value="Sport" control={<Radio />} label="Sport" />
            <FormControlLabel
              value="Technology"
              control={<Radio />}
              label="Technology"
            />
            <FormControlLabel
              value="Vehicles"
              control={<Radio />}
              label="Vehicles"
            />
          </RadioGroup>
        </div>
        <div className={classes.group}>
          <FormLabel component="legend">Creator Type</FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={nano}
                onChange={handleCreatorType}
                name="nano"
              />
            }
            label="Nano Creator"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={micro}
                onChange={handleCreatorType}
                name="micro"
              />
            }
            label="Micro Creator"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mini}
                onChange={handleCreatorType}
                name="mini"
              />
            }
            label="Mini Creator"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mega}
                onChange={handleCreatorType}
                name="mega"
              />
            }
            label="Mega Creator"
          />
        </div>
      </FormControl>
    </div>
  );
}
