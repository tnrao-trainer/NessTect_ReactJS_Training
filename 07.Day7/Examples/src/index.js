import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 

import {BrowserRouter as Router, Link, Routes, Route, Outlet   } from 'react-router-dom';

import App from './App';
import Emps from './Components/Emps';
import About from './Components/About';
import Contact from './Components/Contact';
import Depts from './Components/Depts';
import NotFound from './Components/NotFound';
import Details from './Components/Details';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';

const routing = (
  <Router>
      <h3 style={{textAlign:"center"}} >Routing Implementation in React Applications</h3>
      <hr/>
      <div style={{textAlign:"center"}} >
          <Link  to="/">Home</Link> | 
          <Link  to="/Emps">Employees</Link> |
          <Link  to="/Depts">Departments</Link> |
          <Link  to="/Contact">Contact Us</Link> |
          <Link  to="/About">About Us</Link> |
          <Link  to="/Hello">Invalid</Link> |
          <Link  to="/Admin">Admin</Link> |
          <Link  to="/Login">Login</Link> |
      </div>
      <hr/>

      <Routes>
          <Route path="/"  element={ <App /> }  />
          
          <Route path="/Emps"  element={
                <ProtectedRoute  returnUrl="/Emps">
                    <Emps />
                </ProtectedRoute>
            } />
         
         <Route path="/Depts"  element={
                <ProtectedRoute  returnUrl="/Depts">
                    <Depts />
                </ProtectedRoute>
            } />

          <Route path="/Contact"  element={ <Contact /> }  />
          <Route path="/About"  element={ <About /> }  />
          <Route path="/Login"  element={ <Login /> }  />

          <Route path="/Details/:id"  element={ <Details /> }  />
          <Route path="*"  element={ <NotFound /> }  />

          <Route path="/Admin" element= { <Admin />  }>
                  <Route index  element= { <AdminHome />  }  />
                  <Route path="Projects" element= { <Projects />  }  />
                  <Route path="Customers" element= { <Customers />  }  />
          </Route> 


      </Routes>

  </Router>
);
 
 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  routing
);


 
/* Admin related components are mentioned below */ 
function  Admin()
{
  return (
    <div style={{border:"2px solid blue", margin : "20px", padding: "20px", backgroundColor : "LightYellow"}}>
          <h3>This is Admin Component</h3>
          <Link    to="">AdminHome</Link>  |
          <Link    to="Projects">Projects</Link>  |
          <Link    to="Customers">Customers</Link>  |
          <br/><br/>
          <div style={ {padding : "50px", backgroundColor : "lightpink"} }>
              <Outlet />
          </div>
    </div>
  );
}

function  Projects()
{
  return (
    <div>
      <h3>This is Projects Component</h3>
    </div>
  );
}


function  Customers()
{
  return (
    <div>
      <h3>This is Customers Component</h3>
    </div>
  );
}

function  AdminHome()
{
  return (
    <div>
      <h3>This is Admin Home Content</h3>
    </div>
  );
}

