import logo from '../Media/georgiaTheNaturalistLogo.jpg';
import grass from '../Media/grassblowinggif.mp4'
import grassPic from '../Media/grassblowinggif_Moment.jpg'
import Navigation from '../Components/navigation'
import './Home.css';

function Home() {
    
  return (
    <div className="Home">
        <header className="homeHeader">
            <div className="homeContainer">
                <video className='homeVideoTag' autoPlay loop muted>
                    <source src={grass} type='video/mp4' />
                    <img src={grassPic} alt="grassy field on a cloudy day" />
                </video>
            </div>
            <div className="homeContent">
                <Navigation variant="light" />
                <div className="homeSubContent">
                    <img src={logo} className="homeLogo" alt="georgia the naturalist logo of hand with a snake coiled around it" />   
                </div>
            </div>
        </header>
    </div>
  );
}

export default Home;
