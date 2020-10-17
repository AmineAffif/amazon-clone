import React from 'react';
import './css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
    return (
        <div className='header'>
            <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon-header-logo"/>
            <div className='header__search'>
                <input className='header__searchInput' type="text" placeholder='Search a product'/>
                <SearchIcon className='header__searchIcon'/>
            </div>
            <div className='header__nav'>

                <div className='header__navOption'>
                    <span className='header__optionLineOne'>
                        Hello guest
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign in
                    </span>
                </div>

                <div className='header__navOption'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>

                <div className='header__navOption'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>

                <div className='header__navOptionCart'>
                    <ShoppingBasketIcon/>
                    <span className='header__optionLineTwo headerBasketCount'>
                        0
                    </span>
                </div>

            </div>
        </div>
    );
};

export default Header;

