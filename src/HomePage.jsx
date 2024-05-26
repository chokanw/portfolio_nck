import React from 'react';
import {Link} from 'react-router-dom';
import profilePhoto from '../public/assets/profilePhoto.jpeg';
import './homePage.css';
const HomePage = () => {
  return (
      <section id="intro">
        <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='introName'>Ngai Cho Kan</span> <br/> Centennial College - <br/>Software Engineering Technician student</span>
          <p className='introPara'>I have a deep passion for programming, and one of my favorite aspects of it is web design.<br/>Creating visually appealing and user-friendly websites is something I truly love.</p>
          <Link to="/about">
            <button className='btn'>About Me</button>
          </Link>
        </div>
        <img src={profilePhoto} alt="profile" className='bg'/>
    </section>
  );
}
export default HomePage
