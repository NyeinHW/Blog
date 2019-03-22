import React from 'react';
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userName: '',
            email:'',
            password:'',
            userArray:[]
        }
    }
    handleOnChangeName = (e) =>{
        this.setState({
          userName : e.target.value,
         }) 
        }
      handleOnChangeEmail = (e) =>{
        this.setState({
         email : e.target.value, 
        }) 
     }
     handleOnChangePassword= (e) =>{
        this.setState({
         password : e.target.value, 
        }) 
     }
     
   // window.localStorage.setItem('user', JSON.stringify(person));
     handleOnSubmit=()=>{
      const  person = {
            name: this.state.userName,
            email:this.state.email,
            password:this.state.password
        }
        this.userArray.push(person);
         localStorage.setItem('user',JSON.stringify(this.userArray));
         console.log(JSON.stringify(this.userArray));

     }

    render(){
        return(
          <React.Fragment>
              
                <h1>Please Enter Your Information</h1>
                <form onSubmit={this.handleOnSubmit}>
                <label>
                  User Name: <input value={this.state.userName} onChange={this.handleOnChangeName}></input>
             </label><br/>
             <label>
                    Email: <input type='email' value={this.state.email } onChange={this.handleOnChangeEmail}></input>
            </label><br/>
            <label>
                Password: <input type='password' value={this.state.password } onChange={this.handleOnChangePassword}></input>
            </label><br/>
                    <button type='submit'>Enter</button>
                </form>
         </React.Fragment>
        )
    }
}
export default Register