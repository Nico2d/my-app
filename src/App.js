import React, { Component } from 'react';
import './App.css';
import GetGithubInfoContainer from './containers/GetGithubInfo.container'
import GithubInfoContainer from './containers/GithubInfo.container'

class App extends Component {

  render() {
    return (
      <div className="App">
        <GetGithubInfoContainer />
        <GithubInfoContainer />
      </div>
    );
  }
}

export default App;
