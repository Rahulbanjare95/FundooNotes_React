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
import service from "../services/userservices";

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
  newPassword: Yup.string()
    .min(4, "Must have minimum  4 Charachters")
    .required("Required !"),
  confirm: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match').required('Required!')
});

export default function SignIn(props) {
  const classes = useStyles();

  const [user, setUser] = useState({ newPassword: "" });

  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }


  const onSubmitResetPassword = (e) => {
    e.preventDefault();
    service.resetPassword(window.location.pathname, user);
  }

  return (
    <Formik initialValues={{ newPassword: "", confirm: "" }}
      validationSchema={validationSchema}>
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Container component="main" maxWidth="xs">
          <Card className={classes.paper} elevation={6}>
            <CardContent>
              <CssBaseline />
              <div className={classes.paper}>
                <Typography className={classes.head} component="h1" variant="h5">
                  Fundoo
          </Typography>
                <Typography className={classes.forget} component="h6" variant="h6" helperText={"Enter email to receive reset password link "}>
                  Reset Password
          </Typography>
                <form className={classes.form} noValidate onSubmit={onSubmitResetPassword}>
                  <TextField
                    size="small"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="newPassword"
                    label="New Password"
                    name="newPassword"
                    autoFocus
                    helperText={"Enter a secure password"}
                    onInput={handleChange}
                    onChange={onChangeUser}
                    value={user.newPassword}
                    onBlur={handleBlur}
                    className={touched.newPassword && errors.newPassword ? "has-error"
                      : null}
                  />
                  <Error touched={touched.newPassword} message={errors.newPassword} />
                  <TextField
                    size="small"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    id="confirm"
                    label="Confirm"
                    name="confirm"
                    helperText={"Enter a matching password"}
                    onChange={handleChange}
                    value={user.confirm}
                    onBlur={handleBlur}
                    className={touched.confirm && errors.confirm ? "has-error"
                      : null}
                  />
                  <Error touched={touched.confirm} message={errors.confirm} />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    > Reset Password
              </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="../SignIn" variant="body2">
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
