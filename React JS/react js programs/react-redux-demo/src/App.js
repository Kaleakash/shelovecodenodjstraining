import './App.css';
import { useSelector } from 'react-redux';
import Child1 from './Child1';
import Increment from './Increment';
import Decrement from './Decrement';

function App() {
  let appCounter = useSelector(globalstate=>globalstate.counter)
  return (
    <div className="App">
      <h2>React with Simple Redux Example</h2>
      <p>Gobal State variable value is {appCounter}</p>
      <Child1></Child1>
      <Increment></Increment>
      <Decrement></Decrement>
    </div>
  );
}

export default App;
