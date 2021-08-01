import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  element: {
    padding: "0 1.5rem",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
  },
}));
export default function About(props) {
  const classes = useStyles();
  return (
    <div className={classes.element}>
      <div>
        <p>{props.about}</p>
      </div>
    </div>
  );
}
