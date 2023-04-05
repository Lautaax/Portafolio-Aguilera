
import React from 'react';
import {MDBBtn} from 'mdb-react-ui-kit';
import "./Presentacion.css"


export const Presentacion = () => {
    return (
      
        <div  className='presentFondoo' >
          <div className='d-flex justify-content-center align-items-center text-center h-100 '>
            <div className='text-white '>
              <h1 className=' colorletra mb-3'>Hola SoyLautaa</h1>
              <h1 className=' mb-3'>Bienvenido a mi Portafolio  </h1>
              <h4 className='mb-3'>Queres conocer mis trabajos y Proyectos?</h4>
              <MDBBtn href='https://github.com/Lautaax/' tag="a" target="_blank"outline size="lg">
                Ir a mi GitHub
              </MDBBtn>
            </div>
          </div>
        </div>
)
}
