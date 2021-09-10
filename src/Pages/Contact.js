import React , { Component } from 'react'
import Navigation from '../Components/navigation'
import Footer from '../Components/footer'
import flowerDivider from '../Media/blackFlowerDivider-Transparent-Cropped.png'
import { FaFacebookSquare } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import ContactForm from '../Components/contactForm'
import websiteInfo from '../websiteData'
import './Contact.css'

class Contact extends Component {
    render () {
        const { email, facebookLink, facebookLabel } = websiteInfo.contact
        return (
            <div className="Contact">
                <Navigation variant="light" />
                <div id="contactBg">
                    <header id="contactHeader">
                        <h1 id="contactTitle">Contact Me / Schedule a Program</h1>
                        <img src={flowerDivider} id="contactFlowerDivider" alt="Flowery dividing line" />
                    </header>
                    <div id="contactContent">
                        <div id="contactInfoDiv">
                            <h2 id="contactInfoTitle">Contact Information</h2>
                            <h3 id="contactInfoEmail"><a href={"mailto:"+email}><MdEmail id="contactEmailIcon"/> {email}</a></h3>
                            <h3 id="contactInfoFacebook"><a href={facebookLink}><FaFacebookSquare id="contactFacebookIcon"/> {facebookLabel}</a></h3>
                        </div>
                        <div id="contactFormDiv">
                            <ContactForm email={email} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;
