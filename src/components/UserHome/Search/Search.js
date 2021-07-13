import React, { useEffect, useState } from "react";
import useStyles from "../SidebarStyles";
import CreatorCard from "./CreatorCard";
import Sort from "./Sort";

function Dashboard(props) {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Sort />
      <div
        className={classes.toolbar}
        style={{ gridTemplateColumns: "3fr 3fr 3fr", gridGap: "0.8rem" }}
      >
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
      </div>
    </main>
  );
}

export default Dashboard;
