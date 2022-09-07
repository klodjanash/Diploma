import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
let logoPath = "assets/images/1791961.png";
class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false
        };
    }

    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container align-center">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" >
                                        <img className="captcha-logo" src={logoPath} alt="Logo"></img> 
                                          <span className="header-title"> Sistem identifikimi perdoruesi njerezor </span> 
                             </NavLink>
                                </NavItem>
                                
                            </Nav>
                    </div>
                </Navbar>
            </>

        )
    }
}
export default Header;