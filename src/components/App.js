import React, { Component } from 'react';
import logo from './../logo.svg';
import './../styles/App.css';

// component imports
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';
import NavBar from './NavBar.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayList />
        <PlayListForm />
      </div>
    );
  }
}

export default App;
