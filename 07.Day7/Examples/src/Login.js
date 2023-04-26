import React from 'react';  

export class Login extends React.Component {  

    constructor(props)
    {     
        super(props);     
       
        this.state = {uid: '', pwd : '', result : ''};  
        this.handleUserIdChange = this.handleUserIdChange.bind(this);  
        this.handlePasswordChange = this.handlePasswordChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);  
    }  

    handleUserIdChange(event) {  
        this.setState({uid: event.target.value});  
    }  

    handlePasswordChange(event) {  
        this.setState({pwd: event.target.value});  
    } 

    handleSubmit(event) {  
        if(this.state.uid === "admin" && this.state.pwd === "admin123") 
        {
            sessionStorage.setItem('user-token', this.state.uid);
            let url = "/";
            if(window.location.search != "")
            {
                url =  window.location.search.replace("?returnUrl=",'');
            }
            window.location.replace(url);
        }
        else{
            this.setState({result :  "Invalid user id or password"});
            sessionStorage.removeItem('user-token');
        }
        event.preventDefault();  
    }  


  render() {  
    return <div>
      

        <form onSubmit={this.handleSubmit}>  
            <h1>User Login </h1>  
            <label>  
                User Name:  
                <input type="text" value={this.state.uid} onChange={this.handleUserIdChange} />  
            </label>  
            <br/><br/>
            <label>  
                Password:  
                <input type="password" value={this.state.pwd} onChange={this.handlePasswordChange} />  
            </label>  
            <br/><br/>
            <input type="submit" value="Submit" />  
            <h3>{this.state.result}</h3>
         </form>  

    </div>
  }  
}  
 

export default Login;