import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
  },
  title: {
    fontColor: "white",
    padding: "10px",
    alignItems: "center",
  },
  width: {
    // display: "flex",
    padding: "2rem",
    background: "#457b9d",
    width: "340px",
    height: "100vh",
  },
  image: {
    marginTop: "2rem",
    marginBottom: "1rem",
    width: "200px",
    height: "200px",
    border: `2px solid #f8f8f8`,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: "100%",
  },
}));

function ProfileSidebar() {
  const classes = useStyles();
  return (
    <div className={classes.width}>
      <div className={classes.toolbar} />
      <div className={classes.title}>Linkonnekt</div>
      <div className={classes.image}>{/* image goes here */}</div>
    </div>
  );
}

export default ProfileSidebar;
