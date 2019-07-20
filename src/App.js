import React, { Component, Suspense } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {env, MailContext} from './config.js';

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
  
    <div>loading...</div>
  </div>
);

class App extends Component {
  render() {
    console.log(env);
    return (
      <Suspense fallback={Loader}>
        <div className="main">
        <Header />
        <MailContext.Provider value={env}>
          <Main />
        </MailContext.Provider>
      </div>
      </Suspense>
      
    );
  }
}

export default App;
