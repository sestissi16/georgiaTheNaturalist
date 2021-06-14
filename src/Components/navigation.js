import React ,  { Component } from 'react'
import './navigation.css';
// import leaves from './Media/drawnLeaves-transparent.png'
// import smallLogo from './Media/georgiaTheNaturalistLogo_90x72.jpg'
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap'

class Navigation extends Component {
    render () {
        const { variant } = this.props
        return (
            <Navbar collapseOnSelect expand="xl" variant={ variant } className="Nav">
                <NavbarBrand href="/" id="navBrand">Georgia The Naturalist</NavbarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav.Link href="/AboutMe">About Me</Nav.Link>
                    <Nav.Link href="/Programming">Programming</Nav.Link>
                    <Nav.Link href="/Photos">Photos</Nav.Link>
                    <Nav.Link href="/Pricing">Pricing</Nav.Link>
                    <Nav.Link href="/Contact">Contact - Scheduling</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
          );
    }
}

Navigation.defaultProps = {
    variant: "dark", 
}

export default Navigation;
