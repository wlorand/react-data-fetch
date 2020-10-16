import React, { Component } from 'react';

// styles
import './app.css';

// image
import logo from './logo.svg';

// import local components
import HackerNews from './components/HackerNews';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Fetch Hacker News App</h1>
        </header>
        <HackerNews />
      </div>
    );
  }
}

export default App;
