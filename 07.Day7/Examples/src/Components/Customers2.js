import {useState, useEffect} from 'react';
import axios from 'axios';

function Customers()
{
    let  [customersArray,  setCustomers]   =  useState([]);
    let  [count,  setCount]   =  useState(0);

    alert("Hi");

    useEffect(() =>{
        let url  = "https://www.w3schools.com/angular/customers.php";
        axios.get(url).then( (resData)  =>  {             
           // setCustomers(resData.data.records);
        });

        console.log("useEffect callback is executed");
        
    }, []);

  
    function updateCount()
    {
        setCount(count + 1);
    }

    var result = customersArray.map( (item, index) => 
    <tr key={index}>  
       <td> {item.Name}  </td> 
       <td> {item.City}  </td> 
       <td> {item.Country}  </td> 
    </tr>);


    return (
        <div>
            <h1>Working with React Hooks</h1>
            <hr/>           
            <h3>Server Communication in React JS using Axios</h3>
            <hr/>
            <button onClick={updateCount}>Counter : {count}</button>
            <br/><br/>
            <table  border="2"    width="700">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>City Name</th>
                        <th>Country Name</th>                    
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>                
            </table>

        </div>
    );
}


export default  Customers;