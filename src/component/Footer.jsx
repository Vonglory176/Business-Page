import logo from "../assets/logo/OcularLogo4.png"
import youtube from "../assets/youtube.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import {Col, Row, Form, Button} from "react-bootstrap";

export default function Footer() {
    return (
        <section id="footer-section">
            <div className="footerWrapper-div d-flex flex-wrap gap-5 p-3">

                {/* NEWSLETTER */}
                <Col id="newsletter-div" xs="12" className="d-flex gap-1" style={{maxWidth:"331px"}}>
                    <Form inline="true">
                        <Row className="gap-2">
                            <Col xs="8">
                                <img src={logo} style={{maxWidth:"143.03px"}}/> {/*className="img-fluid"*/}
                            </Col>
                            <Col xs="auto">
                                <h6>Sign up for our newsletter and receive the latest product news, articles, and offers.</h6>
                                <Col className="d-flex rounded-2 overflow-hidden">
                                    <Form.Control
                                    type="text"
                                    placeholder="Enter your email address"
                                    className=" mr-sm-2 rounded-0"
                                    />
                                    <Button type="submit" className="rounded-0">Subscribe</Button>
                                </Col>
                            </Col>
                            <Col className="d-flex align-items-center">
                                <h6 className="m-0 px-1">FOLLOW US</h6>
                                <img src={facebook}/>
                                <img src={twitter}/>
                                <img src={youtube}/>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                {/* <span className="col-12 text-center">2255 116th Ave NE, Bellevue, WA 98004 | T: 1-425-455-5200 | Toll Free: 800-888-6616 | F: 1-425-462-6669 | E: contact@ocularinc.com</span> */}
                
                {/* KNOW MORE */}
                <Col id="knowMore-div" xs="12" className="d-flex flex-column gap-2" style={{maxWidth:"fit-content"}}>
                    <h6>KNOW MORE</h6>
                    <span className="gap-2">
                        <a target="_blank" href="#">About Ocular</a>
                        <a target="_blank" href="#">Privacy Policy</a>
                        <a target="_blank" href="#">Site Map</a>
                        <a target="_blank" href="#">Search Term</a>
                        <a target="_blank" href="#">Advanced Search</a>
                    </span>
                    {/* <a target="_blank" href="#">Contact Us</a> */}
                </Col>

                {/* CONTACT */}
                <Col id="contact-div" xs="12" md="6" className="d-flex flex-column gap-2" style={{maxWidth:"fit-content"}}>
                    <h6>CONTACT</h6>
                    <div className="d-flex gap-1">
                        <span className="lnr lnr-phone-handset"></span>
                        <span>1-425-455-5200 | Toll Free: 800-888-6616 | <br/>F: 1-425-462-6669</span> 
                    </div>
                    <div className="d-flex gap-1">
                        <span className="lnr lnr-map-marker"></span>
                        <span>2255 116th Ave NE, Bellevue, WA 98004</span>
                    </div>
                    <div className="d-flex gap-1">
                        <span className="lnr lnr-envelope"></span>
                        <span>contact@ocularinc.com</span>
                    </div>
                </Col>

                <Col xs="12">
                    <h6 className="text-center" style={{fontSize:"11px"}}>Copyright © 2023, Ocular Instruments. All Rights Reserved .</h6>
                </Col>
            </div>
        </section>
    )
}