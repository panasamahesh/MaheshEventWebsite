import React from 'react'
import './About.css'
import image from './assets/Snapchat-391763071 (2).jpg'
const About = () => {
  return (
    <div className='about'>

      <aside className='about-aside1'>
        <div className='about-image'>
          <img src={image} alt="photo" className='photo' />
        </div>
        <div className='about-about'>
          <aside className='about-section1'>
            <section className='aboutheader'>💍 About Us</section>
            <section>We are passionate wedding planners dedicated to turning your dream celebration into a beautiful reality. With creativity, precision, and attention to detail, we design unforgettable wedding experiences that reflect your love story.

              From elegant decorations to seamless event coordination, we handle every aspect of your special day so you can enjoy every moment stress-free.</section>
          </aside>
          <aside className='about-section2'>
            <section className='about-aside2-section2'>
              <aside>✨ What We Do</aside>

             <aside className='whatwedo'> Wedding Planning & Coordination

              Venue Selection & Decoration

              Theme & Concept Design

              Photography & Videography Management

              Entertainment & Guest Management
              </aside>
              </section>
            <section className='about-aside2-section2'>
             <aside> 💖 Our Mission</aside>

             <aside> To create magical, memorable, and stress-free weddings that exceed expectations and leave lasting impressions.
     
     <br />
     <br />
              🌸 Why Choose Us?

              Creative & Customized Themes

              Professional Team

              Budget-Friendly Packages

              On-time Execution

              Attention to Every Detail</aside>
            </section>
          </aside>
        </div>
      </aside>
      <aside></aside>

    </div>
  )
}

export default About