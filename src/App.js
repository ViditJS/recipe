import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './component/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form/>
      </div>
    );
  }
}

export default App;
