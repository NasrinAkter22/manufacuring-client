import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
import Navbar from '../Shared/Navbar/Navbar';
// import useFirebase from '../../Hooks/useFirebase';

const Inventory = () => {
    const [invent, setInvent] = useState({ quantity: '' });
    // const { user } = useFirebase();
    const { id } = useParams();
    // const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/inventorys/${id}`)
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


    {/*  delivred sight */ }

    const number = parseInt(invent.quantity);
    const { quantity, ...rest } = invent;
    const deliveredHandle = (event) => {
        event.preventDefault();

        const newNumber = number - 1;
        const invent = {
            quantity: newNumber

        }
        const url = `http://localhost:5000/inventorys/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(invent)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                setInvent({ quantity: newNumber, ...rest });
            })

    }
    {/*  delivered end  */ }

    const numberOne = parseInt(invent.quantity);
    const numberRef = useRef('');
    const handleStock = event => {
        event.preventDefault();
        const stocknumber = numberRef.current.value;
        const quantity = parseInt(stocknumber) + numberOne;
        const invent = { quantity };
        const url = `http://localhost:5000/inventorys/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(invent)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                setInvent({ quantity: quantity, ...rest });
                event.target.reset('')
            })
    }

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
                        <button onClick={deliveredHandle} className='btn btn-danger'>Delivered</button>
                        <form action="" className='mt-3' onSubmit={handleStock}>
                            <input className='mb-3 p-2' type="number" ref={numberRef} name="qunatity" placeholder='stock number' id="" /> <br />
                            <input className='btn btn-danger' type="submit" value="stocked" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Inventory;