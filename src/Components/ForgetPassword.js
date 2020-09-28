import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "./Error";
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  head: {
    marginTop: theme.spacing(-8),
  },
  forget: {
    paddingTop: "5px",

  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}

));
const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email required!")
});

export default function SignIn() {
  const classes = useStyles();
  const [user, setUser] = useState({email : ""});

  const onChangeUser = (e) =>{
    setUser({...user, [e.target.name]: e.target.value})
  }
  
  const onSubmitForgetPassword = (e)=>{
    e.preventDefault();
    Axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/reset', user)
    .then((user)=>{
      console.log(user);
      console.log()
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  return (
    <Formik initialValues={{ email: "" }}
      validationSchema={validationSchema}>
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Container component="main" maxWidth="xs">
          <Card className={classes.paper} elevation="6">
            <CardContent>
              <CssBaseline />
              <div className={classes.paper}>
                <Typography className={classes.head} component="h1" variant="h5">
                  Fundoo
        </Typography>
                <Typography className={classes.forget} component="p" variant="p">
                  Forget Password
        </Typography>
                <form className={classes.form} noValidate onSubmit = {onSubmitForgetPassword}>
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
                    helperText={"Enter email to receive password link"}
                    value={user.email}
                    onInput={handleChange}
                    onChange={onChangeUser}
                    onBlur={handleBlur}
                    className={touched.email && errors.email ? "has-error"
                      : null}
                  />
                   <Error touched={touched.email} message={errors.email}/>
                  <Button
                    href=""
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"

                  >
                    Send
          </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="./SignIn" variant="body2">
                        Back to SignIn
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
