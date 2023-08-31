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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
