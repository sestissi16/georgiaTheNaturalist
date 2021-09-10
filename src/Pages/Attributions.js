import React , { Component } from 'react'
import Navigation from '../Components/navigation'
import Footer from '../Components/footer'
import flowerDivider from '../Media/blackFlowerDivider-Transparent-Cropped.png'
import websiteInfo from '../websiteData'
import ImageCard from '../Components/imageCard'
import './Attributions.css'

class Attributions extends Component {
    render () {
        const { 
            attributions, 
            mainParagraph
        } = websiteInfo.attribution
        return (
            <div className="Attributions">
                <Navigation variant="light" />
                <div id="attributionsBg">
                    <header id="attributionsHeader">
                        <h1 id="attributionsTitle">Image Attributions</h1>
                        <img src={flowerDivider} id="attributionsFlowerDivider" alt="Flowery dividing line" />
                        <div id="attributionsMainInfo">
                            <p className="attributionsMainParagraph">
                                {mainParagraph}
                            </p>
                        </div>
                    </header>
                    <div id="attributionsCards">
                        {
                            Object.keys(attributions).map(function(key, index) {
                                var attribution = attributions[key]
                                return <ImageCard
                                    image={attribution.imageName}
                                    link={attribution.attributionLink}
                                    linkText={attribution.linkName}
                                />
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Attributions;
