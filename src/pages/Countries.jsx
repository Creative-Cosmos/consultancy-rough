import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import CountriesSection from '../components/home/Countries'

function Countries() {
  return (
    <>
      <Breadcrumb title="Countries We Offer" subtitle="Countries" />
      <CountriesSection />
    </>
  )
}

export default Countries
