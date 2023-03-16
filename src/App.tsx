import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "@cloudscape-design/components/box";

function App() {
  return (
    <div className="App">
      <Box variant="p">      My Cloudscape Box
      </Box>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
