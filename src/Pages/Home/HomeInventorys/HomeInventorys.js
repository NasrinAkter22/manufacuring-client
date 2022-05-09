import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeInventory from '../HomeInventory/HomeInventory';

const HomeInventorys = () => {
    const [inventorys, setInventorys] = useState([]);
    useEffect(() => {
        fetch('https://laptop12345.herokuapp.com/inventorys')
            .then(res => res.json())
            .then(data => setInventorys(data.slice(0, 6)))
    }, [])
    return (
        <div>
            {inventorys.length === 0 ?
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :

                <div className="row mt-5 mb-5 width-control g-3">
                    {
                        inventorys.map(inventory => <HomeInventory key={inventory._id}
                            inventory={inventory}
                        ></HomeInventory>)
                    }
                </div>}
            <div className='text-center mb-5'>
                <Link to="/manage-inventories"><button>Manage inventories</button></Link>
            </div>
        </div>
    );
};

export default HomeInventorys;