import logo from './logo.svg';
import './App.css';
import EmployeeRetrieve from './EmployeeRetrieve';
import EmployeeStore from './EmployeeStore';

function App() {
  return (
    <div className="App">
      <h2>Employee Rest API</h2>
      {/* <EmployeeRetrieve></EmployeeRetrieve> */}
      <EmployeeStore></EmployeeStore>
    </div>
  );
}

export default App;
