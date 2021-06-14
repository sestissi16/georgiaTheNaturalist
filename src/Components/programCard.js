import React ,  { Component } from 'react'
import './programCard.css';

class ProgramCard extends Component {
    render () {
        const { title, details, notes } = this.props
        return (
            <div className="ProgramCard">

            </div>
          );
    }
}

ProgramCard.defaultProps = {
    title: "Program Title", 
    details: "Description about the program.",
    notes: "Anything that is conditional",
}

export default ProgramCard;
