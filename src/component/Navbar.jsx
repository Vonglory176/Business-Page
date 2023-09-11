import logo from "../assets/logo/OcularLogo4.png"
import {Form, Button, ButtonGroup, Dropdown, DropdownButton} from "react-bootstrap"
import { Nav, Navbar, NavDropdown, Col, Row } from "react-bootstrap";


export default function NavbarComponent() {
//https://www.youtube.com/watch?v=u1HyG535JY0    
//https://www.pluralsight.com/guides/react-bootstrap:-using-event-keys-in-nav-dropdown (Interesting)

return (
        <section id="navbar-section" className="fixed-top">
            {/*https://frontendshape.com/post/react-bootstrap-5-search-bar-example*/}
                    {/* <a target="_blank" href="#">My Account</a> */}
                    {/* <a target="_blank" href="#">My Wishlist</a> */}
                    {/* <a target="_blank" href="#">Checkout</a> */}
            {/* <div id="navbarRow1-div" className="d-flex justify-content-between">
                <img src={logo} alt="Ocuar Instruments Logo" className="img-fluid"/>
                <div className="d-flex align-items-center gap-2">
                    <a target="_blank" href="#">Log in or Create Account</a>
                    <a target="_blank" href="#">My Cart</a>
                    <div>SEARCHBAR HERE!</div> 
                    </div>
                </div> */}

            <Navbar collapseOnSelect expand="lg">
                <img src={logo} alt="Ocuar Instruments Logo"/>

                {/* <Navbar.Brand href="#home">Dice Roller</Navbar.Brand> */}

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#" className="keep-nav">Log In or Create Account</Nav.Link>

                        <Nav.Link href="#" className="keep-nav">My Cart</Nav.Link>

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
            <div id="secondaryNav-nav">
                <Nav>
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
                </Nav>    
            </div>
        </section>
    )
}

{/* <div id="navbarRow2-div" className="d-flex justify-content-between">
    <Button variant="primary">Home</Button>

    <DropdownButton id="dropdown-basic-button" title="About Us">
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Action 3</Dropdown.Item>
    </DropdownButton>

    <DropdownButton id="dropdown-basic-button" title="All Products">
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Action 3</Dropdown.Item>
    </DropdownButton>

    <Button variant="primary">Product Care</Button>

    <DropdownButton id="dropdown-basic-button" title="FAQ's">
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Action 3</Dropdown.Item>
    </DropdownButton>

    <DropdownButton id="dropdown-basic-button" title="Knowledge Center">
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Action 3</Dropdown.Item>
    </DropdownButton>

    <Button variant="primary">Students</Button>

    <DropdownButton id="dropdown-basic-button" title="Optometry Products">
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Action 3</Dropdown.Item>
    </DropdownButton>

    <DropdownButton id="dropdown-basic-button" title="Locate Distributor">
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Action 3</Dropdown.Item>
    </DropdownButton>

    <Button variant="primary">Contact Us</Button>
</div> */}