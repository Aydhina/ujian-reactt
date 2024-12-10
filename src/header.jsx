import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="main-container">
                <div className="nav">
                    <div className="logo">
                        <img src="foto/Logo.png" alt="logo"  style={{ width: '200px' }} />
                    </div>

                    <nav>
                        <ul>
                            <li><a href="#services">Home</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Contact</a></li>
                            <li>
                                <a href="#" target="_blank">
                                    <button class="btn">Resume</button>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div class="burger">
                        <div class="line-1"></div>
                        <div class="line-2"></div>
                        <div class="line-3"></div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header