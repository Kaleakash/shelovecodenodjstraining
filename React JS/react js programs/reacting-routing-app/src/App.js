
import './App.css';
import {Link, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Feedback from './Feedback';
import Login from './Login';
import AdminHome from './AdminHome';
import StudentHome from './StudentHome';
import AddStudent from './AddStudent';
import ViewStudent from './ViewStudent';
function App() {
  return (
    <div className="App">
    <h2 className='myClass'>React Routing Example</h2> 
    <Link to="/aboutus">About Us</Link> |
    <Link to="/contactus">Contact Us</Link> |
    <Link to="/feedback">Feedback</Link> |
    <Link to="/login">Login</Link>

    <Routes>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
      <Route path='/contactus' element={<ContactUs/>}></Route>
      <Route path='/feedback' element={<Feedback/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/adminhome' element={<AdminHome/>}></Route>
      <Route path='/studenthome' element={<StudentHome/>}></Route>
      <Route path='/adminHome/addStudent' element={<AddStudent/>}></Route>
      <Route path='/adminHome/viewStudent' element={<ViewStudent/>}></Route>

    </Routes>
    </div>
  );
}

export default App;
