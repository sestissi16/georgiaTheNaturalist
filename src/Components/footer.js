import React, { Component } from 'react';
import { Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import Logo from '../Media/georgiaTheNaturalistLogo_90x72.jpg'
import { FaFacebookSquare, FaImage } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import WebsiteInfo from '../websiteData'
import './footer.css'

class Footer extends Component {
    render(){
        const { facebookLink, email } = WebsiteInfo.contact
        return (
            <Navbar variant="dark" expand="lg" sticky="bottom" className="custom-footer-bg">
                <Navbar.Brand href="/georgiaTheNaturalist/" className="footer-title">
                    <img
                        alt="Georgia The Naturalist Logo"
                        src={Logo}
                        className="d-inline-block align-top footerLogo"
                    />{'  '}
                </Navbar.Brand>
                <Nav className="footerLinks">
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-cart`}>
                                Facebook Link
                            </Tooltip>
                        }
                    >
                        <Nav.Link href={ facebookLink } className="footer-link-fb">
                            <FaFacebookSquare className="footer-icon-fb"/>
                        </Nav.Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-cart`}>
                                To Contact and Scheduling
                            </Tooltip>
                        }
                    >
                        <Nav.Link href="/Contact" className="footer-link-email">
                        {/* <Nav.Link href={`mailto:${email}`} className="footer-link-email"> */}
                            <MdEmail className="footer-icon-email"/>
                        </Nav.Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-cart`}>
                                Image Attributions
                            </Tooltip>
                        }
                    >
                        <Nav.Link href="/Attributions" className="footer-link-attributions">
                            <FaImage className="footer-icon-attributions"/>
                        </Nav.Link>
                    </OverlayTrigger>
                </Nav>
            </Navbar>
        );
    }
};

export default Footer;
