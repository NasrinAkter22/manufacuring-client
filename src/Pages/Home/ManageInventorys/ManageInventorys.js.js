import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventorys = () => {
    const [manageInv, setManageInv] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventorys')
            .then(res => res.json())
            .then(data => setManageInv(data))
    }, [])
    return (
        <div>
            <Navbar />
            {manageInv.length === 0 ?
                <div class="d-flex justify-content-center mt-5 mb-5">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                :

                <div class="row mt-5 mb-5 width-control g-3">
                    {
                        manageInv.map(manageInvento => <ManageInventory
                            manageInvento={manageInvento}
                        ></ManageInventory>)
                    }
                </div>}
                <Footer />
        </div>
    );
};

export default ManageInventorys;