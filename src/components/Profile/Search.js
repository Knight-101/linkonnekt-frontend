import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  search: {
    backgroundColor: "#f1f1f1",
    width: "25rem",
    height: "2.5rem",
    border: "1px solid #274659",
    marginRight: "10rem",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
  },
}));

export default function Search() {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <SearchIcon className={classes.searchIcon} />
    </div>
  );
}
