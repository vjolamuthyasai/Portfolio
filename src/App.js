import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preloader from '../src/components/Pre';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/ResumeNew';
import './style.css';

import ScrollToTop from './components/ScrollToTop';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
