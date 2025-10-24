import React from 'react'

const offices = [
  {
    location: 'Australia',
    phone: '+123.456.7890',
    email: 'travisa@example.com',
    address: '123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.',
    img: '/img/office-2.jpg',
    delay: '0.1s'
  },
  {
    location: 'Canada',
    phone: '(012) 0345 6789',
    email: 'travisa@example.com',
    address: '123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.',
    img: '/img/office-1.jpg',
    delay: '0.3s'
  },
  {
    location: 'United Kingdom',
    phone: '01234.567.890',
    email: 'travisa@example.com',
    address: '123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.',
    img: '/img/office-3.jpg',
    delay: '0.5s'
  },
  {
    location: 'India',
    phone: '+123.45.67890',
    email: 'travisa@example.com',
    address: '123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.',
    img: '/img/office-4.jpg',
    delay: '0.7s'
  }
]

function OfficeItem({ location, phone, email, address, img, delay }) {
  return (
    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={delay}>
      <div className="office-item p-4">
        <div className="office-img mb-4">
          <img src={img} className="img-fluid w-100 rounded" alt="" />
        </div>
        <div className="office-content d-flex flex-column">
          <h4 className="mb-2">{location}</h4>
          <a href="#" className="text-secondary fs-5 mb-2">
            {phone}
          </a>
          <a href="#" className="text-muted fs-5 mb-2">
            {email}
          </a>
          <p className="mb-0">{address}</p>
        </div>
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="container-fluid contact overflow-hidden pb-5">
      <div className="container py-5">
        <div className="office pt-5">
          <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3">Worlwide Offices</h5>
            </div>
            <h1 className="display-5 mb-4">Explore Our Office Worldwide</h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque
              itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {offices.map((office, index) => (
              <OfficeItem
                key={index}
                location={office.location}
                phone={office.phone}
                email={office.email}
                address={office.address}
                img={office.img}
                delay={office.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
