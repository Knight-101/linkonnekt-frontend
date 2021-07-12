import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import "./stats.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: "#E63946",
    opacity: "0.65",
    color: "white",
    margin: 10

  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Stats() {
  const classes = useStyles();
  const DataArr = [
    { id: 1, date: "Yesterday", amount: 10 },
    { id: 2, date: "LastWeek", amount: 10 },
    { id: 3, date: "LastMonth", amount: 10 },
  ];
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          New Audience Captured
        </Typography>
        <Divider />
        <div>
          <h3 className="stat-most-imp">1003</h3>
        </div>
        <div className="flexbox">
          {DataArr.map((post) => (
            <div key={post.id}>
              <div> {post.date}</div>
              <div className="old-stats-div">
                <p>{post.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
