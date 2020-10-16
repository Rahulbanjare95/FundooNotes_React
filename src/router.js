import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Register from './Components/Register';
import './App.css';
import SignIn from './Components/SignIn';
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';
import Dashboard from './Components/Dashboard';
import Archive from './Components/Archive';
import Trash from './Components/Trash';
import CreateNotes from './Components/CreateNotes';


function Routing() {
    return (
        <Router> 
          <Route path="/" exact component={SignIn} ></Route>
          <Route path="/register" component={Register} />
          <Route path="/SignIn"  component={SignIn} />
          <Route path="/ForgetPassword"  component={ForgetPassword} />
          <Route path="/resetpassword/:token"  component={ResetPassword} />
          <Route path="/dashboard" component={Dashboard} />   
          <Route path="/dashboard/notes" component = {CreateNotes}/>
          <Route path="/dashboard/archive" component={Archive}/>
          <Route path="/dashboard/trash" component={Trash}/>
        </Router>
    )
}
export default Routing;
