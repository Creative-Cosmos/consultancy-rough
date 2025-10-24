import React from 'react'

const featureItems = [
  {
    icon: 'fas fa-dollar-sign fa-4x text-primary',
    title: 'Cost-Effective',
    description: 'Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,',
    delay: '0.1s'
  },
  {
    icon: 'fab fa-cc-visa fa-4x text-primary',
    title: 'Visa Assistance',
    description: 'Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,',
    delay: '0.3s'
  },
  {
    icon: 'fas fa-atlas fa-4x text-primary',
    title: 'Faster Processing',
    description: 'Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,',
    delay: '0.5s'
  },
  {
    icon: 'fas fa-users fa-4x text-primary',
    title: 'Direct Interviews',
    description: 'Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,',
    delay: '0.7s'
  }
]

function FeatureItem({ icon, title, description, delay }) {
  return (
    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={delay}>
      <div className="feature-item text-center p-4">
        <div className="feature-icon p-3 mb-4">
          <i className={icon}></i>
        </div>
        <div className="feature-content d-flex flex-column">
          <h5 className="mb-3">{title}</h5>
          <p className="mb-3">{description}</p>
          <a className="btn btn-secondary rounded-pill" href="#">
            Read More<i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

function Features() {
  return (
    <div className="container-fluid features overflow-hidden py-5">
      <div className="container">
        <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="sub-style">
            <h5 className="sub-title text-primary px-3">Why Choose Us</h5>
          </div>
          <h1 className="display-5 mb-4">Offer Tailor Made Services That Our Client Requires</h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque
            itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!
          </p>
        </div>
        <div className="row g-4 justify-content-center text-center">
          {featureItems.map((item, index) => (
            <FeatureItem key={index} icon={item.icon} title={item.title} description={item.description} delay={item.delay} />
          ))}
          <div className="col-12">
            <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">
              More Features
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
