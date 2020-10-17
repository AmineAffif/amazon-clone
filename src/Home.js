import React from 'react';
import './css/Home.css';
import Product from "./Product";

const Home = () => {
    return (
        <div className='home__container'>
            <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" alt="home-image-slide-ads-for-amazon"/>
            <div className='home__row'>
                <Product/>
                <Product/>
                <Product/>
            </div>
            <div className='home__row'>
                {/* product */}
                {/* product */}
            </div>
            <div className='home__row'>
                {/* product */}
                {/* product */}
                {/* product */}
                {/* product */}
            </div>
            <div className='home__row'>
                {/* product */}
                {/* product */}
                {/* product */}
            </div>
        </div>
    );
};

export default Home;
