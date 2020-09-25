import React, { Fragment } from 'react'
import CompanyCard from '../Components/CompanyCard'
import Hero from '../Components/Hero'

const Index = () => (
  <Fragment>
    <Hero/>
    <CompanyCard id="123" name="The Coca Cola Company" imageURL="https://fontmeme.com/images/Coca-Cola-Logo.jpg" numReports={192} score={3.2}/>
  </Fragment>
)

export default Index
