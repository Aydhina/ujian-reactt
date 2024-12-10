import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-5" style={{ backgroundColor: "#FFF4E7" }}>
      <div className="container text-center">
        {/* Title Section */}
        <h1 className="fw-bold mb-3">Services</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          Aliquet donec morbi convallis pretium.
        </p>
      </div>

        {/* Services Grid */}
        <div className="row mt-2 g-4">
          {/* Service 1 */}
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm p-3 h-100">
              <div className="card-body">
                <img
                  src="foto/Vector1.png"
                  alt="UI/UX Design"
                  className="mb-3"
                  style={{ width: "50px", height: "50px" }}
                />
                <h5 className="card-title fw-bold">UI/UX</h5>
                <p className="card-text text-muted">
                  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm p-3 h-100">
              <div className="card-body">
                <img
                  src="foto/Vector2.png"
                  alt="Web Design"
                  className="mb-3"
                  style={{ width: "50px", height: "50px" }}
                />
                <h5 className="card-title fw-bold">Web Design</h5>
                <p className="card-text text-muted">
                  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm p-3 h-100">
              <div className="card-body">
                <img
                  src="foto/Vector3.png"
                  alt="App Design"
                  className="mb-3"
                  style={{ width: "50px", height: "50px" }}
                />
                <h5 className="card-title fw-bold">App Design</h5>
                <p className="card-text text-muted">
                  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
                </p>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm p-3 h-100">
              <div className="card-body">
                <img
                  src="foto/Vector4.png"
                  alt="Graphic Design"
                  className="mb-3"
                  style={{ width: "50px", height: "50px" }}
                />
                <h5 className="card-title fw-bold">Graphic Design</h5>
                <p className="card-text text-muted">
                  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Services;
