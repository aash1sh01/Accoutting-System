import React from 'react';
import {Card, CardHeader, Button, Grid, Typography, CardContent} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

function DebitInfo() {
  const useStyles = makeStyles((theme) => ({
    CardStyle:{
      width: '303px',
      height: '243px',
      background: 'rgba(67, 56, 77, 0.9)',
      marginLeft: "20vh",
      marginTop: "20px"
    }     
  
  
  }));
  const classes= useStyles();
  return (
    
    <div>
      <Card className={classes.CardStyle}>

      </Card>
    </div>
  )
}

export default DebitInfo
