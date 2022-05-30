import React, { Fragment, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';


const MyItems = () => {
  const [myItem, setMyItem] = useState([]);

  useEffect(() => {
    fetch(`https://intense-springs-99541.herokuapp.com/addedProduct`)
      .then(res => res.json())
      .then(data => setMyItem(data))

  }, [myItem])

  return (
    <Fragment>
      <Navbar />
      <h1>
        Manage Inventory
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr>

            <th>Name</th>
            <th>Supplier</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>


          {
            myItem.map(item =>

              <tr>
                <td>{item.name}</td>
                <td>{item.supplierName}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>

            )
          }


        </tbody>
      </Table>
      <Footer></Footer>
    </Fragment>
  );
};

export default MyItems;