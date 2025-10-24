import React from 'react'

const countries = [
  { name: 'Brazil', img: '/img/country-1.jpg', flag: '/img/brazil.jpg', delay: '0.1s' },
  { name: 'india', img: '/img/country-2.jpg', flag: '/img/india.jpg', delay: '0.3s' },
  { name: 'New York', img: '/img/country-3.jpg', flag: '/img/usa.jpg', delay: '0.5s' },
  { name: 'Italy', img: '/img/country-4.jpg', flag: '/img/italy.jpg', delay: '0.7s' }
]

function CountryItem({ name, img, flag, delay }) {
  return (
    <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay={delay}>
      <div className="country-item">
        <div className="rounded overflow-hidden">
          <img src={img} className="img-fluid w-100 rounded" alt="Image" />
        </div>
        <div className="country-flag">
          <img src={flag} className="img-fluid rounded-circle" alt="Image" />
        </div>
        <div className="country-name">
          <a href="#" className="text-white fs-4">
            {name}
          </a>
        </div>
      </div>
    </div>
  )
}

function Countries() {
  return (
    <div className="container-fluid country overflow-hidden py-5">
      <div className="container">
        <div className="section-title text-center wow fadeInUp" data-wow-delay="0.1s" style={{ marginBottom: '70px' }}>
          <div className="sub-style">
            <h5 className="sub-title text-primary px-3">COUNTRIES WE OFFER</h5>
          </div>
          <h1 className="display-5 mb-4">Immigration & visa services following Countries</h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque
            itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!
          </p>
        </div>
        <div className="row g-4 text-center">
          {countries.map((country, index) => (
            <CountryItem key={index} name={country.name} img={country.img} flag={country.flag} delay={country.delay} />
          ))}
          <div className="col-12">
            <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">
              More Countries
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countries
