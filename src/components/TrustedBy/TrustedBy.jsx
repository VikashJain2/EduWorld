import React from 'react'
import "./TrustedBy.css"
import google from '../../assets/google.png'
import microsoft from '../../assets/microsoft.png'
import amazon from '../../assets/amazon (1).png'
import facebook from '../../assets/facebook.png'
import accenture from '../../assets/accenture.png'
import netflix from '../../assets/netflix (1).png'
const TrustedBy = () => {
  return (
    <div className='trusted-by'>
      <h3 className="trusted-heading" align="center">Trusted By</h3>
      <h1 className="trusted-desc" align="center">500+ Leading <span>Universities</span> And Companies</h1>

      <div className="trusted-icons">
        <img src={google} alt="" />
        <img src={microsoft} alt="" />
        <img src={amazon} alt=""/>
        <img src={facebook} alt="" />
        <img src={accenture} alt="" />
        <img src={netflix} alt="" />
      </div>
    </div>
  )
}

export default TrustedBy
