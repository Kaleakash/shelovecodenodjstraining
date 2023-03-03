import logo from './logo.svg';
import './App.css';
import EmployeeRetrieve from './EmployeeRetrieve';
import EmployeeStore from './EmployeeStore';
import FindEmloyeeDetails from './FindEmployeeDetails';
import DeleteEmployeeRecord from './DeleteEmployeeRecord';

function App() {
  return (
    <div className="App">
      <h2>Employee Rest API</h2>
      {/* <EmployeeRetrieve></EmployeeRetrieve> */}
      {/* <EmployeeStore></EmployeeStore> */}
      {/* <FindEmloyeeDetails></FindEmloyeeDetails> */}
      <DeleteEmployeeRecord></DeleteEmployeeRecord>
    </div>
  );
}

export default App;
