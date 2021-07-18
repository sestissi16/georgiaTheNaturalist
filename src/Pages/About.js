import React , { Component } from 'react'
import Navigation from '../Components/navigation'
import Footer from '../Components/footer'
import flowerDivider from '../Media/blackFlowerDivider-Transparent-Cropped.png'
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
                    <header id="aboutHeader">
                        <h1 id="aboutTitle">About Georgia</h1>
                        <img src={flowerDivider} id="aboutFlowerDivider" alt="Flowery dividing line" />
                        <div id="aboutProfilePicDiv">
                            <img src={profilePic} id="aboutProfilePic" alt="Georgia on top of a plateau overlooking the water" />
                        </div>
                    </header>
                    <div id="aboutProfileTextDiv">
                        { aboutMe ? 
                            Object.keys(aboutMe).map((key, index) => {
                                var paragraphDetails = aboutMe[key]
                                var idName = "paragraph" + index.toString()
                                if(key === "paragraph3") {
                                    return <div id={idName} style={{width: "100%", height: "fit-content"}}>
                                        <h2 className="aboutParagraphTitle">
                                            {paragraphDetails.title}
                                        </h2>
                                        <p className="aboutProfileParagraph"> 
                                            {paragraphDetails.paragraph}
                                        </p>
                                    </div>
                                } else {
                                    return <div id={idName} style={{width: "100%", height: "fit-content"}}>
                                        <h2 className="aboutParagraphTitle">
                                            {paragraphDetails.title}
                                        </h2>
                                        <p className="aboutProfileParagraph"> 
                                            {paragraphDetails.paragraph}
                                        </p>
                                        {/* <img src={flowerDivider2} className="aboutParagraphDivider" alt="Different flowery dividing line" /> */}
                                    </div>
                                }
                                
                            }) 
                            : <p>About description coming soon</p>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;
