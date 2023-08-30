import logo from "../assets/logo/OcularLogo4.png"

export default function Landing() {
    return (
        <section id="landing-section" className="d-flex flex-column justify-content-center align-items-center">
            <div id="landingLogo-div" className="d-flex flex-column">
                <img id="landingLogo-img" className="img-fluid" src={logo}/>
                {/* <h2>Welcome to Ocular Instruments!</h2> */}
                <h6>Creating solutions to save sight since 1966.</h6>
                {/* <h5>Quality. Innovation. Technology. Service.</h5> */}
            </div>
            {/* <Carousel data-bs-theme="dark" controls={false} indicators={false} touch={false} wrap={true} interval={0}>
                <Carousel.Item></Carousel.Item>
                <Carousel.Item></Carousel.Item>
                <Carousel.Item></Carousel.Item>
            </Carousel> */}

            <div className="slider">
                <div className="slide-track">
                    <div className="slide"></div>
                    <div className="slide"></div>
                </div>
            </div>
        </section>
    )
}