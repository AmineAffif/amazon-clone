import React from 'react';
import './css/Product.css';

const Product = () => {
    return (
        <div className='product'>
            <div className='product__info'>
                <p className='product__title'>The History of Graphic Design. Vol. 2, 1960–Today --multilingual (Multilingual Edition)</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>48,98</strong>
                </p>
                <div className='product__rating'>
                    <img className='product__ratingStar' src="http://pngimg.com/uploads/star/star_PNG1575.png" alt="star-rating-icon"/>
                </div>
            </div>
            <img className='product__image' src="https://images-na.ssl-images-amazon.com/images/I/51FWXvEOYnL._SX347_BO1,204,203,200_.jpg" alt="cover-book-The History of Graphic Design. Vol. 2, 1960–Today --multilingual (Multilingual Edition)"/>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;
