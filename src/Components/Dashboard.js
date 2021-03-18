import React from 'react';
import {Grid} from '@material-ui/core';
import Header from './Constants'
function DashboardComponent() {
    return (
        
        <Grid container direction='column'> 
        <Header/>
        
        
        <Grid item container>
        <Grid item xs={2}/>
        <Grid item xs={8}>Cards</Grid>
        <Grid item xs={2}/>
        </Grid>
        </Grid>

    )
}
export default DashboardComponent;