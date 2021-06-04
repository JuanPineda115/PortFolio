import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Works from './components/pages/Works';
import Technologies from './components/pages/Technologies';
import About from './components/pages/about/About'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Works' component={Works} />
          <Route path='/Technologies' component={Technologies} />
          <Route path='/Myself' component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
