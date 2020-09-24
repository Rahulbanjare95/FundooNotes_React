import React from 'react';

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

const useStyles = makeStyles((theme) => ({
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

  return (
    <Container component="main" maxWidth="sm">
      <Card className={classes.pepper}  elevation="10">
      <CardContent>
      <CssBaseline />
      <div className={classes.paper}>  
        <Typography component="h1" variant="h5" align='left'>
          Fundoo
        </Typography>
        <Typography component="p" variant="h6">
          Create a fundoo account
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                size="small"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                id="lastName"
                label="Last Name"
                name="lastName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText={"You can use letters numbers & periods"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                name="password"
                label="Password"
                type="password"
                id="password"
                helperText={"Use 8 or more characters with a mix of letters, numbers & symbols"}   
              />
            </Grid>
            <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
          <TextField
            variant="outlined"
            required
            fullWidth
            size="small"
            name="confirm"
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
