import React from 'react';
import data from '../data'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import Button from 'react-bootstrap/Button'


const dataItems= data.map((item,id) =>{    
    return(
                <CarouselItem key={id}>
                    <img
                        className="d-block w-50 mx-auto"
                        src={item.src}
                        alt={item.alt}
                    />
                    <Carousel.Caption>
                        <Button href={item.ref} variant="danger">{item.title}</Button>  
                    </Carousel.Caption>              
                </CarouselItem>
            )
    })


const CarouselProjet = () => {
    return (
        <div className="container-fluid">
            <Carousel fade >
                {dataItems}               
            </Carousel>             
        </div>
    );
}

export default CarouselProjet;
