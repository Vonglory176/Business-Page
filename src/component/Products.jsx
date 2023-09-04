import {Carousel,Button} from 'react-bootstrap';
import indirectGroup from '../assets/products/COLOR_INDIRECT_GROUP_Small.png'
import oadvxh from '../assets/products/oadvx-h.png'
import oemikit from '../assets/products/oemi-kit.png'
import various from '../assets/products/topcon-ocular1.png'
import catalog from '../assets/catalog/productcatalog2.webp'

export default function Products() {
    return (
        <section id="products-section" className='container-fluid'>
            <Carousel className='col-12' indicators={false} wrap={true}>
                    {/* <h6 style={{top:"25px"}}>Diagnostic Lenses</h6> */}
                {/* <Carousel.Item>
                    <img  className="img-fluid" src={indirectGroup}/>
                </Carousel.Item> */}

                    {/* <h6 style={{right:"20px", bottom:"45px",width:"200px"}}>Ahmed DVX Surgical Gonio Lens</h6>*/}
                {/* <Carousel.Item>
                    <img  className="img-fluid" src={oadvxh}/>
                </Carousel.Item> */}

                    {/* <h6 style={{top:"160px"}}>Refill Kits</h6>*/}
                {/* <Carousel.Item>
                    <img  className="img-fluid" src={oemikit}/>
                </Carousel.Item> */}

                {/* <Carousel.Item>
                    <img  className="img-fluid" src={various}/>                   
                </Carousel.Item> */}

                <Carousel.Item>
                    <img  className="img-fluid" src={catalog}/>                   
                </Carousel.Item>
            </Carousel>

            <div id="productContent-div" className='col-12'>
                <h2>PRODUCTS</h2>
                <p>Breakthrough lens systems of unparalleled sharpness and clarity that take the forefront of the ophthalmic industry.</p>
                <Button variant="warning" size="lg" className='w-100'>
                    View our selection
                </Button>
            </div>
        </section>
    )
}