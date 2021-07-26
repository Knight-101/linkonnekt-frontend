import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Matches from "./Matches";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "40rem",
    height: "40rem",
    backgroundColor: theme.palette.background.paper,
    justifySelf: "right",
    gridColumn: "2",
    gridRow: "1/3",
    overflowX: "hidden",
    overflowY: "auto",
  },
  inline: {
    display: "inline",
    fontSize: "1.3rem",
  },
}));

export default function Collaborators() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <h4 style={{ paddingLeft: "1rem", textAlign: "center" }}>
        Interesting people to collab
      </h4>
      <ListItem alignItems="flex-start">
        <Matches />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <Matches />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <Matches />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <Matches />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <Matches />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <Matches />
      </ListItem>
    </List>
  );
}
