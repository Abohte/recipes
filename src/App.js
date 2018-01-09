import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div>
        <Title content="All Recipes" />
      </div>
    );
  }
}

export default App;
