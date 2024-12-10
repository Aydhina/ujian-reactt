import React from 'react';
import './App.css'

const Search = () => {
    return (
        <section id="search" className="py-5" style={{ backgroundColor: "#FFF4E7" }}>
            <div className="container text-center">
                <h1 className="fw-bold mb-3">Lets Design Together</h1>
                <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
                    Aliquet donec morbi convallis pretium.
                </p>
            </div>

            <div className="container-fluid text-center mt-4">
                <form className="d-flex justify-content-center align-items-center" role="form" style={{ gap: "10px" }}>
                    <input
                        className="form-control"
                        type="email"
                        placeholder="Enter Your Email"
                        aria-label="Enter Your Email"
                        style={{
                            borderRadius: "10px",
                            padding: "10px 15px",
                            border: "1px solid #ddd",
                            maxWidth: "300px",
                        }}
                    />
                    <button className="btn custom-btn" type="submit">
                        Contact Me
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Search;
