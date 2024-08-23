import React from 'react';
const Footer = () => {

  const date = new Date();
const year = date.getFullYear();

  return (
    <div className='footer-section'>
      <ul className='media'>
        <li>©</li>
        <li>Copyright</li>
        <li>{year}</li>
      </ul>
      {/*<section>
      <ul className='about-me'>
        <li>About</li>
        <li>Project</li>
        <li>Resume</li>
      </ul>
      <ul className='contacts'>
        <li>Email</li>
        <li>Phone</li>
        <li>LinkedIn</li>
      </ul>
      <ul className='links'>
        <li>GitHub</li>
        <li>codeSanbox</li>
        <li>Website</li>
      </ul>
      </section>*/}
    </div>
  )
}

export default Footer;
