import React from 'react';  

export class Login extends React.Component {  

    constructor()
    {     
        super();     
        this.state = {uid: '', pwd : '', result : ''};  
        this.handleUserIdChange = this.handleUserIdChange.bind(this);  
        this.handlePasswordChange = this.handlePasswordChange.bind(this);  
        this.button_click = this.button_click.bind(this);  
    }  

    handleUserIdChange(event) {  
        this.setState({uid: event.target.value});  
    }  

    handlePasswordChange(event) {  
        this.setState({pwd: event.target.value});  
    } 

    button_click(event) {  
        if(this.state.uid === "admin" && this.state.pwd === "admin123") 
        {
            this.setState({result :  "Welcome to Admin"});
        }
        else{
            this.setState({result :  "Invalid user id or password"});
        }
        
    }  


  render() {  
    return <div>
            <h1>User Login </h1>  
            <label>  
                User Name:  
                <input id="t1" placeholder='User Id' type="text" value={this.state.uid} onChange={this.handleUserIdChange} />  
            </label>  
            <br/><br/>
            <label>  
                Password:  
                <input id="t2" placeholder='Password' type="password" value={this.state.pwd} onChange={this.handlePasswordChange} />  
            </label>  
            <br/><br/>
            <button id="b1" onClick={this.button_click}>Login</button>  
            <h3  id="result">{this.state.result}</h3>
         

    </div>
  }  
}  
 

export default Login;