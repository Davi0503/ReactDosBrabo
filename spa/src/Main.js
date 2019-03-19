import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Xambra";
import Contact from "./Contatin";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>SPA Teste</h1>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Xambra</NavLink></li>
            <li><NavLink to="/contact">Contatin</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;