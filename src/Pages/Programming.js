import React , { Component } from 'react'
import Navigation from '../Components/navigation'
import flowerDivider from '../Media/blackFlowerDivider-Transparent-Cropped.png'
import flowerDivider2 from '../Media/blackFlowerThinDivider2-FullLine-Transparent.png'
import websiteInfo from '../websiteData'
import ProgramCard from '../Components/programCard'
import './Programming.css';

class Programming extends Component {
    render () {
        const { 
            mainParagraph1,
            mainParagraph2,
            mainParagraph3,
            programmingOptions
        } = websiteInfo.programming
        return (
            <div className="Programming">
                <Navigation variant="light" />
                <div id="programmingBg">
                    <div id="programmingContent">
                        <header id="programmingHeader">
                            <h1 id="programmingTitle">Programming</h1>
                            <img src={flowerDivider} id="programmingFlowerDivider" alt="Flowery dividing line" />
                        </header>
                        <div id="programmingMainInfo">
                            <p className="programmingMainParagraph">{mainParagraph1}</p>
                            <img src={flowerDivider2} className="programmingParagraphDivider" alt="Different flowery dividing line" />
                            <p className="programmingMainParagraph">{mainParagraph2}</p>
                            <img src={flowerDivider2} className="programmingParagraphDivider" alt="Different flowery dividing line" />
                            <p className="programmingMainParagraph">{mainParagraph3}</p>
                        </div>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Programming;
