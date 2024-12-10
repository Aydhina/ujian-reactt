import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const About = () => {
  return (
    <section id="hero" className="container">
      <div className="lign-items-center d-flex">
        <div className="mt-5 text-md-start text-center">
          <p className="fw-bold">Hi I am</p>
          <h2 className="text-warning fw-bold">Fawzi Sayed</h2>
          <h1 className="display-4 fw-bold">Website Developer</h1>
          <p className="mt-3 text-secondary">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra.
          </p>
          <button className="btn-about px-4 py-2 fw-bold">Hire Me</button>
        </div>

        <div className="text-center mt-4 ">
          <img
            src="/foto/pp.png"
            alt="Person Standing"
            className="img-fluid rounded-circle"
            style={{ width: '450px', height: '350px' }}
          />
          {/* Ikon Sosial Media */}
          <div className="d-flex justify-content-center mt-4">
            <a href="#" className="text-dark mx-2">
              <img src="/foto/Instagram.png" alt="Instagram" width="30" />
            </a>
            <a href="#" className="text-dark mx-2">
              <img src="/foto/Twitter.png" alt="Twitter" width="30" />
            </a>
            <a href="#" className="text-dark mx-2">
              <img src="/foto/Facebook.png" alt="Facebook" width="30" />
            </a>
            <a href="#" className="text-dark mx-2">
              <img src="/foto/LinkedIn.png" alt="LinkedIn" width="30" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
