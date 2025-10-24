import React from 'react'

function CounterFacts() {
  return (
    <div className="container-fluid counter-facts py-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
            <div className="counter">
              <div className="counter-icon">
                <i className="fas fa-passport"></i>
              </div>
              <div className="counter-content">
                <h3>Visa Categories</h3>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="counter-value" data-toggle="counter-up">
                    31
                  </span>
                  <h4 className="text-secondary mb-0" style={{ fontWeight: '600', fontSize: '25px' }}>
                    +
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
            <div className="counter">
              <div className="counter-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="counter-content">
                <h3>Team Members</h3>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="counter-value" data-toggle="counter-up">
                    377
                  </span>
                  <h4 className="text-secondary mb-0" style={{ fontWeight: '600', fontSize: '25px' }}>
                    +
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
            <div className="counter">
              <div className="counter-icon">
                <i className="fas fa-user-check"></i>
              </div>
              <div className="counter-content">
                <h3>Visa Process</h3>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="counter-value" data-toggle="counter-up">
                    4.9
                  </span>
                  <h4 className="text-secondary mb-0" style={{ fontWeight: '600', fontSize: '25px' }}>
                    K
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div className="counter">
              <div className="counter-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="counter-content">
                <h3>Success Rates</h3>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="counter-value" data-toggle="counter-up">
                    98
                  </span>
                  <h4 className="text-secondary mb-0" style={{ fontWeight: '600', fontSize: '25px' }}>
                    %
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterFacts
