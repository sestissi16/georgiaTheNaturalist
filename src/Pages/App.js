import React, { Fragment } from "react";
import { Route, HashRouter as Router } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Programming from '../Pages/Programming'
import Photos from '../Pages/Photos'
import Pricing from '../Pages/Pricing'
import Contact from '../Pages/Contact'
import Attributions from '../Pages/Attributions'
import './App.css';

function App() {
    
  return (
    <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
            <Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/AboutMe" component={About} />
                <Route path="/Programming" component={Programming} />
                <Route path="/Photos" component={Photos} />
                <Route path="/Pricing" component={Pricing} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Attributions" component={Attributions} />
            </Fragment>
        </Router>
    </div>
  );
}

export default App;
