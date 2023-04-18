import React from 'react';
import './DeptDetails.css';


// Child Component
class Demo  extends React.Component
{   
    constructor(props)
    {
       super( props ); 
       this.state =  {};
       this.deptRemove_child  = this.deptRemove_child.bind(this);
    } 


    deptRemove_child( )
    {        
        //  alert("Message from Child Component");
           let n = this.props.deptObj.deptno;  // Get current deptno
           this.props.onDeptRemoved( n );   // it inovkes the parent method
    }
    
   
	render() { 
      return (
            <div  id="div1">
                   <h3 style={{margin: "2px", color:"Red"}}> {this.props.deptObj.dname} </h3>
                    <u> Deptno : {this.props.deptObj.deptno} </u>  <br/>
                     Location : <span style={{color:"Green"}}> {this.props.deptObj.loc} </span>   <br/>       
                    <a href="javascript:void(0);"  onClick={this.deptRemove_child}>Remove</a> 
            </div> );
    }
}

export default Demo; 




