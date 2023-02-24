
import React from 'react';
import {MDBBtn} from 'mdb-react-ui-kit';
import "./Presentacion.css"


export const Presentacion = () => {
    return (
        <div
        className='p-5 text-center bg-image '
        style={{   height: "64vh" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Bienvenido a mi Portafolio?  </h1>
              <h4 className='mb-3'>Queres conocer mis trabajos y Proyectos?</h4>
              <MDBBtn href='https://github.com/Lautaax/' tag="a" target="_blank"outline size="lg">
                Ir a mi GitHub
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>

                )
}
