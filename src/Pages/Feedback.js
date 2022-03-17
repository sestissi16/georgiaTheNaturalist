import React , { Component } from 'react'
import Navigation from '../Components/navigation'
import Footer from '../Components/footer'
import flowerDivider from '../Media/blackFlowerDivider-Transparent-Cropped.png'
import websiteInfo from '../websiteData'
import './Feedback.css'

class Feedback extends Component {
    render () {
        // saving line in case I need to use websiteInfo later
        // const { email, facebookLink, facebookLabel } = websiteInfo.feedback
        return (
            <div className="Feedback">
                <Navigation variant="light" />
                <div id="feedbackBg">
                    <header id="feedbackHeader">
                        <h1 id="feedbackTitle">Program Feedback</h1>
                        <img src={flowerDivider} id="feedbackFlowerDivider" alt="Flowery dividing line" />
                    </header>
                    <div id="feedbackContent">
                        <iframe 
                            title='feedbackGoogleForm'
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdJnK0AMqhd1K3zl6QavmTx-8muoFdwXiWTEIgpM8T7PilhNg/viewform?embedded=true" 
                            width="100%" 
                            height="666" 
                            frameborder="0" 
                            marginheight="0" 
                            marginwidth="0">
                                Loading…
                        </iframe>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Feedback;
