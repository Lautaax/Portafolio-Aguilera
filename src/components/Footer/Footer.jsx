import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Footer = () => {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
    <MDBContainer className='p-4 pb-0'>
      <section className='mb-4'>
        <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/holly.webdesign/' role='button'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/lautaj' role='button'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/_lautaa/' role='button'>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/soylautaa/' role='button'>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='https://github.com/Lautaax/' role='button'>
          <MDBIcon fab icon='github' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='https://wa.me/+5492916455565/?text=Hola.....' role='button'>
          <MDBIcon fab icon='whatsapp' />
        </MDBBtn>

      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2023 Copyright:
      <a className='text-white' href='https://www.facebook.com/holly.webdesign/'>
        "SoyLautaa"
      </a>
    </div>
  </MDBFooter>
  );
}

