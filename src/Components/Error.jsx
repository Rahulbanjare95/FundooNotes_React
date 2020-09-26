
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

const Error = ({ touched, message}) => {
    const classes = useStyles();

    if(!touched){
        return <div className={classes.root}>&nbsp;
        </div>;
    }
    if(message){
        return <div className={classes.root} ><Alert variant="filled"  severity="error">
        {message}
      </Alert></div>;
    }
    return <div color="green">&nbsp;</div>;
}

export default Error;