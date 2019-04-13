import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';



class App extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <Header />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
