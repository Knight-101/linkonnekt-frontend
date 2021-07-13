import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "grid",
    gridTemplateColumns: "0.6fr 2fr 6fr",
    columnGap: "0.8rem",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    justifySelf: "left",
  },
}));

export default function Sort() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <p
          style={{
            margin: "0",
            fontSize: "1rem",
            justifySelf: "left",
            alignSelf: "bottom",
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
          <option value="">Price-High to Low</option>
          <option value="">Price-Low to High</option>
          <option value="">Popularity-High to Low</option>
          <option value="">Popularity-Low to High</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
