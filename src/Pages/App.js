// import logo from '../Media/georgiaTheNaturalistLogo.jpg';
// import grass from '../Media/grassblowinggif.mp4'
// import grassPic from '../Media/grassblowinggif_Moment.jpg'
// import Navigation from '../Components/navigation'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import './App.css';

function App() {
    
  return (
    <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
            <Route exact path="/" component={Home} />
            <Route exact path="/AboutMe" component={About} />
        </Router>
    </div>
  );
}

export default App;
