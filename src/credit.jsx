import React from 'react'

const Credit = () => {
    return (
        <div className="credit d-flex flex-column align-items-center py-3">
            {/* Logo */}
            <div className="logo-credit mb-3">
                <img src="foto/Logo.png" alt="Logo" />
            </div>

            {/* Navigation Links */}
            <div className="link">
                <ul className="hmm justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Testimonials</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Contact</a>
                    </li>
                </ul>
            </div>

            {/* Social Media Links */}
            <div className="sosmed mt-4 d-flex">
                <a href="#" className="text-dark mx-2">
                    <img src="foto/Instagram.png" alt="Instagram" width="20" />
                </a>
                <a href="#" className="text-dark mx-2">
                    <img src="foto/Twitter.png" alt="Twitter" width="20" />
                </a>
                <a href="#" className="text-dark mx-2">
                    <img src="foto/Facebook.png" alt="Facebook" width="20" />
                </a>
                <a href="#" className="text-dark mx-2">
                    <img src="foto/LinkedIn.png" alt="LinkedIn" width="20" />
                </a>
            </div>
        </div>
    )
}

export default Credit
