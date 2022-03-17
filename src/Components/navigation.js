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
                        <Nav.Link href="/AboutMe" active={window.location.pathname === '/AboutMe'}>About Me</Nav.Link>
                        <Nav.Link href="/Programming" active={window.location.pathname === '/Programming'}>Programming</Nav.Link>
                        <Nav.Link href="/Photos" active={window.location.pathname === '/Photos'}>Photos</Nav.Link>
                        <Nav.Link href="/Pricing" active={window.location.pathname === '/Pricing'}>Pricing</Nav.Link>
                        <Nav.Link href="/Contact" active={window.location.pathname === '/Contact'}>Contact - Scheduling</Nav.Link>
                        <Nav.Link href="/Feedback" active={window.location.pathname === '/Feedback'}>Feedback</Nav.Link>
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
