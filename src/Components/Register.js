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
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "./Error";

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
const validationSchema  = Yup.object().shape({
  firstName: Yup.string().min(3,"Minimum 3 Characters!").required("Required!"),
  lastName: Yup.string().min(2,"Minimum 2 Characters!").required("Required!"),
  email: Yup.string().email().required("Required!"),
  password: Yup.string()
  .min(4,"Must have minimum  4 Charachters")
  .required("Required !"),
  confirm: Yup.string()
  .oneOf([Yup.ref('newPassword'), null], 'Passwords must match').required('Required!')
});


export default function SignUp() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChangePassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <Formik initialValues = {{ firstName: "" ,lastName: "" ,email: "" ,password: "", confirm: ""}} validationSchema={validationSchema} >
       {({ values, errors, touched, handleChange, handleBlur}) => (
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
                   name="firstName"
                   label="First Name"
                   autoFocus
                   onChange={handleChange} 
                   value={values.firstName}
                   onBlur={handleBlur}
                   className={touched.firstName && errors.firstName ? "has-error"
                  : null}
                 />
                 <Error touched={touched.firstName} message={errors.firstName}/>
               </Grid>
               <Grid item xs={12} sm={6}>
                 <TextField
                   variant="outlined"
                   required
                   fullWidth
                   size="small"
                   id="lastName"
                   name="lastName"
                   label="Last Name"
                   onChange={handleChange} 
                   value={values.lastName}
                   onBlur={handleBlur}
                   className={touched.lastName && errors.lastName ? "has-error"
                  : null}
                 />
                 <Error touched={touched.lastName} message={errors.lastName}/>
               </Grid>
               <Grid item xs={12}>
                 <TextField
                   variant="outlined"
                   required
                   fullWidth
                   size="small"
                   id="email"
                   name="email"
                   label="Email Address"
                   helperText={"You can use letters numbers & periods"}
                   onChange={handleChange} 
                   value={values.email}
                   onBlur={handleBlur}
                   className={touched.email && errors.email ? "has-error"
                  : null}
                 />
                 <Error touched={touched.email} message={errors.email}/>
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
                   name="password"
                   helperText={"Use 8 or more characters with a mix of letters, numbers & symbols"}   
                   onChange={handleChange} 
                   value={values.password}
                   onBlur={handleBlur}
                   className={touched.password && errors.password ? "has-error"
                  : null}
                 />
                  <Error touched={touched.password} message={errors.password}/>
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
               name="confirm"
               type={values.showPassword ? 'text' : 'password'}
               value={values.confirm}
               onBlur={handleBlur}
               onChange={handleChange}
               onFocus={handleChangePassword}
               className={touched.confirm && errors.confirm ? "has-error"
               : null}
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
             <Error touched={touched.confirm} message={errors.confirm}/>
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
        </Container>   
       )}
    </Formik>
     );
}
