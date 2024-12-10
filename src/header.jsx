import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container1">
                <div className="nav">
                    <div className="logo">
                        <img src="/foto/Logo.png" alt="logo"  style={{ width: '200px' }} />
                    </div>

                    <nav>
                        <div className="pilihan">
                        <ul>
                            <li><a href="#services">Home</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contach">Contact</a></li>
                            <li>
                                <a href="#wwww" >
                                    <button className="btn-header">Download CV</button>
                                </a>
                            </li>
                        </ul>
                        </div>
                    </nav>

                   
                </div>

            </div>
        </header>
    );
};

export default Header