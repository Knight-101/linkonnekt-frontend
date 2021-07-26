import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SocialIcons from "./SocialIcons";
import Button from "@material-ui/core/Button";
import MessageIcon from "@material-ui/icons/Message";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  element: {
    padding: "1.5rem",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
  },
  name: {
    display: "inline-block",
    margin: "0.5rem 2rem",
    fontSize: "2rem",
  },
  place: {
    fontSize: "1rem",
    margin: "0.5rem 2rem",
    display: "inline-block",
  },
  vocation: {
    margin: "0.5rem 2rem",
    color: "#5db3b6",
    fontSize: "1rem",
  },
  ButtonContainer: {
    display: "flex",
    flex: "row",
    textAlign: "center",
    justifyContent: "space-evenly",
    margin: "1rem 2rem",
  },
  buttonFirst: {
    backgroundColor: "#457b9d",
    color: "#f8f8f8",
  },
  buttonSecond: {
    color: "#457b9d",
  },
  buttonThird: {
    color: "#E63946",
  },
}));

export default function MainContent() {
  const classes = useStyles();
  return (
    <div className={classes.element}>
      <Typography variant="h2" className={classes.name} component="h1">
        Daksh Goel
      </Typography>
      <Typography variant="h4" className={classes.place} component="h4">
        <LocationOnIcon />
        Dehradun
      </Typography>
      <Typography variant="h4" className={classes.vocation} component="h4">
        Student
      </Typography>
      <Divider />

      <SocialIcons />
      <Divider />

      <div className={classes.ButtonContainer}>
        <Button
          variant="contained"
          className={classes.buttonFirst}
          size="large"
          startIcon={<MessageIcon />}
        >
          Send Message
        </Button>
        <Button
          className={classes.buttonSecond}
          variant="outlined"
          size="large"
          startIcon={<ReportProblemIcon />}
        >
          BookMark User
        </Button>
        <Button
          variant="outlined"
          className={classes.buttonThird}
          size="large"
          startIcon={<BookmarkIcon />}
        >
          Report User
        </Button>
      </div>
    </div>
  );
}
