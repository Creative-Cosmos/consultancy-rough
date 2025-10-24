import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchModal from './SearchModal'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <>
      <div className="container-fluid nav-bar p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="display-5 text-secondary m-0">
              <img src="/img/brand-logo.png" className="img-fluid" alt="" />
              Travisa
            </h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className={`nav-item nav-link ${isActive('/')}`}>
                Home
              </Link>
              <Link to="/about" className={`nav-item nav-link ${isActive('/about')}`}>
                About
              </Link>
              <Link to="/service" className={`nav-item nav-link ${isActive('/service')}`}>
                Service
              </Link>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link" data-bs-toggle="dropdown">
                  <span className="dropdown-toggle">Pages</span>
                </a>
                <div className="dropdown-menu m-0">
                  <Link to="/feature" className="dropdown-item">
                    Feature
                  </Link>
                  <Link to="/countries" className="dropdown-item">
                    Countries
                  </Link>
                  <Link to="/testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                  <Link to="/training" className="dropdown-item">
                    Training
                  </Link>
                  <Link to="/404" className="dropdown-item">
                    404 Page
                  </Link>
                </div>
              </div>
              <Link to="/contact" className={`nav-item nav-link ${isActive('/contact')}`}>
                Contact
              </Link>
            </div>
            <button
              className="btn btn-primary btn-md-square border-secondary mb-3 mb-md-3 mb-lg-0 me-3"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fas fa-search"></i>
            </button>
            <a href="" className="btn btn-primary border-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0">
              Get A Quote
            </a>
          </div>
        </nav>
      </div>
      <SearchModal />
    </>
  )
}

export default Navbar
