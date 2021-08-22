import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./About.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProfileData } from "../../Redux/profileInfo/profileInfoActions";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  element: {
    display: "flex",
    flexDirection: "column",
    padding: "0 1.5rem",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
  },
  editIcon: {
    "&:hover": {
      opacity: 0.8,
      cursor: "pointer",
    },
  },
}));
export default function About(props) {
  const dispatch = useDispatch();
  const creatorInfo = useSelector((state) => state.profileInfo.personalInfo);
  const classes = useStyles();
  const [edit, setedit] = useState(false);
  const [about, setabout] = useState(props.about);
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const editData = () => {
    setedit((prev) => !prev);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setabout({ about: value });
  };
  const saveData = () => {
    setedit((prev) => !prev);
    const token = localStorage.getItem("token");
    creatorInfo.about = about;
    dispatch(setProfileData(creatorInfo));
    axios
      .patch(BASE_URL + "/creator/editabout", about, {
        headers: { Authorization: token },
      })
      .then((res) => {
        if (res.data.ok === 1) {
          console.log("Edit Saved");
        }
      });
  };
  return (
    <div className={classes.element}>
      {!edit ? (
        <div>
          <p>
            <EditIcon onClick={editData} className={classes.editIcon} />
          </p>
        </div>
      ) : (
        <div>
          <p>
            <SaveIcon onClick={saveData} className={classes.editIcon} />
          </p>
        </div>
      )}

      <div>
        <textarea
          readOnly={edit ? false : true}
          className={edit ? "Edit" : "noEdit"}
          onChange={handleChange}
        >
          {about.about}
        </textarea>
      </div>
    </div>
  );
}
