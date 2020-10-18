import React, { Component } from 'react';

// styles
import './app.css';

// image
import logo from './logo.svg';

// child components
// import HackerNews from './components/HackerNews';
import FetchNews from './components/FetchNews';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Fetch Hacker News App</h1>
        </header>
        {/* <HackerNews /> */}
        <FetchNews />
      </div>
    );
  }
}

export default App;
