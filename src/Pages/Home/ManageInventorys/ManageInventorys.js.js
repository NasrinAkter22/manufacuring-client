import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventorys = () => {
    const [manageInv, setManageInv] = useState([]);
    useEffect(() => {
        fetch(`https://intense-springs-99541.herokuapp.com/inventorys`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <Navbar />
            {manageInv.length === 0 ?
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :

                <div className="row mt-5 mb-5 width-control g-3">
                    {/*                     {
                        manageInv.map(manageInvento => <ManageInventory
                            key={manageInvento._id}
                            manageInvento={manageInvento}
                        ></ManageInventory>)
                    } */}
                    {
                        manageInv.map(manageInvento => console.log(manageInvento))
                    }
                </div>}
            <Footer />
        </div>
    );
};

export default ManageInventorys;