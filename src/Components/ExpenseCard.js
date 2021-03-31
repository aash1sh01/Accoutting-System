import React from 'react';
import {Card, CardHeader, CardContent,Grid, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Arrow from '../Assets/arr2.png'



export default function ExpenseCard() {
  const useStyles = makeStyles({
    CardStyle:{
      height: "70px",
      width: "250px",
      background: "#51495D",
      borderRadius: "9px",
      border: "1px solid #F9E639",
      marginLeft: "50px",
      marginTop: "10px",
      
    },
    CardHeader1: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "18px",
        fontFamily: "Roboto",
        marginTop: "-10px"
      },
      CardHeader1: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "18px",
        fontFamily: "Roboto",
        marginTop: "-65px"
      },
      GridStyle: {
        marginTop: "15px",
        marginLeft: "10px"
      },
      
      TypographyStyle:{
        fontFamily: "Roboto",
        fontSize:"12px",
        color: "#C4C4C4",
        marginLeft: "10px",
        marginTop: "-10px"
      }

 
  });
  const classes=useStyles();
    return (
    <div>
      <Card className={classes.CardStyle}>
      <Grid>
            <Grid item xs={2} className={classes.GridStyle}>
            <img src={Arrow}/>
            </Grid>
        <Grid item xs={10}>
        <CardHeader title="$200" className={classes.CardHeader1} disableTypography/>
        <CardContent>
          <Typography className={classes.TypographyStyle}> Expense in this period</Typography>
        </CardContent>
        </Grid>
        </Grid>
              
          
      </Card>
    </div>
  )
}
