import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import  About  from '../pages/About';
import  Contact  from '../pages/Contact';
import  Home  from '../pages/Home';

const createRoutes = () => (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/Contact" component={Contact}/>
    </Router>
);


export default createRoutes;