import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBBtn,
} from 'mdb-react-ui-kit';
import Peluqueria from '../Images/peluyago.png';
import ExPorta from '../Images/portafolio.png'
import Proximamente from '../Images/proximamente.png'
import "./Jobs.css"

export const Jobs = () => {
    return (
        <div >
            <MDBCarousel showIndicators showControls dealy={100000} style={{ height: "64vh" }}>
                <MDBCarouselItem
                    style={{ height: "60vh" }}
                    className='w-100 '
                    itemId={1}
                    src={Peluqueria}
                    alt='...'

                ><div className='text-white bg-dark item'>
                    <h5>Diseño web para peluqueria</h5>
                    <p>  Se usaron diferentes tecnologias Boostrap, Grid, Flexbox, SASS, SCSS y JavaScript  </p>
                    </div>
                    <MDBBtn className='text-white bg-dark'  color='success' href='https://soylautaa.000webhostapp.com/' tag="a" target="_blank" outline size="lg">
                        Ir a la web
                    </MDBBtn>
                </MDBCarouselItem>

                <MDBCarouselItem
                    style={{ height: "60vh" }}
                    className='w-100 '
                    itemId={2}
                    src={ExPorta}
                    alt='...'
                >   <div className=' text-white bg-dark item'>
                    <h5 >  Mi otro portafolio   </h5>
                    <p >  Se uso HTML, CSS y Boostrap  </p>
                    </div>
                    <MDBBtn className='text-white bg-dark' color='success'  href='https://soylautaa.000webhostapp.com/#' tag="a" target="_blank" outline size="lg">
                        Ir a la web
                    </MDBBtn>
                    
                </MDBCarouselItem>

                <MDBCarouselItem
                    style={{ height: "60vh" }}
                    className='w-100 '
                    itemId={3}
                    src={Proximamente}
                    alt='...'
                ><div className='text-white bg-dark item'>
                    <h5 >Con tu ayuda podre subir mas contenido a mi portafolio</h5>
                    <p >Que esperas para tener tu web?</p>
                    </div>
                </MDBCarouselItem>
            </MDBCarousel>
        </div>
    );

}