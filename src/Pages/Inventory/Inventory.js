import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
import Navbar from '../Shared/Navbar/Navbar';
// import useFirebase from '../../Hooks/useFirebase';

const Inventory = () => {
    const [invent, setInvent] = useState({});
    // const { user } = useFirebase();
    const { inventoryId } = useParams();
    // const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/inventorys/${inventoryId}`)
            .then(res => res.json())
            .then(data => setInvent(data))
    }, [])

    // const onSubmit = data => {
    //     axios.post('http://localhost:5000/bookings', data)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 alert('booking added successfully');
    //                 reset();
    //             }
    //         })
    // }
    return (
        <div>
            <Navbar />
            <div className="width-control">
                <div className="row">
                    <div className="col-sm-12 col-md-6 service-list-item">
                        <h4 className='mt-5 mb-4'>Inventory overview</h4>
                        <h4>Inventory Id : {invent.id}</h4>
                        <img className='img-fluid' src={invent.imgURL} alt="" />
                        <h6 className='mt-4'>{invent.name}</h6>
                        <h5 className='mt-4'>Total Quantity: {invent.quantity}</h5>
                        <h5 className='mt-4'>Price : <span className='text-primary'>${invent.price}</span></h5>
                        <h6 className='mt-4'>Supplier Name is <span className='text-primary'>{invent.supplierName}</span></h6>
                        <h5>Description: </h5>
                        <p className='mt-4'>{invent.description}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Inventory;