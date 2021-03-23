import React from 'react'
import {  Form, Button } from 'react-bootstrap'


export const Contact = () => {
    return (
    <>
    <h3>contact us!</h3>
         <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
            
        
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
        
        
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary">send!</Button>{' '}
        </Form>
    </>
    )


}
