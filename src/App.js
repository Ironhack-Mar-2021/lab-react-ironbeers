import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Allbeers from './Components/Allbeers';
import Randombeer from './Components/Randombeer';
import Newbeer from './Components/Newbeer';




import './App.css';

function App() {
  return (
    <div className="App">



      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Allbeers" component={Allbeers} />
        <Route exact path="/Randombeer" component={Randombeer} />
        <Route exact path="/Newbeer" component={Newbeer} />
      </Switch>
    </div>
  );
}

export default App;
