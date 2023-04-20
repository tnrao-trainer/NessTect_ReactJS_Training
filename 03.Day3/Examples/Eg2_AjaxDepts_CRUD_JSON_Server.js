import { useState } from "react";
import axios from 'axios';

function AjaxDepts() {

    let [deptsArray, setDepts] = useState([]);

    const [deptno, setDeptno] = useState("");
    const [dname, setDname] = useState("");
    const [loc, setLoc] = useState("");

    let url  = "http://localhost:3500/depts/";


   
  // GET :  Read All Items 
  function getDataClick()
  {
    axios.get(url).then( (response) =>  
    {
       setDepts(response.data);
    });
  }

  // POST :  Create new dept  
  function addDept()
  { 
    // Create new deptobject by reading textbox values 
    let deptObj = {};
    deptObj.deptno =  deptno;    
    deptObj.dname =  dname;    
    deptObj.loc =  loc;    

    axios.post(url, deptObj).then( (response) =>  
    {
      alert("New Dept is added to database");
      getDataClick();
    });
  }

// DELETE :  delete the given dept 
  function deleteDept(dno)
  {
    //   http://localost:3500/depts/10

   //  alert(dno);

    axios.delete(url + dno).then( (response) =>  
    {
        alert("Requested Dept is deleted from database");
        getDataClick();
    });
  }

  function selectDept(dno)
  { 
    axios.get(url + dno).then( (response) =>  
    {
      let deptObj = response.data;        
      setDeptno(deptObj.deptno);
      setDname(deptObj.dname);
      setLoc(deptObj.loc);
    });
  }



   // PUT :  update  dept  
   function updateDept()
   { 
     // Create new deptobject by reading textbox values 
     let deptObj = {};
     deptObj.deptno =  deptno;    
     deptObj.dname =  dname;      
     deptObj.loc =  loc;    

   
 
     axios.put(url + deptObj.deptno, deptObj).then( (response) =>  
     {
       alert("Requested Dept details are updated in database");
       getDataClick();
     });
   }

   

  let resultsArray  = deptsArray.map( item =>  
    <tr>
      <td>  {item.deptno} </td>
      <td>  {item.dname} </td>
      <td>  {item.loc} </td> 
      <td>
        <a href="#" onClick={ () => deleteDept(item.deptno) }>Delete</a> |
        <a href="#" onClick={ () => selectDept(item.deptno) }>Select</a>
      </td>
    </tr>);
 
 
 
  
  
    return (
       <div> 
             <h3>CRUD Operations on JSON Server - using Axios</h3>
             <hr/>

             <input type="text" value={deptno} placeholder="Deptno"  
            onChange={(event) => setDeptno(event.target.value)}   />

            <input type="text" value={dname} placeholder="Dname"  
            onChange={(event) => setDname(event.target.value)}   />

            <input type="text" value={loc} placeholder="Loc"  
            onChange={(event) => setLoc(event.target.value)}   />
            <br/><br/>  
 
            <button  onClick={getDataClick}>Get All Depts</button>
            <button  onClick={addDept}>Add Dept</button>
            <button  onClick={updateDept}>Update Dept</button>
            <br/><br/>
            <table border="2"> 
                <tr>
                   <th>Dept Number</th>
                   <th>Dept Name</th>
                   <th>Dept Loc</th>   
                   <th></th>                   
               </tr> 

                {resultsArray}  
            </table> 

            
      </div>
    );
  }
  
  export default AjaxDepts;

 