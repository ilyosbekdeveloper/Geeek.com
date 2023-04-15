import React from 'react'
import Footer2 from '../../styles/Footer2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer({darkMode}) {
  return (
    <Footer2 darkMode={darkMode}>
        <footer>
            <div className="container">
                <div className="row footer">
                    <div className="col-4">
                        <img 
                        src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg" 
                        className='footerImg py-2' 
                        />

                        <p className="par pb-2">
                            Geek is feature-rich components and beautifully Bootstrap UIKit for developers, 
                            built with bootstrap responsive framework.
                        </p>
                        <div className="links">
                            <FontAwesomeIcon  icon={faFacebook} className='link ps-0'/>
                            <FontAwesomeIcon  icon={faTwitter} className='link'/>
                            <FontAwesomeIcon  icon={faInstagram} className='link'/>
                        </div>
                    </div>

                    <div className="col-2 offset-1">
                        <div className="title mb-3">Company</div>
                        <ul>
                            <li><a href="#" className='link'>About</a></li>
                            <li><a href="#" className='link'>Picing</a></li>
                            <li><a href="#" className='link'>Blog</a></li>
                            <li><a href="#" className='link'>Careers</a></li>
                            <li><a href="#" className='link'>Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-2">
                        <div className="title mb-3">Support</div>
                        <ul>
                            <li><a href="#" className='link'>Help and Support</a></li>
                            <li><a href="#" className='link'>Become Instructor</a></li>
                            <li><a href="#" className='link'>Get the app</a></li>
                            <li><a href="#" className='link'>FAQ's</a></li>
                            <li><a href="#" className='link'>Tutorial</a></li>
                        </ul>
                    </div>

                    <div className="col-3 faq">
                        <div className="title mb-3">Get in touch</div>
                        <p>339 McDermott Points Hettingerhaven, NV 15283</p>
                        <span className='phone'>Email: <a href="#">support@geeksui.com</a></span><br />
                        <span className='phone'>Phone: <span href="#">(000) 123 456 789</span></span>

                        <div className="imgs">
                            <a href="#">
                                <img className='pe-2' src="https://geeks-react.netlify.app/static/media/appstore.b464860c93223b3fc15fc7d026bcdca0.svg" alt="" />
                                <img className='ps-2' src="https://geeks-react.netlify.app/static/media/playstore.f23c3dcbde32e767203274d4b1749cc7.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="br"></div>

                <div className="row">
                    <div className="col-4">
                        <p className="rightPar">© 2023 Geeks-UI, Inc. All Rights Reserved</p>
                    </div>
                    <div className="col-8">
                        <ul>
                            <li><a href="#" className="link">Privacy Policy</a></li>
                            <li><a href="#" className="link">Cookie Notice</a></li>
                            <li><a href="#" className="link">Do Not Sell My Personal Information</a></li>
                            <li className='pe-0'><a href="#" className="link">Terms of Use</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </Footer2>
  )
}
