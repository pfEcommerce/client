import { Carousel } from "react-bootstrap"

export default function StCarousel({ products }) {
    
    console.log('1',products)

    return (
        <Carousel>
            {products ? products.map(e => {
                return(
                    <Carousel.Item >
                    <img
                        className="c-block w-100"
                        style={{height:'30rem' , width: '10rem' , padding : '100px'}}
                        src={e.image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                )
                
            }) : ''}
        </Carousel >
    )
}