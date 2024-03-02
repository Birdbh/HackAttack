import React from 'react'
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Testimonial from '../../components/Testimonials/Testimonial';
function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Testimonial/>
    </div>
  )
}

export default Home