import {Button} from 'react-bootstrap'
import stockPhoto1 from "../assets/stock/ophthamologist2.jpg"

export default function About() {
    return (
        <section id="about-section" className='container-fluid'>
            {/* <img id="about-img" alt="Image of an ophthamologist" className="img-fluid" src={stockPhoto1}/> */}
            <div id="aboutWrap-div">
                <div id="aboutContent-div">
                    <h2>ABOUT OCULAR</h2>
                    <p>For 50 years we have been creating solutions to save sight, striving to continually improve the features and durability of all our product lines, including our more traditional items.</p>
                    <Button variant="primary" size="lg" className='w-100'>
                        Get to know us
                    </Button>
                </div>
            </div>
        </section>
    )
}