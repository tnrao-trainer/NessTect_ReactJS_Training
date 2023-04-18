import React from 'react';
import DeptDetails from './DeptDetails';

// Parent Component
class DeptList  extends React.Component
{   
    constructor()
    {
      super();
      this.state =  
       {         
        depts : [
          {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
          {deptno : 20, dname : "Sales",  loc :  "Pune"},
          {deptno : 30, dname : "Marketing",  loc :  "Hyd"},
          {deptno : 40, dname : "Operations",  loc :  "Chnnai"},
          {deptno : 50, dname : "Admin",  loc :  "Pune"},
          {deptno : 60, dname : "Finance",  loc :  "Hyd"},
          {deptno : 70, dname : "Testing",  loc :  "Mumbai"},
          {deptno : 80, dname : "Advertise",  loc :  "Goa"}
         ]
       };

       this.deptRemove_parent  = this.deptRemove_parent.bind(this);
    } 


    deptRemove_parent( dno )
    {

       // alert("Message from Parent Component.  Deptno : " + dno);

       
        let depts = this.state.depts;
        let index = depts.findIndex( item => item.deptno == dno);        
        depts.splice(index, 1);
        this.setState({  depts });  

      
    }


    render()
    {

      var result =  this.state.depts.map ( item =>        
                      <DeptDetails  onDeptRemoved={this.deptRemove_parent}  deptObj={item} />
                    );

      return (
        <div style={{marginLeft:"5%", marginRight : "5%", width:"90%"}}>
              <h3 align="center">Parent - Child Communication in React Applications </h3>
              <hr/>
              {result}              
         </div>  
        );
    }
}

export default DeptList;
