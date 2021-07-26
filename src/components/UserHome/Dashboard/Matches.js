import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import imgsrc from "./Image.jpg";
import { makeStyles } from "@material-ui/core/styles";
import ChatIcon from "@material-ui/icons/Chat";
// import SvgIcon from "@material-ui/core/SvgIcon";

const useStyles = makeStyles({
  design_h3: {
    fontWeight: "bold",
  },
  design_h4: {
    fontWeight: "bold",
  },
  media: {
    height: "200px",
    width: "250px",
    borderRadius: "100px",
  },
  flex: {
    display: "flex",
    borderRadius: "30px",
    alignItems: "flex-start",
    padding: "30px",
  },
  message: {
    width: "50px",
    height: "50px",
    backgroundColor: "#274659",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Matches() {
  const classes = useStyles();

  return (
    <div
      style={{
        margin: 10,
        border: "1px solid black",
        width: "700px",
        height: "auto",
        borderRadius: "30px",
      }}
    >
      <Card className={classes.flex} style={{ backgroundColor: "#a8dadc" }}>
        <CardMedia className={classes.media} image={imgsrc} title="img" />
        <CardActionArea disabled>
          <CardContent>
            <h3 className={classes.design_h3}> Ankit </h3>
            <h4 className={classes.design_h4}> DU CIC </h4>
            <Typography variant="body2" color="textSecondary" component="p">
              Hello, Im a student of CIC and make content related to designing
              and UI/UX. Lorem ipsum dolor sit amet non. Lorem ipsum dolor sit
              amet non.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div className={classes.message}>
            <ChatIcon htmlColor="#ffffff"></ChatIcon>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
