import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Spinner from './components/Spinner'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Feature from './pages/Feature'
import Countries from './pages/Countries'
import Testimonial from './pages/Testimonial'
import Training from './pages/Training'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  useEffect(() => {
    if (window.WOW) {
      new window.WOW().init()
    }

    const handleScroll = () => {
      const navBar = document.querySelector('.nav-bar')
      const backToTop = document.querySelector('.back-to-top')

      if (window.scrollY > 45) {
        navBar?.classList.add('sticky-top', 'shadow-sm')
      } else {
        navBar?.classList.remove('sticky-top', 'shadow-sm')
      }

      if (window.scrollY > 300) {
        if (backToTop) backToTop.style.display = 'flex'
      } else {
        if (backToTop) backToTop.style.display = 'none'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <Spinner />
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  )
}

export default App
