import React, { Component, Suspense } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {env, MailContext} from './config.js';
import { CookieBanner } from '@palmabit/react-cookie-law';

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
  
    <div>loading...</div>
  </div>
);

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loader/>}>
        <div className="main">
        <Header />
        <MailContext.Provider value={env}>
          <Main />
          <CookieBanner
            message="This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy.

            If you decline, your information won’t be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked."
            onAccept = {() => {}}
            showPreferencesOption	= {false}
            showStatisticsOption = {false}
            showMarketingOption	= {false}
          />

        </MailContext.Provider>
      </div>
      </Suspense>
      
    );
  }
}

export default App;
