import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Layout/header'
import Content from './Layout/content'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={'WOWSERS'}/>
        <p className="App-intro">
          To get started, editer <code>src/App.js</code> and save to reload.
        </p>
          <Content/>
      </div>
    );
  }
}

export default App;
