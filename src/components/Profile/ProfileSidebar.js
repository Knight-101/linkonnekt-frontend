import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "left",
    padding: "1rem 2rem 0 2rem",
    // marginBottom: "2rem",
    fontSize: "1.5rem",
    marginBottom: "1rem",
    fontWeight: "bold",
    letterSpacing: "5px",
    color: "white",
    textDecoration: "none",
  },
}));

const ProfileOverview = (props) => {
  const classes = useStyles();

  return (
    <div className="profile">
      <Link to="/userhome/dashboard" className={classes.title}>
        <p className={classes.title}>Linkonnekt</p>
      </Link>
      <Divider />
      <div>
        {/* Image comes here */}
        <img src={props.image} alt="dp" className="profile-image" />
      </div>
      <div id="user-data">
        <div className="user-data-box" style={{ justifyContent: "center" }}>
          <h4>{props.name}</h4>
        </div>
        <div className="user-data-box">
          {/* <User />
          {props.name} */}
          <h5>{props.role}</h5>
        </div>
        <div className="user-data-box">
          {/* <Mail /> {props.email} */}
          {props.category}
        </div>
        <div className="user-data-box">
          {/* <User />
          {props.name} */}
          <h5>{props.location}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
