import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {env, MailContext} from './config.js';

class App extends Component {
  render() {
    console.log(env);
    return (
      <div className="main">
        <Header />
        <MailContext.Provider value={env}>
          <Main />
        </MailContext.Provider>
      </div>
    );
  }
}

export default App;
