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
                <NavbarBrand href="/" id="navBrand">Georgia The Naturalist</NavbarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav activeKey={location.pathname}>
                        <Nav.Link href="/AboutMe" activeStyle={{ color: 'red' }} >About Me</Nav.Link>
                        <Nav.Link href="/Programming" activeStyle={{ color: 'red' }}>Programming</Nav.Link>
                        <Nav.Link href="/Photos" activeStyle={{ color: 'red' }}>Photos</Nav.Link>
                        <Nav.Link href="/Pricing" activeStyle={{ color: 'red' }}>Pricing</Nav.Link>
                        <Nav.Link href="/Contact" activeStyle={{ color: 'red' }}>Contact - Scheduling</Nav.Link>
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
