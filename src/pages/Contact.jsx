import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

function Contact() {
  return (
    <>
      <Breadcrumb title="Contact Us" subtitle="Contact" />
      <div className="container-fluid contact overflow-hidden pb-5">
        <div className="container py-5">
          <div className="row g-5 mb-5">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="contact-item">
                <div className="pb-5">
                  <h1 className="display-5 mb-4">Get In Touch With Us</h1>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam
                    cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab?
                    Repellat!
                  </p>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-light d-flex align-items-center justify-content-center mb-3" style={{ width: '90px', height: '90px', borderRadius: '10px' }}>
                    <i className="fa fa-home fa-2x text-primary"></i>
                  </div>
                  <div className="ms-4">
                    <h4>Addresses</h4>
                    <p className="mb-0">123 Street New York, USA</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-light d-flex align-items-center justify-content-center mb-3" style={{ width: '90px', height: '90px', borderRadius: '10px' }}>
                    <i className="fa fa-phone-alt fa-2x text-primary"></i>
                  </div>
                  <div className="ms-4">
                    <h4>Mobile</h4>
                    <p className="mb-0">+012 345 67890</p>
                    <p className="mb-0">+012 345 67890</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-light d-flex align-items-center justify-content-center mb-3" style={{ width: '90px', height: '90px', borderRadius: '10px' }}>
                    <i className="fa fa-envelope-open fa-2x text-primary"></i>
                  </div>
                  <div className="ms-4">
                    <h4>Email</h4>
                    <p className="mb-0">info@example.com</p>
                    <p className="mb-0">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
              <form>
                <div className="row g-3">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="phone" className="form-control" id="phone" placeholder="Phone" />
                      <label htmlFor="phone">Your Phone</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="project" placeholder="Project" />
                      <label htmlFor="project">Your Project</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '160px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
