import './App.css';
import { useState } from 'react';
import {MyContext} from './Context';
import AddUsers from './AddUsers';
import DisplayUsers from './DisplayUser';
    // app --> parent and Addusers and DisplayUsers are child for App 
function App() {
  
      let [users,setUsers]=useState([]);    // state variable 

  function dispatchUser(actionType,payload){    // function          
      if(actionType==="ADD"){
          setUsers([...users,payload.newUser])      // append new user data in array value. without losing previous data 
          alert("Data Added....")
      }
  }
  return (
    <MyContext.Provider value={{users,dispatchUser}}>    
    <div className="App">

      <AddUsers></AddUsers>
      <DisplayUsers></DisplayUsers>
    </div>
    </MyContext.Provider>
  );
}

export default App;
