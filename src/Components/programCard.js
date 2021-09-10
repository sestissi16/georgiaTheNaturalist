import React ,  { Component } from 'react'
import bullfrog from '../Media/bullfrog-drawing-transparent.png'
import butterfly from '../Media/monarch_butterfly_Icon.png'
import woodpecker from '../Media/Woodpecker_Icon_transparent.png'
import squirrel from '../Media/squirrel-drawing-transparent.png'
import mushroom from '../Media/groupOfMushrooms.png'
import hiker from '../Media/mountains-clipart-transparent-background.png'
import './programCard.css';

class ProgramCard extends Component {
    render () {
        const { title, details, notes, icon, alt } = this.props
        if (icon === 'bullfrog') {
            return (
                <div className="ProgramCard" id="bullfrogCard">
                    <div className="programCardIconDiv">
                        <img className="programCardIcon" id="bullfrogIcon" src={bullfrog} alt={alt}/>
                    </div>
                    <div className="programCardInfo">
                        <h1 className="programCardTitle">{title}</h1>
                        <h2 className="programCardDetails">{details}</h2>
                        <h3 className="programCardNotes">{notes}</h3>
                    </div>
                </div>
            );
        } else if (icon === "butterfly" ) {
            return (
                <div className="ProgramCard" id="butterflyCard">
                    <div className="programCardIconDiv">
                        <img className="programCardIcon" id="butterflyIcon" src={butterfly} alt={alt}/>
                    </div>
                    <div className="programCardInfo">
                        <h1 className="programCardTitle">{title}</h1>
                        <h2 className="programCardDetails">{details}</h2>
                        <h3 className="programCardNotes">{notes}</h3>
                    </div>
                </div>
            );
        } else if (icon === "woodpecker") {
            return (
                <div className="ProgramCard" id="woodpeckerCard">
                    <div className="programCardIconDiv">
                        <img className="programCardIcon" id="woodpeckerIcon" src={woodpecker} alt={alt}/>
                    </div>
                    <div className="programCardInfo">
                        <h1 className="programCardTitle">{title}</h1>
                        <h2 className="programCardDetails">{details}</h2>
                        <h3 className="programCardNotes">{notes}</h3>
                    </div>
                </div>
            );
        } else if (icon === "squirrel") {
            return (
                <div className="ProgramCard" id="squirrelCard">
                    <div className="programCardIconDiv">
                        <img className="programCardIcon" id="squirrelIcon" src={squirrel} alt={alt}/>
                    </div>
                    <div className="programCardInfo">
                        <h1 className="programCardTitle">{title}</h1>
                        <h2 className="programCardDetails">{details}</h2>
                        <h3 className="programCardNotes">{notes}</h3>
                    </div>
                </div>
            );
        } else if (icon === "mushroom") {
            return (
                <div className="ProgramCard" id="mushroomCard">
                    <div className="programCardIconDiv">
                        <img className="programCardIcon" id="mushroomIcon" src={mushroom} alt={alt}/>
                    </div>
                    <div className="programCardInfo">
                        <h1 className="programCardTitle">{title}</h1>
                        <h2 className="programCardDetails">{details}</h2>
                        <h3 className="programCardNotes">{notes}</h3>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="ProgramCard" id="hikingCard">
                    <div className="programCardIconDiv">
                        <img className="programCardIcon" id="hikingIcon" src={hiker} alt={alt}/>
                    </div>
                    <div className="programCardInfo">
                        <h1 className="programCardTitle">{title}</h1>
                        <h2 className="programCardDetails">{details}</h2>
                        <h3 className="programCardNotes">{notes}</h3>
                    </div>
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
