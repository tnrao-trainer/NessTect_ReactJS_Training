import { useEffect, useState } from "react";
import React from 'react';

function  Login()
{
    const [uid, setUid] =  useState("");
    const [pwd, setPwd] =  useState("");
    const [result, setResult] =  useState("");

     

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

                User Name  :  <input type="text"  onChange={ (e) =>  setUid(e.target.value) }  />
                <br/><br/>

                Password  :  
                <input type="password"  onChange={ (e) => setPwd(e.target.value) }     />
                <br/><br/>
            
                <input type="button"  onClick={loginButton_click}  value="Login"    />

                <p>{result}</p>

            </fieldset>
        </>
    );
}

export default Login;