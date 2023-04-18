import logo from './logo.svg';
import './App.css';
import Emps from './Emp';

function App() {

  let uname  = "Scott";

  return (
    <div>
       
      <h3>State Management in Class Components</h3>
      <hr/>

      <Emps deptno="30" />
       
    </div>
  );
}

export default App;
