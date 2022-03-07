import React from 'react'
import AirBnbExp from '../images/airbnb-photo.png'

const Hero = () => {
  return (
    <section className='hero'>
        <div>
          <h1 className='hero--h1'>Online Experiences</h1>
          <p className="hero--p">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
        <img className='hero--photo' src={AirBnbExp} alt="" />
    </section>
  )
}

export default Hero