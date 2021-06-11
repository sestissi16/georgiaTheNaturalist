import logo from './Media/logo_smallerSize_georgiaTheNaturalist.jpg';
import './App.css';
import grass from './Media/grassblowinggif.mp4'
import grassPic from './Media/grassblowinggif_Moment.jpg'
// import Navigation from './navigation'

function App() {
  return (
    <div className="App">
        <header className="App-header">
            {/* <Navigation /> */}
            <div className="container">
                <video className='videoTag' autoPlay loop muted>
                    <source src={grass} type='video/mp4' />
                    <img src={grassPic} alt="grassy field on a cloudy day" />
                </video>
            </div>
            <div className="content">
                <div className="subContent">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        </header>
    </div>
  );
}

export default App;
