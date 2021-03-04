
import React, { Component } from 'react';
import 'react-dom';
import './App.css';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Header from './components/Header'
import About from './components/BayPark'
import BayPark from './components/BayPark'
import SleepingBeauty from './components/SleepingBeauty'
import Met from './components/Met'
import Coney from './components/Coney'
import Mjlove from './components/Mjlove'
import Weight from './components/Weight'
import Contact from './components/Contact'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
class App extends Component {
    
render(){
  return (
    
    <div className="App">
    <Header></Header>
     
     
    
    <Router>
     <Switch>
     <Route exact path="/">
       <Home />
     </Route>
     <Route exact path="/sleepingbeauty">
       <SleepingBeauty />
       </Route>
     <Route exact path="/baypark">
       <BayPark />
       </Route>
       <Route exact path="/marbleeyetanner">
       <Met />
       </Route>
       <Route exact path="/coneylostlove">
       <Coney />
       </Route>
       <Route exact path="/weight">
       <Weight />
     </Route>
     <Route exact path="/mjlove">
       <Mjlove />
     </Route>
     <Route exact path="/about">
       <About />
     </Route>
     <Route exact path="/contact">
       <Contact />
     </Route>
     
   </Switch>
</Router>
</div>

  );
}
  
}


export default App;
