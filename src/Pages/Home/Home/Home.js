import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Inventorys from '../HomeInventorys/HomeInventorys';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Inventorys />
            
            <Footer />
        </div>
    );
};

export default Home;