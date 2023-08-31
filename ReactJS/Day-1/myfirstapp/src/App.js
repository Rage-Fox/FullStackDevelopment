import logo from './logo.svg';
import './App.css';// External CSS file importing
import Home from './home';
import About from './about';// This is a Default export
import Service from './services';
import Contact from './contact';
import { trainee,a } from './person';
// {trainee} is a named-export format
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from './menu';
import Student from './student';
import Trainees from './trainees';
function App() {
  return (
    <div className="App">
      {/* In ReactJS, instead of "class", we have to use "className" */}
      <Home />
      <About />
      <Service />
      <Contact />
      {/* This part makes url to each and every page individually */}
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          {/* Passing a value as an argument from the component itself */}
          <Route path="/student" element={<Student name="Harsha" rollno="21A91A05G6" clg="AEC" branch="CSE" />} />
          <Route path="/trainees" element={<Trainees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
