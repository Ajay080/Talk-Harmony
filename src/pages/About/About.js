import React from 'react'
import NavbarAfter from '../../components/NavbarAfter1/NavbarAfter1'
import Pointers from '../../components/pointers/Pointers'
import SimranJoshi from './SimranJoshi.jpg'
import './About.css'
const About = () => {
  return (
    <>
    <NavbarAfter/>
    <Pointers/>
    <div className="details">
        <div className="details-header">
            <div className="header-text">
                The difference is in the first line of code. Instead of passing props as an argument, we destructured and passed in the variables as the function's argument.
                    Everything else remains the same.Note that you are not limited to just single variables as your props data – you can equally pass in functions and even data from objects.
            </div> 
            <div className="header-image">
            </div>
        </div>
        <hr/>
        <div className="team-head">
        <h1> Team</h1>
        </div>
        <div className="team">

            <div className='team-card'>
                <div className="team-image"></div>
                <div className="team-details">
                    <h3>Ajay Singh</h3>
                    <a href="https://www.pluralsight.com/">LinkedIn </a>
                </div>
            </div>

            <div className='team-card'>
                <div className="team-image"></div>
                <div className="team-details">
                    <h3>Rishabh Singh</h3>
                    <a href="https://www.pluralsight.com/">LinkedIn </a>
                </div>
            </div>

            <div className='team-card'>
                <div className="team-image"></div>
                <div className="team-details">
                    <h3>Ajay Singh</h3>
                    <a href="https://www.pluralsight.com/">LinkedIn </a>
                </div>
            </div>

            <div className='team-card'>
                <div className="team-image"></div>
                <div className="team-details">
                    <h3>Ajay Singh</h3>
                    <a href="https://www.pluralsight.com/">LinkedIn </a>
                </div>
            </div>

            <div className='team-card'>
                <div className="team-image"></div>
                <div className="team-details">
                    <h3>Ajay Singh</h3>
                    <a href="https://www.pluralsight.com/">LinkedIn </a>
                </div>
            </div>

            <div className='team-card'>
                <div className="team-image">
                    <img src={SimranJoshi} alt="simranjoshi"/>
                </div>
                <div className="team-details">
                    <h3>Simran Joshi</h3>
                    <a href="https://www.linkedin.com/in/simran-joshi-443105212/">LinkedIn </a>
                </div>
            </div>

            <div className='team-card'>
                <div className="team-image"></div>
                <div className="team-details">
                    <h3>Simran Joshi</h3>
                    <a href="https://www.pluralsight.com/">LinkedIn </a>
                </div>
            </div>

            <div className='team-card'>
                <div className="team-image"></div>
                <div className="team-details">
                    <h3>Ajay Singh</h3>
                    <a href="https://www.pluralsight.com/">LinkedIn </a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About