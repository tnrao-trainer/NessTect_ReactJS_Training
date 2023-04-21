import axios from 'axios';

let  dataServiceObj =  {};

let url  = "http://localhost:3500/depts/";

dataServiceObj.getAllDepts = function()
{  
    return  axios.get(url);
};

dataServiceObj.getDeptByDeptno = function(dno)
{ 
    return  axios.get(url + dno);
};

dataServiceObj.addDept = function(deptObj)
{ 
    return  axios.post(url, deptObj);
};

dataServiceObj.updateDept = function(deptObj)
{ 
    return  axios.put(url + deptObj.deptno, deptObj);
};

dataServiceObj.deleteDept = function(dno)
{ 
    return  axios.delete(url + dno);
};


export default dataServiceObj;