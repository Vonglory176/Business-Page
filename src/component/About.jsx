import {Button} from 'react-bootstrap'
import OptimizedImage from './OptimizedImage'
import ocularGroupSmall from "../assets/background/ocularGroup2Small.png"
import ocularGroup from "../assets/background/ocularGroup2.jpg"

export default function About() {
    return (
        <section id="about-section" className='container-fluid'>

            <OptimizedImage
                placeholderSrc={ocularGroupSmall}
                src={ocularGroup}
                alt="A picture of Ocular staff"
                id="aboutImage-img"
                className="img-fluid col-12 col-lg-6"
            />

            <div id="aboutWrap-div" className='col-12 col-lg-6'>
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