import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './contactPage.css';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_eg93nz8',
      'template_mnqokq9',
      form.current,
      'mOQeRwwKWeMui_-Ik' 
    )
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        navigate('/'); 
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
  };

  return (
    <div className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Please reach out to me through any of the following methods:</p>
          <div className="contact-details">
            <p>Email: <a href="mailto:cngai11@my.centennialcollege.ca">cngai11@my.centennialcollege.ca</a></p>
            <p>Phone: <a href="tel:+1234567890">+123-456-7890</a></p>
            <p>LinkedIn: <a href="https://hk.linkedin.com/in/cho-kan-ngai-74ba0b162" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
          </div>
        </div>
      </div>
      <div id="contact">
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunity</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className='name' placeholder='Your Name' name='your_name' required />
          <input type='email' className='email' placeholder='Your Email' name='your_email' required />
          <textarea className='msg' name='message' rows='5' placeholder='Your Message' required></textarea>
          <button type='submit' className="submitBtn">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default ContactPage;
