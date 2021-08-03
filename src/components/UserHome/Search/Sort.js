import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "grid",
    gridTemplateColumns: "6fr 0.6fr 2fr ",
    columnGap: "0.8rem",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    justifySelf: "left",
  },
  search: {
    width: "50%",
    justifySelf: "center",
    display: "flex",
  },
  searchButton: {
    alignSelf: "flex-end",
    border: "none",
    padding: "0.1rem 1rem",
    fontSize: "0.9rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "&:hover": {
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    },
  },
}));

export default function Sort(props) {
  const classes = useStyles();
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const [sortProperty, setSortProperty] = useState("");

  function lowToHigh(property) {
    return function (a, b) {
      if (a.profileInfo[property] > b.profileInfo[property]) return 1;
      else if (a.profileInfo[property] < b.profileInfo[property]) return -1;
      return 0;
    };
  }
  function highToLow(property) {
    return function (a, b) {
      if (a.profileInfo[property] < b.profileInfo[property]) return 1;
      else if (a.profileInfo[property] > b.profileInfo[property]) return -1;
      return 0;
    };
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    console.log(props.creatorsArray);
    setSortProperty(value);
    switch (value) {
      case 1:
        props.setNewCreators(
          [...props.creatorsArray].sort(lowToHigh("popularity"))
        );
        break;
      case 2:
        props.setNewCreators(
          [...props.creatorsArray].sort(highToLow("popularity"))
        );
        break;

      default:
        break;
    }
  };
  const handleSearch = (event) => {
    const name = document.querySelector("#search").value;
    axios
      .get(BASE_URL + "/creator/list/name/" + name)
      .then((res) => {
        props.setNewCreators(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <div className={classes.search}>
          <TextField id="search" label="Search by name" />
          <button className={classes.searchButton} onClick={handleSearch}>
            Search
          </button>
        </div>
        <p
          style={{
            margin: "0",
            fontSize: "1rem",
            justifySelf: "left",
            alignSelf: "flex-end",
          }}
        >
          Sort by:-
        </p>
        <NativeSelect
          value={sortProperty}
          onChange={handleChange}
          name="sortProperty"
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "age" }}
        >
          <option value="1">Popularity-High to Low</option>
          <option value="2">Popularity-Low to High</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
