import React from 'react';
import profilePhoto from '../public/assets/profilePhoto.jpeg';

import './aboutMe.css';

const AboutMePage = () => {
  return (
    <div className='aboutMe'>

      <div className='content'>
        <div className='textContent'>
        <h1>About Me : Ngai Cho Kan</h1>
          <p className='shortDescription'>
            I am a 38-year-old qualified accountant based in Hong Kong with over 12 years of experience in the accounting industry. 
            My expertise lies in preparing consolidation packages and financial reporting. Currently, I am pursuing studies to 
            become a software engineering technician. I believe that my extensive professional experience combined with my developing 
            software engineering skills will be a valuable asset to your company.
          </p>
          <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
            <button className='resumeButton'>View My Resume</button>
          </a>
        </div>
        <img src={profilePhoto} alt="Ngai Cho Kan" className='profilePhoto' />
      </div>
    </div>
  )
}
export default AboutMePage
