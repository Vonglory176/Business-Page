import logo from "../assets/OcularLogo2.png"
import {Form, Button, ButtonGroup, Dropdown, DropdownButton} from "react-bootstrap"
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


export default function NavbarComponent() {
//https://www.youtube.com/watch?v=u1HyG535JY0    
return (
        <section id="navbar-section" >
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
                <img src={logo} alt="Ocuar Instruments Logo" className="img-fluid"/>

                {/* <Navbar.Brand href="#home">Dice Roller</Navbar.Brand> */}

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Separated link
                </NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                Dank memes
                </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            
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
        </section>
    )
}