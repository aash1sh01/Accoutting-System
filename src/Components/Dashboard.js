import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  Typography,
  CardContent,
} from "@material-ui/core";
import "./Styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import PieChart from "./PieChart";
import CurrentBalance from "./CurrentBalance";
import IncomeCard from './IncomeCard';
import ExpenseCard from './ExpenseCard';
import Aashish from '../Assets/aa.jpeg';
import CardSlider from './CardSlider';
import DebitInfo from './DebitInfo';
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
    float: "left",
    borderRadius: "0px 24px 24px 0px",
    textTransform: "none",
  },
  rightButton: {
    backgroundColor: "#8900FF",
    color: "#fff",
    marginLeft: "",
    fontSize: "24px",
    height: "34px",
    width: "34px",
    borderRadius: "24px 0px 0px 24px",
    textTransform: "none",
    marginRight:"",
    float: "right",
  },
  Card1: {
    width: "660px",
    backgroundColor: "#43384D",
    height: "370px",
    marginTop: "80px",
    marginLeft: "20vh",
    borderRadius: "10px",
    
  },
  Card2: {
    display:"none",
    
  [theme.breakpoints.up('md')]: {
      display: 'block',
      width: "325px",
      backgroundColor: "#43384D",
      height: "340px",
      marginTop: "150px",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "15px",
  },},
  PieChartcircle: {
    background: "#473C56",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    width: "270px",
    height: "250px",
    
    
    
    borderRadius: "50%",
    behavior: "url(PIE.htc)" /* remove if you don't care about IE8 */,
  },
  CardHeader1: {
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: "24px",
    fontFamily: "Roboto",
  },
  root:{
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  imgProfile: {
    width: '325px',
    marginTop: '-50px',
  },
  Image:{
    position: "absolute",
    marginLeft: '112.5px',
    height:"100px", 
    width:"100px", 
    borderRadius: "25%",
  },
  GridStyle1:{
    textAlign: "center"
  },
  HeaderTypography: {
    fontfamily: "Roboto",
    fontWeight: "bold",
    fontSize: "18px",
    color: "white",
    marginTop: "100px", 
    textAlign: "center",
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
      <Grid container spacing={4} className={classes.gridStyle}>
        <Grid item xs={1}>
          <Button
            className={classes.leftButton}
            onClick={() =>
              month !== "Jan" && setMonth(months[months.indexOf(month) - 1])
            }
          >
            {"<"}
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={1}>
            {months.map((values, index) => (
              <Grid item xs={1} className={classes.GridStyle1}>
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
        <Grid item xs={1} justify="center">
          <Button
            className={classes.rightButton}
            onClick={() =>
              month !== "Dec" && setMonth(months[months.indexOf(month) + 1])
            }
          >
            {">"}
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={10} >
        <Grid item xs={6}>
          <Card className={classes.Card1}>
            <Grid container >
              <Grid item md={6} >
                <CardHeader
                  title="Reports"
                  disableTypography
                  className={classes.CardHeader1}
                />{" "}
                <CardContent className={classes.root}>
                    <Card className={classes.PieChartcircle}>
                      {" "}
                      <CardContent>
                        <PieChart month={month} />
                      </CardContent>
                    </Card>
                </CardContent>
              </Grid>
              <Grid item xs={6}>
                <CurrentBalance />
                <ExpenseCard/>
                <IncomeCard/>
                
              </Grid>
            </Grid>
          </Card>
          <Grid container spacing={10} >
            <Grid item xs={6}>
            <DebitInfo/>
            </Grid>
            <Grid item xs={6}>
              <DebitInfo/>
            </Grid>
          
          </Grid>
          
        </Grid>

        <Grid item xs={6}>
        
          <Card className={classes.Card2} justify="center">
         
            <div className={classes.imgProfile}>
         
            <img src={Aashish} className={classes.Image}/>
          
          </div>
          <CardHeader title="Aashish Adhikari" className={classes.HeaderTypography} disableTypography/>
          <CardSlider/>


          </Card>
        </Grid>
      </Grid>g



    </div>
  );
}
export default DashboardComponent;
