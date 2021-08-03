import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import GoogleLogin from "react-google-login";
import axios from "axios";
import "./SignupModal.css";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setData, setImg } from "../../Redux/userData/userDataActions";
import { useGoogleLogout } from "react-google-login";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SignupModal(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [role, setrole] = useState("");
  const [roleSelect, setRoleSelect] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const roleClick = (event) => {
    const { name, id } = event.target;
    setRoleSelect(id);
    setrole(name);
  };
  //for logout
  const clientId = process.env.REACT_APP_OAUTH_CLIENT_ID;
  const { signOut } = useGoogleLogout({
    clientId,
  });
  //for login
  const CLIENT_ID = process.env.REACT_APP_OAUTH_CLIENT_ID;

  const responseGoogle = async (response) => {
    let accessToken = response.accessToken;
    let email = response.profileObj.email;
    let username = response.profileObj.givenName;
    let profileImg = response.profileObj.imageUrl;
    //posting oauth data
    await axios
      .post(BASE_URL + "/auth/oauthsignup", {
        access_token: accessToken,
        email: email,
        role: role,
        profileImg: profileImg,
      })
      .then(async (res) => {
        if (res.data.ok) {
          localStorage.setItem("token", res.data.token);
          dispatch(setData(username, email, role));
          dispatch(setImg(profileImg));
          history.push("/emailV");
        }
        if (res.data === "User already exists") {
          signOut();
          setOpen(false);

          alert("User already exists");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const failureGoogle = (res) => {
    console.log(res);
  };

  return (
    <div>
      <button className="signUpGoogle" type="button" onClick={handleOpen}>
        Sign up with Google
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <CloseIcon
              style={{
                position: "relative",
                left: "180px",
                bottom: "10px",
                cursor: "pointer",
              }}
              onClick={() => setOpen(false)}
            />
            <h4>Select your role</h4>
            <hr></hr>
            <ul id="roles">
              <li className="roleInput">
                <button
                  name="Creator"
                  id="1"
                  className={
                    roleSelect === "1" ? "rolesOptionSelected" : "rolesOptions"
                  }
                  onClick={roleClick}
                >
                  Creator
                </button>
              </li>
              <li className="roleInput">
                <Button
                  name="Freelancer"
                  id="2"
                  disabled
                  className={
                    roleSelect === "2" ? "rolesOptionSelected" : "rolesOptions"
                  }
                  onClick={roleClick}
                >
                  Freelancer
                </Button>
              </li>
              <li className="roleInput">
                <Button
                  name="Brand"
                  id="3"
                  disabled
                  className={
                    roleSelect === "3" ? "rolesOptionSelected" : "rolesOptions"
                  }
                  onClick={roleClick}
                >
                  Brand
                </Button>
              </li>
            </ul>
            <hr></hr>
            <div id="google">
              <GoogleLogin
                className="aaa"
                clientId={CLIENT_ID}
                buttonText="Sign in with Google"
                onSuccess={responseGoogle}
                onFailure={failureGoogle}
                isSignedIn={true}
                redirectUri={BASE_URL + "/main"}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
