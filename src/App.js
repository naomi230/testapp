import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My To-Do List App</h1>
        <p>
          This is a simple to-do list application built with React.
        </p>
        <a
          className="App-link"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
