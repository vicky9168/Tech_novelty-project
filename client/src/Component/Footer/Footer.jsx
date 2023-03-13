import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className='main-footer'>
      {/* <div className='main1'> */}
     <div className='class1'>
      <h2>COMPANY</h2>
      {/* <ul> */}
        <li>About US</li>
        <li>Services</li>
        <li>Career</li>
        <li>Latest News</li>
      {/* </ul> */}
     </div>

     <div className='class2'>
      <h2>SUPPORT</h2>
      {/* <ul> */}
        <li>Social Responsibility</li>
        <li>Privacy Policy</li>
        <li>TERMS & Condition</li>
        <li>Contact Us</li>
      {/* </ul> */}
     </div>
     {/* </div> */}
     {/* <div className='main2'> */}
     <div className='class3'>
      <h2>ADDRESS</h2>
    <li>Savarkar Nagar,Pandharkar</li>
    <li>Email: contact@rptechnovelty.com</li>
    <li>Phone: +919172912622</li>
     </div>

     <div className='class4'>
     {/* <img src="https://rptechnovelty.com/assets/img/logo.svg" alt='logo' width='100px'/>
     */}
     <img src={logo} alt='logo' width='100px'/>
       <p><b>Follow us on</b></p>
       <div className='csocial'>
        <a><i class="fab fa-whatsapp fi"></i></a>
          <a><i class="fab fa-instagram fi"></i></a>
          <a><i class="fab fa-facebook-f fi"></i></a>
          <a><i class="fab fa-linkedin-in fi"></i></a>
          </div>
     </div>
    </div>
    // </div>
  )
}

export default Footer
