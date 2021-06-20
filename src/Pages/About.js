import React , { Component } from 'react'
import Navigation from '../Components/navigation'
import flowerDivider from '../Media/blackFlowerDivider-Transparent-Cropped.png'
import flowerDivider2 from '../Media/blackFlowerThinDivider2-FullLine-Transparent.png'
import profilePic from '../Media/Maine_AboutMePage_Cropped.jpg'
import websiteInfo from '../websiteData'
import './About.css';

class About extends Component {
    render () {
        const { aboutMe } = websiteInfo
        return (
            <div className="About">
                <Navigation variant="light" />
                <div id="aboutContent">
                    <div id="aboutMainDiv">
                        <header className="aboutHeader">
                            <h1 id="aboutTitle">About Georgia</h1>
                            <img src={flowerDivider} id="aboutFlowerDivider" alt="Flowery dividing line" />
                        </header>
                        <div id="aboutProfilePicDiv">
                            <img src={profilePic} id="aboutProfilePic" alt="Georgia on top of a plateau overlooking the water" />
                        </div>
                        <div id="aboutProfileTextDiv">
                            { aboutMe ? 
                                Object.keys(aboutMe).map((key, index) => {
                                    var aboutParagraph = aboutMe[key]
                                    if(key === "paragraph3") {
                                        return <p className="aboutProfileParagraph"> 
                                            {aboutParagraph}
                                        </p>
                                    } else {
                                        return <div style={{width: "100%", height: "fit-content"}}>
                                            <p className="aboutProfileParagraph"> 
                                                {aboutParagraph}
                                            </p>
                                            <img src={flowerDivider2} className="aboutParagraphDivider" alt="Different flowery dividing line" />
                                        </div>
                                    }
                                    
                                }) 
                                : <p>About description coming soon</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
