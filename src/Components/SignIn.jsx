import React, { useState } from 'react';
import Card from '@material-ui/core/Card';  
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "./Error";
import service from "../services/userservices";
import Snackbar from '@material-ui/core/Snackbar';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },head:{
    marginTop:theme.spacing(-7),
  },
  large: {
    marginTop:theme.spacing(2),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },  Signn:{
    marginTop: theme.spacing(1),

  }}

));
const validationSchema  = Yup.object().shape({
  
  email: Yup.string().email().required("Email required!"),
  password: Yup.string()
  .min(4,"Must have minimum Charachters")
  .required("Required !").matches(/(?=.*[0-9])/, "Password must contain a number."),
  
});

export default function SignIn(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState({email : "",password : "" });

  const onChangeUser = (e) =>{
    setUser({...user, [e.target.name]: e.target.value})
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const onSubmitSignIN = (e)=>{
    e.preventDefault();
    service.signin(user).then((user)=>{
      if (user.status === 200) {
        localStorage.setItem("firstName",user.data.firstName);
        localStorage.setItem("lastName",user.data.lastName);
        localStorage.setItem("token", user.data.id);
        localStorage.setItem("email", user.data.email);       
        alert('Login Successfully');
        props.history.push('/Dashboard');
      }
    }).catch((err)=>{
      alert('Invalid Credentials');
    });
  }

                                     
  return (
    <Formik initialValues={{email: "", password: ""}} validationSchema={validationSchema}>
      {({ values, errors, touched, handleChange, handleBlur}) => (
        <Container component="main" maxWidth="xs">
        <Card className={classes.paper}  elevation={6}>
      <CardContent>
      <CssBaseline />
      <div className={classes.paper}>
      <Typography className={classes.head} component="h1" variant="h5">
          Fundoo
        </Typography>
        <Typography className={classes.Signn} component="h6" variant="h6">
          Sign in
        </Typography>
        
        <form className={classes.form}  noValidate onSubmit={onSubmitSignIN}>
          <TextField
           size="small"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            value={user.email}
            onInput ={handleChange}
            onChange={onChangeUser}
            onBlur={handleBlur} 
            className={touched.email && errors.email ? "has-error"
              : null}
           />
            <Error touched={touched.email} message={errors.email}/>
          
          <TextField
           size="small"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onInput = {handleChange}
            value = {user.password}
            onChange = {onChangeUser}
            onBlur = {handleBlur}
            className={touched.password && errors.password ? "has-error" : null } 
          />
          <Error touched={touched.password} message={errors.password}/>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="./ForgetPassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs>
              <Link href="./Register" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      </CardContent>
      </Card>
    </Container>
      )}

    </Formik>
  );
}
