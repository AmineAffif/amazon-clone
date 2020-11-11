import React from 'react';
import './css/Footer.css';
import DropdownLanguage from "./DropdownLanguage";



const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='scrollToTopBtn'>
                    <span><a href="#top" id='toTopA'>Back to top</a></span>
                </div>
                <div className='footer__content'>
                    <div className='footer__part1'>
                        <div className='footer__collumn'>
                            <h3>Get to Know Us</h3>
                            <div className='footer__inside__collumn'>
                                <small><a href="#">Careers</a></small>
                                <small><a href="#">Blog</a></small>
                                <small><a href="#">About Amazon</a></small>
                                <small><a href="#">Substainability</a></small>
                                <small><a href="#">Investor Relations</a></small>
                                <small><a href="#">Amazon Devices</a></small>
                                <small><a href="#">Amazon Tours</a></small>
                            </div>

                        </div>
                        <div className='footer__collumn'>
                            <h3>Make Money with Us</h3>
                            <div className='footer__inside__collumn'>
                                <small><a href="#">Sell products on Amazon</a></small>
                                <small><a href="#">Sell apps on Amazon</a></small>
                                <small><a href="#">Become an Affiliate</a></small>
                                <small><a href="#">Advertise Your Products</a></small>
                                <small><a href="#">Self-Publish with Us</a></small>
                                <small><a href="#">Host an Amazon Hub</a></small>
                            </div>

                        </div>
                        <div className='footer__collumn'>
                            <h3>Amazon Payment Products</h3>
                            <div className='footer__inside__collumn'>
                                <small><a href="#">Amazon Business Card</a></small>
                                <small><a href="#">Shop with Points</a></small>
                                <small><a href="#">Reload Your Balance</a></small>
                                <small><a href="#">Amazon Currency Converter</a></small>
                            </div>

                        </div>
                    </div>
                    <div className='white_line_container'>
                        <div className='white_line'></div>
                    </div>
                    <div className='footer__part2'>
                        <span className='footer__logo_footer'>
                            <img id='logo_footer' src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon-logo"/>
                        </span>
                        <span className='footer__options__list'>

                            <DropdownLanguage/>

                        </span>
                        <span className='footer__part2_options'>

                            <span>USD - U.S. Dollar</span>
                            <span><img className='flag__img' src="https://i.pinimg.com/originals/2e/27/30/2e2730e0f69823b94989647b08806203.png" alt="country-flag-icon"/>United States</span>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Footer;
