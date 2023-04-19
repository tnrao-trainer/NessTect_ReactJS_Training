import { useState } from "react";
import React from 'react';

function  Login()
{
    const [uid, setUid] =  useState("");
    const [pwd, setPwd] =  useState("");
    const [result, setResult] =  useState("");

    function handleUidChange(event)
    {
        // alert(event.target.value);   
        setUid(event.target.value);
    }

    function handlePwdChange(event)
    {
        // alert(event.target.value);   
        setPwd(event.target.value);
    }

    function loginButton_click()
    {
       if(uid == "admin" &&  pwd == "admin123")
       {
        setResult("Welcome to Admin");
       }
       else
       {
        setResult("Invalid user id or password");
       }
    }

    return (
        <>
            <fieldset>
                <legend>User Login</legend>

                User Name  :  <input type="text"  onChange={handleUidChange}  />
                <br/><br/>

                Password  :  
                <input type="password"  onChange={handlePwdChange}    />
                <br/><br/>
            
                <input type="button"  onClick={loginButton_click}  value="Login"    />

                <p>{result}</p>

            </fieldset>
        </>
    );
}

export default Login;