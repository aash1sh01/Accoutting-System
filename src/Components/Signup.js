import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as yup from 'yup';
import {useForm} from 'react-hook-form'
import { useHistory } from 'react-router';
import {yupResolver} from '@hookform/resolvers/yup';
import Photo from '../Assets/App-Icon.png';
import {Link} from 'react-router-dom';
import './Styles.css';

const schema =yup.object().shape({
  firstName: yup.string().matches(/^([^0-9]*)$/, "First Name should not be a number").required("First name is a required field"),
  lastName : yup.string().matches(/^([^0-9]*)$/, "Last should not be a number").required("Last Name is a required filed")
});
 
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      
      <a color="inherit" href="https://eydean.com/">
        Eydean Inc
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width:'100%',
    height:'100%'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const {register, handleSubmit, errors}= useForm({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });
  const history=useHistory();
  const onSubmit= (data)=>{
    history.push('./Dashboard')
  }
  const classes = useStyles();


  return (
     
    <Container component="main" color="black" >
      <CssBaseline />
      <div className={classes.paper}>
        <img src={Photo}/>
    
        <Typography component="h1" variant="h5" className="signup-heading" >Welcome to Accounting System </Typography>
        <Typography component="h1" variant="h5" className="signup-heading">
          Sign Up to Continue
        </Typography>
        <form className={classes.form} validate={true}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={!!errors.firstName}
                helperText={errors?.firstname?.message}
                ref={register}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                ref={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                ref={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                ref={register}
              />
            </Grid>
    
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <a variant="body2">
                <Link to="/login">
                Already have an account? Sign in
                </Link>
              </a>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    
  );
}