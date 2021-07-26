import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import QueueIcon from "@material-ui/icons/Queue";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme) => ({
  element: {
    padding: "1.5rem",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
  },
  carousel: {
    display: "inline-block",
    padding: "1rem 2rem",
  },
  aboutTypo: {
    display: "inline-block",
  },
  socialTypo: {
    display: "inline-block",
  },
  Underline: {
    width: "5rem",
    height: "0.625rem",
    borderRadius: "100px",
    backgroundColor: "#457b9d",
  },
}));
export default function About(props) {
  const classes = useStyles();
  return (
    <div className={classes.element}>
      <div className={classes.carousel}>
        <Typography
          variant="h4"
          className={classes.aboutTypo}
          gutterbox
          component="h4"
        >
          <PersonIcon />
          About
          <div className={classes.Underline}></div>
        </Typography>
      </div>
      <div className={classes.carousel}>
        <Typography variant="h4" className={classes.socialTypo} component="h4">
          <QueueIcon />
          Social
        </Typography>
      </div>
      <Divider />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut lorem
        efficitur, egestas risus ut, volutpat lectus. Maecenas consequat eros
        quis nulla placerat bibendum sed ut ante. Cras tristique urna laoreet
        nulla tincidunt, ut convallis lectus viverra. Phasellus tempus, nisi eu
        luctus feugiat, diam nisi mollis magna, et volutpat nisl ante sed risus.
        Ut dui lacus, semper consequat ultricies et, dapibus non urna. Proin ut
        commodo urna. Vivamus vel iaculis velit. Quisque gravida fermentum
        neque, eget condimentum augue fringilla in. Donec rutrum massa dolor, a
        dapibus erat tristique condimentum. Aenean venenatis diam libero, ut
        tempus nibh volutpat non. Fusce cursus. Lorem ipsum dolor sit amet,
        consectetur adipi
      </div>
    </div>
  );
}
