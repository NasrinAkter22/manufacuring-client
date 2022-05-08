import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';


const MyItems = () => {
    return (
        <Fragment>
            <Navbar/>
            <h1>
                Manage Inventory
            </h1>
            <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>Title</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
   
  </tbody>
</Table>
            <Footer></Footer>
        </Fragment>
    );
};

export default MyItems;