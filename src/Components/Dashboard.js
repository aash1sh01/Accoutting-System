import React from "react";
import { Grid, Card, CardHeader, Typography } from "@material-ui/core";
import "./Styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    color: "white",

    width: "80vw",
    backgroundColor: "#483C4D",
    borderRadius: "10px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "120px",
  },

  buttonStyle: {
    color: "white",
    textTransform: "none",
  },
  buttonStyle1: {
    color: "#FF8D33",
    textTransform: "none",
  },
  leftButton: {
    width: "5px",
    backgroundColor: "#8900FF",
    color: "#fff",
    fontSize: "24px",
    height: "34px",
    width: "34px",
    marginLeft: "-15px",
    borderRadius: "0px 24px 24px 0px",
    textTransform: "none",
  },
  rightButton: {
    backgroundColor: "#8900FF",
    color: "#fff",
    marginRight: "-15px",
    fontSize: "24px",
    height: "34px",
    width: "34px",
    borderRadius: "24px 0px 0px 24px",
    textTransform: "none",
  
  },
  Card1:{
    width:"40vw",
    backgroundColor: "#43384D",
    height: "40vh",
    marginTop: "80px",
    marginLeft: "20vh",
    borderRadius: "10px"
  },
  Card2:{
    width: "20vw",
    backgroundColor: "#43384D",
    height: "38vh",
    marginTop: "150px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "15px"
  },
  PieChartcircle: {
    background: "#473C56",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    width: "15vw",
    height: "30vh",
    marginTop: "auto",
    marginLeft: '100px',
    marginRight: "auto",
    borderRadius: "50%",
    behavior: "url(PIE.htc)" /* remove if you don't care about IE8 */
}
  
  
}));

function DashboardComponent() {
  var d = new Date();
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul", 
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var monthNow = months[d.getMonth()];
  const [month, setMonth] = React.useState(monthNow);
  const classes = useStyles();

  console.log(month);
  return (
    <div className="GeneralDiv">
      <Grid container spacing={2} className={classes.gridStyle}>
        <Grid item xs={1}>
          <Button
            className={classes.leftButton}
            onCLick={() => setMonth(months[1])}
          >
            {"<"}
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={10}>
            {months.map((values, index) => (
              <Grid item xs={1}>
                {" "}
                <Button
                  className={clsx(classes.buttonStyle, {
                    [classes.buttonStyle1]: index === months.indexOf(month),
                  })}
                  onClick={() => setMonth(values)}
                >
                  {" "}
                  {values}{" "}
                </Button>{" "}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Button className={classes.rightButton}>{">"}</Button>
        </Grid>
      </Grid>
      <Grid container spacing={10}>

      <Grid item xs={6}><Card className={classes.Card1}> <CardHeader> <Typography> Hello </Typography></CardHeader> <CardHeader className={classes.PieChartcircle}></CardHeader></Card></Grid>
      <Grid item xs={6}><Card className={classes.Card2}> </Card></Grid>
      </Grid>
    </div>
  );
}
export default DashboardComponent;
