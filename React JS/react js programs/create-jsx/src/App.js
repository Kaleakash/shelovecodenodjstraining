import React, { useState } from 'react';

function WithoutJSX() {

  return React.createElement("div",{id:"abc"},"This is react without JSX");
}

function WithJSX() {

  return <div id="abc">This is react withh JSX</div>
}

const myListInfo = (
  <ul>
    <li>Raj</li>
    <li>Ravi</li>
    <li>Ramesh</li>
    <li>Rajesh</li>
  </ul>
)
function MyList() {

  return myListInfo;
}

function JsxOperation() {
  return(
    <div>
      <p>Add of two number is {10+20}</p>
      <p>Sub of two number is {10-20}</p>
      <p>Mul of two number is {100*5}</p>
      <p>Div of two number is {200/100}</p>
    </div>
  )

}
function Message() {
  return <div>Welcome</div>
}
function Hello() {
  return <div>Hello</div>
}
function Hi() {
  return <div>Hi</div>
}
function ConditionalJJSX() {
  let age = useState(21);
  let result = useState(true);
  return(
    <div>
    <p>{age > 18 || <Message></Message>}</p>
    <p>{ !result ?<Hello></Hello>:<Hi></Hi>}</p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <h2>React JSX Example</h2>
      <WithoutJSX></WithoutJSX>
      <WithJSX></WithJSX>  
      <MyList></MyList>
      <JsxOperation></JsxOperation>  
      <ConditionalJJSX></ConditionalJJSX>  
    </div>
  );
}

export default App;
