import { useState, useEffect } from "react"

import OptimizedImage from "./OptimizedImage"
import logo from "../assets/logo/OcularLogo4.png"
import logoSmall from "../assets/logo/OcularLogo4Small.png"
import eyeballBackground from '../assets/background/eyebackground4.jpg'
import eyeballBackgroundSmall from '../assets/background/eyebackgroundSmall.jpg'

export default function Landing() {
    const [imageBackgroundLoaded, setImageBackgroundLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = eyeballBackground;
        img.onload = () => setImageBackgroundLoaded(true);
    }, []);

    let backgroundSlide = 
        <div
            className={`slide ${imageBackgroundLoaded? "loaded" : "loading"}`}
            style={{backgroundImage: imageBackgroundLoaded ? `url(${eyeballBackground})` : `url(${eyeballBackgroundSmall})`}}
        >            
        </div>
    

    return (
        <section id="landing-section" className="d-flex flex-column justify-content-center align-items-center">
            <div id="landingLogo-div" className="d-flex flex-column">
                <OptimizedImage
                    placeholderSrc={logoSmall}
                    src={logo}
                    id="landingLogo-img"
                    className="img-fluid"
                    style={{width:"409px"}}
                />
                {/* <h2>Welcome to Ocular Instruments!</h2> */}
                <h6>Creating solutions to save sight since 1966.</h6>
                {/* <h5>Quality. Innovation. Technology. Service.</h5> */}
            </div>

            <div className="slider">
                <div className="slide-track">
                    {backgroundSlide}
                    {backgroundSlide}
                </div>
            </div>
        </section>
    )
}