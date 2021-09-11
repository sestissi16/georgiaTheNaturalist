import React ,  { Component } from 'react'
import './navigation.css';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap'
import { withRouter } from "react-router";

class Navigation extends Component {
    render () {
        const { variant } = this.props
        const { location } = this.props;
        return (
            <Navbar collapseOnSelect expand="xl" variant={ variant } className="Nav">
                <NavbarBrand href="/georgiaTheNaturalist/" id="navBrand">Georgia The Naturalist</NavbarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav activeKey={location.pathname}>
                        <Nav.Link href="/georgiaTheNaturalist/AboutMe" active={window.location.pathname === '/georgiaTheNaturalist/AboutMe'}>About Me</Nav.Link>
                        <Nav.Link href="/georgiaTheNaturalist/Programming" active={window.location.pathname === '/georgiaTheNaturalist/Programming'}>Programming</Nav.Link>
                        <Nav.Link href="/georgiaTheNaturalist/Photos" active={window.location.pathname === '/georgiaTheNaturalist/Photos'}>Photos</Nav.Link>
                        <Nav.Link href="/georgiaTheNaturalist/Pricing" active={window.location.pathname === '/georgiaTheNaturalist/Pricing'}>Pricing</Nav.Link>
                        <Nav.Link href="/georgiaTheNaturalist/Contact" active={window.location.pathname === '/georgiaTheNaturalist/Contact'}>Contact - Scheduling</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
          );
    }
}

Navigation.defaultProps = {
    variant: "dark", 
}

export default withRouter(Navigation);
