import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import TestimonialSection from '../components/home/TestimonialSection'

function Testimonial() {
  useEffect(() => {
    if (window.jQuery && window.jQuery('.testimonial-carousel').length) {
      window.jQuery('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 2 },
          992: { items: 2 },
          1200: { items: 2 }
        }
      })
    }
  }, [])

  return (
    <>
      <Breadcrumb title="Client Testimonials" subtitle="Testimonial" />
      <TestimonialSection />
    </>
  )
}

export default Testimonial
