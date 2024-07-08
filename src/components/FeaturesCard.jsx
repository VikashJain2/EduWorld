import React from 'react'

const FeaturesCard = (props) => {
  return (
    <div className='feature-card'>
      <div className="feature-icon">
        <i className={props.icon}></i>
      </div>
      <h3 className="feature-title">{props.title}</h3>
      <p className="featurecard-desc">{props.desc}</p>
    </div>
  )
}

export default FeaturesCard
