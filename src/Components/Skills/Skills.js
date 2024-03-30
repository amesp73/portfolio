import React from 'react';
import './Skills.css';
import Java from '../../Media/java.jpeg';
import SQL from '../../Media/sql.jpeg';
import ReactIcon from '../../Media/react.jpeg';

function Skills() {
  return (
    <section className='skills'>
        <span className='info'>What I Do</span>
        <span className='infoExt'>I am a passionate, newly graduated web design student through Launchode
        with experience working with React, Java, and SQL to build functional and 
        visually appealing websites.</span>
        <div className='skills'>
            <div className='skillBar'>
                <img src={ReactIcon} alt='React' className='skillBarImg'/>
                <div className='skillBarInfo'>
                    <h2>React</h2>
                    <p></p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={SQL} alt='SQL' className='skillBarImg'/>
                <div className='skillBarInfo'>
                    <h2>SQL</h2>
                    <p></p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Java} alt='Java' className='skillBarImg'/>
                <div className='skillBarInfo'>
                    <h2>Java</h2>
                    <p></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills