import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './routes/home/index';
import User from './routes/user/index';
import Detail from './routes/detail/index';
import Seat from './routes/seat/index';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/user" exact component={User} />
         <Route path="/detail" exact component={Detail} />
         <Route path="/seat" exact component={Seat} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
