import React from 'react';
import Home from './home/Home';
import Contact from './contact/Contact';
import {Switch, Route} from 'react-router';
import LavenderOil from "./lavenderOil/LavenderOil";

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/lavender-oil' component={LavenderOil}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
);
export default Main;