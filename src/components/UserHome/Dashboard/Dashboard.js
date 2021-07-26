import React from "react";
import useStyles from "../SidebarStyles";
import Invitations from "./Invitation";
import Collaborators from "./Collaborators";
import Stats from "./Stats";
// import Matches from "./Matches";

function Dashboard(props) {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <Invitations />
        <Collaborators />
        <Stats />
      </div>
    </main>
  );
}

export default Dashboard;
