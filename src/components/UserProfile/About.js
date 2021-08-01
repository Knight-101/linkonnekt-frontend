import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import QueueIcon from "@material-ui/icons/Queue";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme) => ({
  element: {
    padding: "0 1.5rem",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
  },
  // carousel: {
  //   display: "inline-block",
  //   padding: "1rem 2rem",
  // },
  // aboutTypo: {
  //   display: "inline-block",
  // },
  // socialTypo: {
  //   display: "inline-block",
  // },
  // Underline: {
  //   width: "5rem",
  //   height: "0.3rem",
  //   borderRadius: "100px",
  //   backgroundColor: "#457b9d",
  // },
  // about: {
  //   // marginTop: "1rem",
  //   // padding: "0 2rem",
  //   textAlign: "left",
  // },
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
