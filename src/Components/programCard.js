import React ,  { Component } from 'react'
import bullfrog from '../Media/bullfrog-drawing-transparent.png'
import butterfly from '../Media/monarch_butterfly_Icon.png'
import woodpecker from '../Media/Woodpecker_Icon_transparent.png'
import squirrel from '../Media/squirrel-drawing-transparent.png'
import mushroom from '../Media/groupOfMushrooms.png'
import './programCard.css';

class ProgramCard extends Component {
    render () {
        const { title, details, notes, icon, alt } = this.props
        if (icon === 'bullfrog') {
            return (
                <div className="ProgramCard">
                    <img className="programCardIcon" id="bullfrogIcon" src={bullfrog} alt={alt}/>
                    <h1 className="programCardTitle">{title}</h1>
                    <h2 className="programCardDetails">{details}</h2>
                    <h3 className="programCardNotes">{notes}</h3>
                </div>
            );
        } else if (icon === "butterfly" ) {
            return (
                <div className="ProgramCard">
                    <img className="programCardIcon" src={butterfly} alt={alt}/>
                    <h1 className="programCardTitle">{title}</h1>
                    <h2 className="programCardDetails">{details}</h2>
                    <h3 className="programCardNotes">{notes}</h3>
                </div>
            );
        } else if (icon === "woodpecker") {
            return (
                <div className="ProgramCard">
                    <img className="programCardIcon" id="woodpeckerIcon" src={woodpecker} alt={alt}/>
                    <h1 className="programCardTitle">{title}</h1>
                    <h2 className="programCardDetails">{details}</h2>
                    <h3 className="programCardNotes">{notes}</h3>
                </div>
            );
        } else if (icon === "squirrel") {
            return (
                <div className="ProgramCard">
                    <img className="programCardIcon" src={squirrel} alt={alt}/>
                    <h1 className="programCardTitle">{title}</h1>
                    <h2 className="programCardDetails">{details}</h2>
                    <h3 className="programCardNotes">{notes}</h3>
                </div>
            );
        } else {
            return (
                <div className="ProgramCard">
                    <img className="programCardIcon" src={mushroom} alt={alt}/>
                    <h1 className="programCardTitle">{title}</h1>
                    <h2 className="programCardDetails">{details}</h2>
                    <h3 className="programCardNotes">{notes}</h3>
                </div>
            );
        }
    }
}

ProgramCard.defaultProps = {
    title: "Program Title", 
    details: "Description about the program.",
    notes: "Anything that is conditional",
    icon: "",
    alt: "",
}

export default ProgramCard;
