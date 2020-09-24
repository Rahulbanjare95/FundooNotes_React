import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  head:{
    marginTop:theme.spacing(-8),
  },
  forget:{
      paddingTop:"5px",

  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }}

));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
        <Card className={classes.paper}  elevation="6">
      <CardContent>
      <CssBaseline />
      <div className={classes.paper}>
      <Typography className={classes.head} component="h1" variant="h5">
          Fundoo
        </Typography>
        <Typography className={classes.forget} component="p" variant="p"  helperText={"Enter email to receive reset password link "}>
          Forget Password
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
           size="small"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            helperText={"Enter email to receive password link"}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
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
  );
}
