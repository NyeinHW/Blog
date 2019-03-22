import React from 'react';
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
import Login from './Login/login'
import Register from './Register/Register'

class Blog extends React.Component {
    render() {
      return (
        <Router>
          <ul>
       <li> <Link to="/login">Login</Link></li>
       <li><Link to="/register">Register</Link></li>
       
        </ul>
        <Route path={"/login"} component={Login}/>
       <Route path={"/register"} component={Register}/>
        

      </Router>
      );
    }
  }
  
 export default Blog