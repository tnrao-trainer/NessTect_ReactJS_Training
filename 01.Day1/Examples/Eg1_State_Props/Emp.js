import React, { Component } from 'react';

class Emps extends Component 
{  
  constructor(props)
  {
    super(props);       
    this.state =  { empsArray : [] };

     this.state.empsArray = 
     [
        {empno : 101, ename  : "Scott",  deptno : 10},
        {empno : 102, ename  : "Smith",  deptno : 20},
        {empno : 103, ename  : "Sandy",  deptno : 10},
        {empno : 104, ename  : "Sam",  deptno : 30},
        {empno : 105, ename  : "Sreeman",  deptno : 20},
        {empno : 106, ename  : "Sowmya",  deptno : 30}
    ];
    
      this.button1_click = this.button1_click.bind(this);         
    }

    button1_click()
    {
        let obj =  {empno : 107, ename  : "Soujanya",  deptno : 10};

      //  this.state.empsArray.push(obj);
      //  this.setState({ empsArray : this.state.empsArray  }); 


       let tempArray = this.state.empsArray;
       tempArray.push(obj);
       this.setState({ empsArray : tempArray }); 
    }

  render() 
  {  
    var  filterdArray = this.state.empsArray;

    if(this.props.deptno != undefined)
    {
        filterdArray = this.state.empsArray.filter( item => item.deptno == this.props.deptno );
    }
      
    var resultArray = filterdArray.map( item =>  
      <tr>
        <td>{item.empno}</td>
        <td>{item.ename}</td>
        <td>{item.deptno}</td>
      </tr>);

    return (
      <div> 

        
        <table border="2" width="400" cellSpacing="0" cellpadding="4">
          <tr>
            <th>Emp Number</th>
            <th>Emp Name</th>
            <th>Deptno</th>
          </tr> 


        {resultArray}

        {resultArray.length == 0 && <tr>
            <td colspan="3" align="center"> 
            **Employee Details are not available.  
            </td>
        </tr>}

        </table>
        <br/>
        <input type="button" id="button1" onClick={this.button1_click} value="Add Emp"  />

      </div>
    );
  }
}

export default Emps;

 


