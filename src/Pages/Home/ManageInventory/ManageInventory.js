import React from 'react';
import { Link } from 'react-router-dom';

const ManageInventory = ({ manageInvento }) => {
    const { _id, name, price, quantity, supplierName, description, imgURL } = manageInvento;

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 home-service">
            <div className="card h-100 border-0 p-2 hvr-underline-from-left">
                <img src={imgURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='serv-cost'>
                            <h6 className="card-title">{name.slice(0, 22)}...</h6>
                            <h6>{price}$</h6>
                            <span>{quantity}</span><br />
                            <span>{supplierName}</span>
                            <p>{description.slice(0, 110)}...</p>
                            <div>
                                <Link to={`/inventorys/${_id}`}><button className='hvr-sweep-to-right hvr-ripple-out btn btn-primary'>
                                    Update
                                </button></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;