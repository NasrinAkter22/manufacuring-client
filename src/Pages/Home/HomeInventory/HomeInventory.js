import React from 'react';
import { Link } from 'react-router-dom';

const HomeInventory = ({ inventory }) => {
    const { _id, name, price, quantity, supplierName, description, imgURL } = inventory;
    return (
        <div class="col-sm-12 col-md-6 col-lg-4 home-service">
            <div class="card h-100 border-0 p-2 hvr-underline-from-left">
                <img src={imgURL} class="card-img-top" alt="..." />
                <div class="card-body">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='serv-cost'>
                            <h6 class="card-title">{name.slice(0,22)}...</h6>
                            <h6>{price}$</h6>
                            <span>{quantity}</span><br />
                            <span>{supplierName}</span>
                            <p>{description.slice(0, 110)}...</p>
                            <Link to={`/inventory/${_id}`}><button className='hvr-sweep-to-right hvr-ripple-out'>
                                Update
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeInventory;