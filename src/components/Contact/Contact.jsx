import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export const Contact = () => {
  return (
    <div style={{   height: "64vh" }}>

<div >
            <Form  className='container w-25'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name='nombre' type="text" placeholder="Jaimito" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='mail' type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control name='telefono' type="number" placeholder="+5421352456" />
                </Form.Group>
                <Button variant="success" type='submit' >Enviar Datos</Button>{' '}
            </Form>
        </div>

    </div>
  )
}
