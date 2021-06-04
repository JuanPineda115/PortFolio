import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.sass';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Works from './components/pages/works/Works';
import About from './components/pages/about/About'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Works' component={Works} />
          <Route path='/Myself' exact component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
