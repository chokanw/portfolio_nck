import React from 'react'
import './servicesPage.css';
import HtmlImage from '../public/assets/services/html.png'
import CssImage from '../public/assets/services/css.png'
import ReactImage from '../public/assets/services/react.png'
import CsharpImage from '../public/assets/services/c-sharp.png'
import JsImage from '../public/assets/services/java-script.png'
import JavaImage from '../public/assets/services/java.png'

const ServicesPage = () => {
  return (
    <div className='services'>
      <h1 className='serviceTitle'>My Services</h1> 
      <p className='serviceDesc'>
      I offer a range of services in web and software development, including expertise in HTML, CSS, React,<br/> C#, JavaScript, and Java.
       With these skills, I can create dynamic, responsive websites,<br/> and robust software applications tailored to meet your needs.
      </p>
      <div className="serviceImg">
       <img src={HtmlImage} alt="Service" className="serviceImg" />
        <img src={CssImage} alt="Service" className="serviceImg" />
        <img src={ReactImage} alt="Service" className="serviceImg" />
        <img src={CsharpImage} alt="Service" className="serviceImg" />
        <img src={JsImage} alt="Service" className="serviceImg" />
        <img src={JavaImage} alt="Service" className="serviceImg" />
      </div>

    </div>
  )
}

export default ServicesPage
