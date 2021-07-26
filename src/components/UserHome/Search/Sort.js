import React, { useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
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
  },
}));

export default function Sort(props) {
  const classes = useStyles();
  const BASE_URL = "http://localhost:8000";
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const handleSearch = (event) => {
    const name = document.querySelector("#search").value;
    console.log(name);
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
          value={state.age}
          onChange={handleChange}
          name="age"
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "age" }}
        >
          <option value="">Popularity-High to Low</option>
          <option value="">Popularity-Low to High</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
