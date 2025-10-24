import React, { useEffect } from 'react'
import Carousel from '../components/home/Carousel'
import About from '../components/home/About'
import CounterFacts from '../components/home/CounterFacts'
import Services from '../components/home/Services'
import Features from '../components/home/Features'
import Countries from '../components/home/Countries'
import TestimonialSection from '../components/home/TestimonialSection'
import Training from '../components/home/Training'
import ContactSection from '../components/home/ContactSection'

function Home() {
  useEffect(() => {
    if (window.jQuery && window.jQuery('[data-toggle="counter-up"]').length) {
      window.jQuery('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
      })
    }

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
      <Carousel />
      <About />
      <CounterFacts />
      <Services />
      <Features />
      <Countries />
      <TestimonialSection />
      <Training />
      <ContactSection />
    </>
  )
}

export default Home
