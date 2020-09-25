import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Link from '@material-ui/core/Link';
import { useScrollTrigger } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  top:{
    paddingTop:theme.spacing(4),
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 
  form: {
    width: '100%',
    marginTop: theme.spacing(6),
  },
  margin: {
    margin: theme.spacing(2),
  },
  textField: {
    width: '25ch',
  },
  button: { textTransform: 'none' }

}));

export default function SignUp() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState({});
  const [lastName, setLastName] = useState("");
  const [lastNameError,setLastNameError] = useState({});
  const [email, setEmailAddress] = useState("");
  const [emailError, setEmailAddressError] = useState({});
  const [password,  setPassword] = useState("");
  const [passwordError, setPasswordError] = useState({});
  
  const onSubmit = (e)=>{
    e.preventDefault();
    const isValid = formValidation();
    
  }
  const formValidation = ()=>{
    const emailError = {};
    const passwordError = {};
    let isValid = true;
    if (firstName.length === 0 ) {
      firstNameError.firstNameRequired = "First name required";
      isValid = false;
    }
    else if(lastName.length ===0){
      lastNameError.lastNameRequired = "Last name required";
      isValid = false;
    }
    else if(!email.length<1){
        emailError.emailRequired = "Email is required";
        isValid = false;
    }
    else if (!password.length>=0 ){
      passwordError.passwordRequired = "Password Required";
    }
    else if(!email.includes("@")){
      emailError.emailValid = "Email not valid";
      isValid = false;
    }
    
    else if(!password.length>8){
        passwordError.passwordLength = "Password too Short";
        isValid = false;
    }
    setFirstNameError(firstNameError);
    setLastNameError(lastNameError);
    setEmailAddressError(emailError);
    setPasswordError(passwordError);

    return isValid;
  }

  return (
    <Container className={classes.top}  component="main" maxWidth="sm">
      <Card className={classes.pepper}  elevation="10">
      <CardContent>
      <CssBaseline />
      <div className={classes.paper}>  
        <Typography  component="h1" variant="h5" align='left'>
          Fundoo
        </Typography>
        <Typography  component="p" variant="p">
          Create a fundoo account
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                size="small"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e)=>{setFirstName(e.target.value)}}
              />
              {Object.keys(setFirstNameError).map((key)=>{
              return <div style ={{color: "red"}}>{setFirstNameError[key]}</div>
          })}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                id="lastName"
                label="Last Name"
                onChange={(e)=>{setLastName(e.target.value)}}
              />
              {Object.keys(setLastNameError).map((key)=>{
              return <div style ={{color: "red"}}>{setLastNameError[key]}</div>
          })}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                id="email"
                label="Email Address"
                helperText={"You can use letters numbers & periods"}
                onChange={(e)=>{setEmailAddress(e.target.value)}}
              />
              {Object.keys(emailError).map((key)=>{
              return <div style ={{color: "red"}}>{emailError[key]}</div>
          })}
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                variant="outlined"
                required
                fullWidth
                size="small" 
                label="Password"
                type="password"
                id="password"
                helperText={"Use 8 or more characters with a mix of letters, numbers & symbols"}   
                onChange={(e)=>{setPasswordError(e.target.value)}}
              />
               {Object.keys(passwordError).map((key)=>{
              return <div style ={{color: "red"}}>{passwordError[key]}</div>
          })}
            </Grid>
            <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
          <TextField
            variant="outlined"
            required
            fullWidth
            size="small"
            label="confirm"
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            InputProps={{
            endAdornment:(  
              <IconButton
                  size="small"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end">
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>          
            ),
            }}           
          />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Link href="./SignIn" variant="body2">
            <Button variant="text" color="primary">
              Sign in instead
            </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Button className={classes.btn} variant="contained" color="primary">
              SignUp
            </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      </CardContent>
      </Card>
     </Container>   );
}
