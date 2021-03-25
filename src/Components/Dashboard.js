import React from 'react';
import {Grid} from '@material-ui/core';
import Header from './Header'
import './Styles.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx'


const useStyles = makeStyles((theme) => ({
    gridStyle:{
        width: '80vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '120px',
        backgroundColor:"#483C4D",
        color:"white",
        borderRadius: "10px",
    },
    buttonStyle:{
        color:"white"
    }
}))


function DashboardComponent() {
    const [month, setMonth]=React.useState('Jan')
  
    const classes=useStyles();
    console.log(month)
    return (
        
        
        <div className='GeneralDiv'>
            <Grid container spacing={0} className={classes.gridStyle}>
        
        
        {['Jan', 'Feb',  'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'].map((values) => (
        <Grid item xs={1}> <Button className={classes.buttonStyle} onClick={()=>setMonth(values)}> {values} </Button> </Grid>))}
        </Grid>
        </div>
        
        
        
        
        

    )
}
export default DashboardComponent;