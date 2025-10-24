import React from 'react'

function BackToTop() {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <a href="#" className="btn btn-primary btn-lg-square back-to-top" onClick={scrollToTop} style={{ display: 'none' }}>
      <i className="fa fa-arrow-up"></i>
    </a>
  )
}

export default BackToTop
