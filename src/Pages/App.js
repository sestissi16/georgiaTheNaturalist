import React, { Fragment } from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Programming from '../Pages/Programming'
import Photos from '../Pages/Photos'
import './App.css';

function App() {
    
  return (
    <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
            <Fragment>
                <Route exact path="/" component={Home} />
                <Route exact path="/AboutMe" component={About} />
                <Route exact path="/Programming" component={Programming} />
                <Route exact path="/Photos" component={Photos} />
            </Fragment>
        </Router>
    </div>
  );
}

export default App;
