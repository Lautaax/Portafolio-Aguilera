import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBBtn,
} from 'mdb-react-ui-kit';
import Peluqueria from '../Images/peluyago.png';
import ExPorta from '../Images/portafolio.png'
import Proximamente from '../Images/proximamente.png'
import Proyecjs from '../Images/proyecjs.jpeg'
import proyecReac from '../Images/react.jpeg'
import "./Jobs.css"

export const Jobs = () => {
    return (
        <div >
            <MDBCarousel showIndicators showControls dealy={200000} style={{ height: "64vh" }}>
                <MDBCarouselItem
                    style={{ height: "60vh" }}
                    className='w-100 foto '
                    itemId={1}
                    src={Peluqueria}
                    alt='...'

                ><div className='text-white bg-dark item'>
                        <h5>Diseño web para peluqueria</h5>
                        <p>  Se usaron diferentes tecnologias Boostrap, Grid, Flexbox, SASS, SCSS y JavaScript  </p>
                    </div>
                    <MDBBtn className='text-white bg-dark' color='success' href='https://yagocastrobarber.000webhostapp.com/' tag="a" target="_blank" outline size="lg">
                        Ir a la web
                    </MDBBtn>
                </MDBCarouselItem>

                <MDBCarouselItem
                    style={{ height: "60vh" }}
                    className='w-100 foto '
                    itemId={2}
                    src={ExPorta}
                    alt='...'
                >   <div className=' text-white bg-dark item'>
                        <h5 >  Mi otro portafolio   </h5>
                        <p >  Se uso HTML, CSS y Boostrap  </p>
                    </div>
                    <MDBBtn className='text-white bg-dark' color='success' href='https://soylautaa.000webhostapp.com/#' tag="a" target="_blank" outline size="lg">
                        Ir a la web
                    </MDBBtn>

                </MDBCarouselItem>

                <MDBCarouselItem
                    style={{ height: "60vh" }}
                    className='w-100 foto'
                    itemId={3}
                    src={proyecReac}
                    alt='...'
                >   <div className=' text-white bg-dark item'>
                        <h5 >  Plataforma de E-commerce    </h5>
                        <h5 >  Se uso HTML, CSS , React , Fs para base de datos </h5>
                        <h5>React Boostrap De libreria de estilizado</h5>
                    </div>
                    <MDBBtn className='text-white bg-dark ' color='success' href='https://ecommerce-react-aguilera.vercel.app/' tag="a" target="_blank" outline size="lg">
                        Ir a la web
                    </MDBBtn>
                </MDBCarouselItem>


                <MDBCarouselItem
                    style={{ height: "60vh" }}
                    className='w-100 foto '
                    itemId={4}
                    src={Proyecjs}
                    alt='...'
                >   <div className=' text-white bg-dark item'>
                        <h5 >  Plataforma de E-commerce    </h5>
                        <p >  Se uso HTML, CSS , JavaScript </p>
                    </div>
                    <MDBBtn className='text-white bg-dark ' color='success' href='https://ecomerce-js.vercel.app/' tag="a" target="_blank" outline size="lg">
                        Ir a la web
                    </MDBBtn>

                </MDBCarouselItem>



                <MDBCarouselItem
                    style={{ height: "60vh" }}
                    className='w-100 foto '
                    itemId={5}
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