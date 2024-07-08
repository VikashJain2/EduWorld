import React from 'react'
import "./Features.css"
import { feature } from './feature'
import FeaturesCard from '../FeaturesCard'
const Features = () => {
  return (
    <div className='features'>
      <h3 className='feature-heading' align="center">Awasome Features</h3>
      <h1 className="feature-desc" align="center">Browse Some <span>Awasome</span> Features</h1>

      <div className="feature-container">
        {
            feature.map(({id,icon,title,desc})=>{
                return <FeaturesCard key={id} icon={icon} title={title} desc={desc}/>
            })
        }
      </div>
    </div>
  )
}

export default Features
