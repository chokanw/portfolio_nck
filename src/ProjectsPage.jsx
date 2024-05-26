import React from 'react';
import cSharpAssignment from '../public/assets/cSharpAssignment.png';
import webDesignRetailAgent from '../public/assets/webDesignRetailAgent.png';
import personalPortfolio from '../public/assets/personalPortfolio.png';
import './projectsPage.css';
const ProjectsPage = () => {
  return (
    <div className='projects-container'>
        <h1 className='workstitle'>My Projects</h1>
        <span className='worksDesc'>These projects showcase my skills and passion for programming and web design.</span>
        <div className='project'>
          <img src={cSharpAssignment} alt='project1' className='projectImage'/>
          <div className='projectDetails'>
            <h2>Project 1: Using C# to development a calculator</h2>
            <p>Role: Developer</p>
            <p>Description: I developed a calculator using C#. This project allowed me to apply my knowledge of object-oriented programming and sharpen my skills in C#.</p>
            <p>Outcome: This experience enhanced my understanding of creating functional desktop applications and solidified my love for software development.</p>
          </div>
        </div>
        <div className='project'>
          <img src={webDesignRetailAgent} alt='project2' className='projectImage'/>
          <div className='projectDetails'>
            <h2>Project 2: Using HTML and CSS to develope a website for a property agent</h2>
            <p>Role:Developer</p>
            <p>I developed my own portfolio website using HTML and CSS. This project involved creating a visually appealing and responsive design to showcase property listings effectively.</p>
            <p>Outcome: This experience helped me hone my web design skills and reinforced my passion for creating beautiful and functional websites</p>
          </div>
        </div>
        <div className='project'>
          <img src={personalPortfolio} alt='project3' className='projectImage'/>
          <div className='projectDetails'>
            <h2>Project 3: Using REACT and CSS to develop a website of my own portfolio</h2>
            <p>Role:Developer</p>
            <p>I developed my own portfolio website using React and CSS. This project enabled me to showcase my skills and projects through a modern and interactive interface.</p>
            <p>Outcome: This project was a rewarding opportunity to demonstrate my expertise in web development and design</p>
          </div>
        </div>
    </div>
  )
}

export default ProjectsPage
