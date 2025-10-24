import React from 'react'

function Breadcrumb({ title, subtitle }) {
  return (
    <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
        <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">
          {title}
        </h3>
        <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-primary">{subtitle}</li>
        </ol>
      </div>
    </div>
  )
}

export default Breadcrumb
