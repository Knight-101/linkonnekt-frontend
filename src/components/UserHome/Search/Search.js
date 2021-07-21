import React from "react";
import useStyles from "../SidebarStyles";
import Sort from "./Sort";
import UserCard from "./UserCard";
import Filters from "./Filters";

function Dashboard(props) {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Sort />
      <div style={{ display: "flex", flexDirection: "Row" }}>
        <div
          className={classes.toolbar}
          style={{ display: "flex", flexDirection: "Column" }}
        >
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
        <Filters />
      </div>
    </main>
  );
}

export default Dashboard;
