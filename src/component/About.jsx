import {Button} from 'react-bootstrap'
import stockPhoto1 from "../assets/stock/ophthamologist2.jpg"

export default function About() {
    return (
        <section id="about-section" className='container-fluid'>
            <div id="aboutWrap-div">
                <div id="aboutContent-div">
                    <h2>ABOUT OCULAR</h2>
                    <p>For 50 years we have been creating solutions to save sight, striving to continually improve the features and durability of all our product lines.</p> {/*, including our more traditional items.*/}
                    <Button variant="primary" size="lg" className='w-100 shadow'>
                        Get to know us
                    </Button>
                </div>
            </div>
        </section>
    )
}