import React from 'react';
import { Form } from "react-bootstrap";

function HeadInfo() {
  return (
    <div>
      <Form.Label>Nombre</Form.Label>
      <Form.Control size='sm'
        as="select" aria-label="Default select example">
        <option>Seleccione un Nombre</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Control>
    </div >
  );

}


export default HeadInfo;
