import React from 'react';
class Login extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        username : '',
        password:''
      }
    }
  
    handleOnChange = (e) =>{
      this.setState({
        username : e.target.value
      })
    }
    handleOnChangePassword = (e) =>{
      this.setState({
        password : e.target.value
      })
    }
  
    handleOnSubmit = (e) =>{
      e.preventDefault();
      const name = this.state.username;
      const password=this.state.password;
      const name1 = localStorage.getItem( "user" ) ;
      console.log("Name is",name1);
     
     
    }
  
    render(){
        return (
          <React.Fragment>
          <h1>Login Page</h1>
          <form onSubmit = {this.handleOnSubmit}>
          <label>
            User Name: <input value={this.state.username} onChange={this.handleOnChange}></input>
          </label>
          <label>
            Password: <input type="password" value={this.state.password} onChange={this.handleOnChangePassword}></input>
          </label>
          <button type="submit">Login</button>
          </form>
          </React.Fragment>
      )
    }
    
  }
  export default Login