import React, { Component } from 'react';
import Header from './containers/base/Header';
import MainPage from './components/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage/>
        <Header />
      </div>
    );
  }
}

export default App;
