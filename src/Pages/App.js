import React, { Fragment } from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Programming from '../Pages/Programming'
import Photos from '../Pages/Photos'
import Pricing from '../Pages/Pricing'
import Contact from '../Pages/Contact'
import Feedback from '../Pages/Feedback'
import Attributions from '../Pages/Attributions'
import './App.css';

function App() {
     
  return (
    <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
        {/* <Router basename="/georgiaTheNaturalist/" > */}
            <Fragment>
                <Route exact path="/" component={Home} />
                <Route exact path="/AboutMe" component={About} />
                <Route exact path="/Programming" component={Programming} />
                <Route exact path="/Photos" component={Photos} />
                <Route exact path="/Pricing" component={Pricing} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Feedback" component={Feedback} />
                <Route exact path="/Attributions" component={Attributions} />
            </Fragment>
        </Router>
    </div>
  );
}

export default App;
