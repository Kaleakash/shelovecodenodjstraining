// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

function Header() {

  return <h1>This is my header component</h1>
}

function EmployeeInfo() {
  let id=100;
  let name = "Ravi";
  let age = 21;     // local variable 
  return(
    <div>
      <p>Id is {id} Name is {name} Age is {age}</p>
    </div>
  )
}

function Product(props){

  return(<div>
      <h2>This is Product Component</h2>
      <img src={props.pimg} width="200" height="200"/>
      <p>Product Name is {props.name} Price {props.price}</p>
    </div>)
}
export default function App() {

    return(
  <div>
          <Header></Header>
          <EmployeeInfo></EmployeeInfo>
          <EmployeeInfo></EmployeeInfo>
            <Product name="TV" price="56000" pimg="https://images.samsung.com/is/image/samsung/p6pim/in/ua58aue70aklxl/gallery/in-uhd-4k-tv-ua58aue70aklxl-samsung-uhd-au-----is-hanging-on-the-wall-showing-picture-with-purcolor-436266827?$730_584_PNG$"></Product>
            <Product name="Computer" price="35000"></Product>
            <Product name="PenDrive" price="1200"></Product>
            <Product name="Mobile" price="45000"></Product>
            <Product name="Hard Disk" price="7000"></Product>
  <h2>Welcome to React JS Application</h2>
  <p>This is my first component</p>
    <b>This is simple <br/>web page</b>
  </div>
    ) 

}




