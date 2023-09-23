import { useState, useEffect } from "react";
import {Form, Button, ButtonGroup, Dropdown, DropdownButton, Nav, Navbar, NavDropdown, Col, Row } from "react-bootstrap"

import OptimizedImage from "./OptimizedImage";
import logo from "../assets/logo/OcularLogo4.png"
import logoSmall from "../assets/logo/OcularLogo4Small.png"


export default function NavbarComponent() {
//https://www.youtube.com/watch?v=u1HyG535JY0    
//https://www.pluralsight.com/guides/react-bootstrap:-using-event-keys-in-nav-dropdown (Interesting)

// const [navSecondaryExists, setNavSecondaryExists] = useState(false)

// const handleResizeForNav = () => {
//     // setWindowWidth(window.innerWidth)
//     console.log(navSecondaryExists, window.innerWidth)
//     if (navSecondaryExists === true && window.innerWidth <= 991) {
//         console.log("SET FALSE")
//         setNavSecondaryExists(false)
//     }
//     else if (navSecondaryExists === false && window.innerWidth >= 992) {
//         console.log("SET TRUE")
//         setNavSecondaryExists(true)
//     }
// }

// useEffect(() => {
//     window.addEventListener('resize', handleResizeForNav);

//     return () => window.removeEventListener('resize', handleResizeForNav)
// }, []);
const [scrollPosition, setScrollPosition] = useState(0);

useEffect(() => {
    const updateScroll = () => {
        setScrollPosition(window.scrollY);
        console.log(window.scrollY)
    }

    window.addEventListener('scroll', updateScroll);

    return () => window.removeEventListener('scroll', updateScroll)
}, []);


const secondaryNav = (
    <>
        <Nav.Link href="#">Home</Nav.Link>

        <NavDropdown title="About Us">
            <NavDropdown.Item href="#">Vision</NavDropdown.Item>
            <NavDropdown.Item href="#">Share Your Product Ideas</NavDropdown.Item>
            <NavDropdown.Item href="#">Trade Shows</NavDropdown.Item>
            <NavDropdown.Item href="#">Quality Commitment</NavDropdown.Item>
            <NavDropdown.Item href="#">Policy Statments</NavDropdown.Item>

        </NavDropdown>

        <NavDropdown title="Products">
            <NavDropdown.Item href="#">View all products</NavDropdown.Item>
            <NavDropdown.Item href="#">View products by collection</NavDropdown.Item>
            <NavDropdown.Item href="#">View products by pathway</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Product care</NavDropdown.Item>
        </NavDropdown>

        {/* <Nav.Link href="#">Product Care</Nav.Link> */}

        <NavDropdown title="FAQ's">
            <NavDropdown.Item href="#">Technical</NavDropdown.Item>
            <NavDropdown.Item href="#">Customer Service</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Knowledge Center">
            <NavDropdown.Item href="#">Coating and Materials</NavDropdown.Item>
            <NavDropdown.Item href="#">Lens Comparison Charts</NavDropdown.Item>
            <NavDropdown.Item href="#">Glossary</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="#">Students</Nav.Link>

        <Nav.Link href="#">Locate Distributor</Nav.Link>

        <Nav.Link href="#">Contact Us</Nav.Link>
    </>
)

return (
        <section id="navbar-section" className="fixed-top" style={{paddingBottom:scrollPosition >= 62 && window.innerWidth >= 992? "40px":"0"}}>
            <div id="primaryNav-div">
                <Navbar collapseOnSelect expand="lg"> 
                    {/* <img src={logo} alt="Ocuar Instruments Logo"/> */}
                    <OptimizedImage
                        placeholderSrc={logoSmall}
                        src={logo}
                        className="img-fluid"
                        style={{maxWidth:"143.03px", width:"100%"}}
                    />

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#" className="keep-nav">Log In or Create Account</Nav.Link>

                            <Nav.Link href="#" className="keep-nav">My Cart</Nav.Link>

                            {secondaryNav}

                        </Nav>
                        <Col className="d-flex rounded-2 overflow-hidden m-1 searchbar-div">
                            <Button type="submit" className="rounded-0 btn-md">
                                <span className="lnr lnr-magnifier"></span>
                            </Button>
                            <Form.Control
                            type="text"
                            placeholder="Search the entire store here"
                            className=" mr-sm-2 rounded-0"
                            />
                        </Col>                    
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div id="secondaryNav-div" className={scrollPosition >= 62 && window.innerWidth >= 992? "sticky":""}> 
                <Nav>
                    {secondaryNav}
                </Nav>    
            </div>
        </section>
    )
}