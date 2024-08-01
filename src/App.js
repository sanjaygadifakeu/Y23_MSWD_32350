import React from 'react';
import './App.css';
import kl_logo from './kllogo.jpg';
import student from './student.jpg';
import faculty from './faculty.jpg';
import cafeteria from './cafeteria.png';
import library from './library.png';
import transport from './transport.png';
import Header from './components/Header';
import Footer from './components/Footer';
import Faculty from './components/Faculty';
import Students from './components/Students';
import Courses from './components/Courses';
import User from './components/User';

const user = {
  logo: kl_logo,
};

function App() {
  return (
    <div className="App">
      
      <Header/>
      <img src={user.logo} alt="KL University Logo" />
      <h2>Faculty Details</h2>
      <Faculty />
      <h2>Student Details</h2>

      <Students />
      <h2>Course Details</h2>
      <Courses />
      
      <User name="Sanjay" type ="Guest"/>
      <User name="Sanjay" type ="Guest"/>
      <User name="Sanjay" type ="Guest"/>
      
      
      <div className="images">
        <img src={student} alt="Student" />
        <img src={faculty} alt="Faculty" />
        <img src={cafeteria} alt="Cafeteria" />
        <img src={library} alt="Library" />
        <img src={transport} alt="Transport" />
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
