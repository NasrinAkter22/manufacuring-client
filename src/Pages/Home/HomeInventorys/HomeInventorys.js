import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeInventory from '../HomeInventory/HomeInventory';

const HomeInventorys = () => {
    const [inventorys, setInventorys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventorys')
            .then(res => res.json())
            .then(data => setInventorys(data.slice(0, 6)))
    }, [])
    return (
        <div>
            {inventorys.length === 0 ?
                <div class="d-flex justify-content-center mt-5 mb-5">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                :

                <div class="row mt-5 mb-5 width-control g-3">
                    {
                        inventorys.map(inventory => <HomeInventory
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