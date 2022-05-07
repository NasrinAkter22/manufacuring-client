import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';
import Navbar from '../Shared/Navbar/Navbar';

const AddItem = () => {
  return (

    <Fragment>
      <Navbar></Navbar>
      <div className='text-left '>
        <h1 className="text-center">Add new Product

        </h1>
        <Form.Group className="mb-3"  >
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>price</Form.Label>
          <Form.Select disabled>
            <option></option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control placeholder disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Supplier</Form.Label>
          <Form.Select disabled>
            <option></option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control placeholder disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>gamil</Form.Label>
          <Form.Select disabled>
            <option></option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>img:url</Form.Label>
          <Form.Select disabled>
            <option></option>
          </Form.Select>
        </Form.Group>



      </div>
    </Fragment>
  );
};

export default AddItem;
