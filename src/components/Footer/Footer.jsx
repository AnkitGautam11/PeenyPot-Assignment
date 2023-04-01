import React from 'react'
import './footer.css';
import logo2 from './logo2.png'
import { AiFillTwitterCircle, AiFillYoutube, AiFillFacebook, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <div className='container1'>
        <div className="container2">
            <div className="company">
                <div className="company-logo">
                    <img src={logo2} alt="" />
                </div>
                <p>Join the revolution and see how easy 
                    <br>
                    </br>
                    Middle makes home loans
                </p>
            </div>
            <div className="info-section">
                <div className="company-info">
                    <h3>Company</h3>
                    <p>Contact</p>
                </div>
                <div className="aboutUs-info">
                    <h3>Who we help</h3>
                    <p>Customers</p>
                    <p>Brokers</p>
                    <p>Lenders</p>
                </div>
                <div className="findUs">
                    <h3>Follow Us On</h3>
                    <AiFillFacebook size='45px'/>
                    <AiFillTwitterCircle size='45px'/>
                    <AiFillYoutube size='45px'/>
                    <AiFillLinkedin size='45px'/>
                </div>
            </div>
        </div>
        <div className="bottom-section">
            <hr/>
            <div className="copyright">
                <div>© 2023 Penny Pot | ABN 99 649 575 315 | Australian Credit License 536443</div>
                    <div className='termsNconditions'>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Privacy Collection Notice</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer