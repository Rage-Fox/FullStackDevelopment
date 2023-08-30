import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './about';
import { trainee,a } from './person';
// {trainee} is a named-export format
function App() {
  console.log(trainee);
  console.log(a);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Calling the Home component using ReactJS */}
        <Home />
        {/* Now we are trying to pass arguments inside particular components */}
        <About name={a}/>
      </header>
    </div>
  );
}

export default App;
