import React from 'react'
import {Card, CardHeader, Button, Grid, Typography, CardContent} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Esewa from "../Assets/esewa.svg";
import Khalti  from "../Assets/khalti.svg";
import IME from  "../Assets/ime.svg";
import Nic from '../Assets/nic.svg';

export default function CurrentBalance() {
    const useStyles = makeStyles((theme) => ({
        CardStyle: {
            backgroundColor: "#51495D",
            width: "270px",
            height: "170px",
            borderRadius: "10px",
            color: "white",
            border: "1px solid #A039F9",
            
            marginTop: "15px",
            marginLeft:"40px",
            
            textAlign: "left",
            "&:hover":{
              backgroundColor:  "#8900FF"
            },
        },
        TypographyStyle:{
            marginLeft:"10px",
            fontWeight: "bold",
            marginTop: "-20px",
            
        },

        CardHeaderStyle:{
            fontFamily: "Roboto",
            fontWeight: "700",
    

        }
    
    
    }))
    const classes= useStyles();
    return (
        <div>
        
            <Card className={classes.CardStyle}>
                <Grid container>
                 <Grid item xs={10}>   
                <CardHeader title="Current Balance" className={classes.CardHeaderStyle} disableTypography/>
                <CardContent>
                    <Typography className={classes.TypographyStyle}>
                        $7000.00
                    </Typography>
                </CardContent>



                </Grid>
                <Grid item xs={2}>
                      <img src={Nic}/>
                      <img src={IME}/>
                      <img src={Esewa}/>
                      <img src={Khalti}/>
                
                </Grid>

                </Grid>
            
             

             
            </Card>
        
        </div>
    )
}
