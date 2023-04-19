import { useEffect, useState } from "react";
import React from 'react';

function  Customers()
{  
    let  [customersArray,  setCustomers]   =  useState([]);
    let  [count,  setCount]   =  useState(0);

    useEffect(() => 
    {
        //  code to load data from the server
        //  executes only once while loading the component 
        let data =  [
                    {"Name":"Alfreds","City":"Berlin","Country":"Germany"},
                    {"Name":"Ana Trujillo","City":"Thomas","Country":"Mexico"}, 
                    {"Name":"Antonio","City":"México D.F.","Country":"Mexico"}, 
                    {"Name":"Arnav","City":"London","Country":"UK"}, 
                    {"Name":"Suzuka","City":"London","Country":"UK"}
             ];
     
        setCustomers(data); 

        console.log("Content Loaded");

    }, []);
    

    // to handle updatecount button click
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
        <>
            <h3>Customers Details</h3>
            <hr/>

            <button onClick={updateCount}>Counter : {count}</button>
            <hr/>

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

            
        </>
    );
}

export default Customers;