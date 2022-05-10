import { Toast } from 'bootstrap';
import React, { Fragment, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import ManageSingleItem from './ManageSingleItem/ManageSingleItem';

const ManageItem = () => {
    const [manageInv, setManageInv] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventorys')
            .then(res => res.json())
            .then(data => setManageInv(data))
    }, [])
    const DeleteItem = (id) => {
        const confirmation = window.confirm('Are you want to delete this Item')
        if (confirmation) {
            fetch(`http://localhost:5000/inventorys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount === 1) {
                        const restProducts = manageInv.filter(product => product._id !== id);
                        setManageInv(restProducts);

                    }
                    else { console.log('error') }
                })

        }

    }
    return (
        <Fragment>
            <Navbar />

            <div className="container">
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
                        {manageInv.map(item => <ManageSingleItem inventory={item} key={item._id} DeleteItem={DeleteItem}></ManageSingleItem>)}

                    </tbody>
                </Table>
            </div>
            <Footer></Footer>
        </Fragment>
    );
};

export default ManageItem;