import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBBtn,
} from 'mdb-react-ui-kit';

export const Jobs = () => {
    return (
        <div >
        <MDBCarousel showIndicators showControls fade style={{   height: "64vh" }}>
            <MDBCarouselItem 
            style={{   height: "60vh" }}
                className='w-100 '
                itemId={1}
                src='https://soylautaa.000webhostapp.com/imagenes/peluyago.bmp'
                alt='...'
                
            >
                <h5>Diseño web para peluqueria</h5>
                <p>Se usaron diferentes tecnologias Boostrap, Grid, Flexbox, SASS, SCSS y JavaScript</p>
                <MDBBtn className='text-white bg-dark' href='https://soylautaa.000webhostapp.com/' tag="a" outline size="lg">
                Ir a la web
              </MDBBtn>
            </MDBCarouselItem>

            <MDBCarouselItem
                style={{   height: "60vh" }}
                className='w-100 '
                itemId={2}
                src='https://i.ibb.co/93cPxjf/logo.png'
                alt='...'
            >
                <h5 className='text-white bg-dark'>Mi otro portafolio </h5>
                <p className='text-white bg-dark' >Se uso HTML, CSS y Boostrap</p>
                <MDBBtn className='text-white bg-dark' href='https://soylautaa.000webhostapp.com/#' tag="a" outline size="lg">
                Ir a la web
              </MDBBtn>
            </MDBCarouselItem>

            <MDBCarouselItem
                style={{   height: "40vh" }}
                className='w-100 '
                itemId={3}
                src='https://comunidad.boosteragro.com/wp-content/uploads/2018/12/proximamente.png'
                alt='...'
            >
                <h5 className='text-white bg-dark'>Con tu ayuda podre subir mas contenido a mi portafolio</h5>
                <p className='text-white bg-dark'>Que esperas para tener tu web?</p>
            </MDBCarouselItem>
        </MDBCarousel>
        </div>
    );

}