import React , { Component } from 'react'
import Navigation from '../Components/navigation'
import flowerDivider from '../Media/blackFlowerDivider-Transparent-Cropped.png'
import websiteInfo from '../websiteData'
import ProgramCard from '../Components/programCard'
import './Programming.css';

class Programming extends Component {
    render () {
        const { 
            mainParagraph,
            lastParagraph,
            programmingOptions
        } = websiteInfo.programming
        return (
            <div className="Programming">
                <Navigation variant="light" />
                <div id="programmingBg">
                    <header id="programmingHeader">
                        <h1 id="programmingTitle">Programming</h1>
                        <img src={flowerDivider} id="programmingFlowerDivider" alt="Flowery dividing line" />
                        <div id="programmingMainInfo">
                            <p className="programmingMainParagraph">
                                {mainParagraph}
                            </p>
                        </div>
                    </header>
                    <div id="programmingCards">
                        {
                            Object.keys(programmingOptions).map(function(key, index) {
                                var program = programmingOptions[key]
                                return <ProgramCard
                                    title={program.title}
                                    details={program.details}
                                    notes={program.notes}
                                    icon={program.icon}
                                    alt={program.alt}
                                />
                            })
                        }
                    </div>
                    <div id="programmingLastInfo">
                        {lastParagraph}
                    </div>
                </div>
            </div>
        );
    }
}

export default Programming;
