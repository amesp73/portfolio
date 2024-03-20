import React from 'react'
import "./About.css";

function About() {
  return (
    <section className='about'>
        <div className='aboutContent'>
            <span className='hello'>Hello,</span>
            <span className='intoText'>I'm 
                <span className='introName'> Ami</span>
                <br />a Web Developer
            </span>
            <p className='introParagraph'>
                I am a motivated web development graduate based in St. Louis, MO.
                <br />
                I have experience using Javascript, Java, React and SQL.
            </p>
        </div>
    </section>
  )
}

export default About