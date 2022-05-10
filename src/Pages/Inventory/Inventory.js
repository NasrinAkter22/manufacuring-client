import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Inventory = () => {
    const { id } = useParams();
    const [invent, setInvent] = useState({});
    const [reload, setIsLoad] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/inventorys/${id}`)
            .then(res => res.json())
            .then(data => setInvent(data))
    }, [id, reload])



    const deliveredHandle = (event) => {
        event.preventDefault();
        const number = parseInt(invent.quantity)
        const quantity = (number > 0) ? number - 1 : number;
        const newInvent = { quantity };

        const url = `http://localhost:5000/inventorys/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newInvent)
        })
            .then(res => res.json())
            .then(data => {
                setIsLoad(!reload)
            })

    }
    const numberRef = useRef('');
    const handleStock = event => {
        event.preventDefault();
        const stocknumber = numberRef.current.value;
        const quantity = parseInt(stocknumber) + parseInt(invent.quantity);
        const newInvent = { quantity };

        const url = `http://localhost:5000/inventorys/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newInvent)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
                setIsLoad(!reload)

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