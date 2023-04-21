import {useState, useRef, useEffect} from 'react';
import './CustomerForm.css';

function CustomerForm()
{    

    const inputRef = useRef(null);

    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [email, setEmail] = useState("");

    const [result, setResult] = useState("");

    const [errorsObj, setErrors] = useState({  
        uname  :  "",            
        password  :  "",            
        retypePassword  :  "",            
        email :  ""
    });


    // useEffect help us here to execute code while component loading
    useEffect( () =>  { inputRef.current.focus(); }, []);    
    
 

    function handleSubmit(event)
    {
        event.preventDefault();

        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


        let tempErrorObj = Object.assign({}, errorsObj);

        tempErrorObj.uname =  (uname.length == 0)? "User Name is required..!" : "";
        tempErrorObj.password =  (password.length < 8)? "Password required 8 chars..! " : "";
        tempErrorObj.email =  validEmailRegex.test(email)? '': 'Email is not valid!';
        tempErrorObj.retypePassword =  (password != retypePassword)? "Password and rettype password should be same..!" : "";

        setErrors(tempErrorObj);    //  to update state errorObj

        let valuesArray = Object.values(tempErrorObj);
        let index  = valuesArray.findIndex( item => item.length != 0 ); 


        if(index == -1)
        {
                // Logic to send this data to server using AJAX              
              setResult("Submit button clicked --- Form Data is Valid");              
        }
        else
        {           
         
           setResult("Submit button clicked --- Form Data is invalid");
        }

       
    }

    return (
        <>
           <h3>Data Entry Forms - Validations in React JS </h3>
            <hr/>

            

            <form onSubmit={handleSubmit}>	

            <fieldset>
                <legend>User Registration</legend>

            User Name  :  
            <input type="text"   ref={inputRef}  name="uname" onChange={(e) => setUname(e.target.value)}  />
            <span class="error">{errorsObj.uname}</span>
            <br/><br/>

            Password  :  <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}  />
            <span class="error">{errorsObj.password}</span>
            <br/><br/>

            Retype Password  :  <input type="password" name="retypepassword" onChange={(e) => setRetypePassword(e.target.value)}  />
            <span class="error">{errorsObj.retypePassword}</span>
            <br/><br/>

            E-mail  :  <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}  />
            <span class="error">{errorsObj.email}</span>
            <br/><br/>


	        <input type="submit" value="Register" /> 

            <h3>{result}</h3>

            </fieldset>
            </form>      

            
        </>
    );
}


export default  CustomerForm;