import React from 'react';
import './App.css';

const Project = () => {
    return (
        <section>
            <div className="project container text-center py-5">
                <h2 className="project-title mb-3">My Projects</h2>
                <p className="project-description mb-4">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
                    Aliquet donec morbi convallis pretium.
                </p>

                <div className="btn-kelompok d-flex justify-content-center gap-2">
                    <button type="button" className="button-project btn btn-outline-dark">All</button>
                    <button type="button" className="button-project btn btn-outline-dark">UI/UX</button>
                    <button type="button" className="button-project btn btn-outline-dark">Web Design</button>
                    <button type="button" className="button-project btn btn-outline-dark">App Design</button>
                    <button type="button" className="button-project btn btn-outline-dark">Graphic Design</button>
                </div>
            </div>
            <div class="container">
                <div class="row">

                    <div class="col-md-4 mb-4">
                        <div class="card border-0">
                            <img
                                src="/foto/Web1.png"
                                class="card-img-top"
                                alt="AirCalling Landing Page Design"
                            />
                            <div class="card-body">
                                <p class="text-orange mb-1">Web Design</p>
                                <h5 class="card-title">AirCalling Landing Page Design</h5>
                                <button class="btn btn-orange mt-2">Detail</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mb-4">
                        <div class="card border-0">
                            <img
                                src="/foto/Web2.png"
                                class="card-img-top"
                                alt="AirCalling Landing Page Design"
                            />
                            <div class="card-body">
                                <p class="text-orange mb-1">Web Design</p>
                                <h5 class="card-title">Business Landing Page Design</h5>
                                <button class="btn btn-orange mt-2">Detail</button>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4 mb-4">
                        <div class="card border-0">
                            <img
                                src="/foto/Web3.png"
                                class="card-img-top"
                                alt="AirCalling Landing Page Design"
                            />
                            <div class="card-body">
                                <p class="text-orange mb-1">Web Design</p>
                                <h5 class="card-title">Ecom Web page Design</h5>
                                <button class="btn btn-orange mt-2">Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Project;
