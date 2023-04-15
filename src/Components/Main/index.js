import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main2 from '../../styles/Main'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClock, faPerson, faVideo } from '@fortawesome/free-solid-svg-icons'
import Facebook from '../../static/img/facebook-3-logo-png-transparent.png'
import BgSvg from '../../static/img/bg.svg'

export default function Main({darkMode, ...props}) {
    return (
    <Main2 darkMode={darkMode}>
        <div className="main">
            <Container>
                <div className="row main-row">
                    <div className="col-7 main-title">
                        <div className="vanilla">
                            <h1 className='display-2'>Become a Vanilla JavaScript Developer</h1>
                            <p className='mb-4 mt-3'>In this tutorial, we are going to learn about JavaScript (Vanilla JS) - for building incredible, powerful JavaScript applications.</p>
                        </div>
                        <div className="results">
                            <div className="hour py-2">
                                <FontAwesomeIcon icon={faClock} className='ico pe-2'/>
                                <span>4 Hours</span>
                            </div>
                            <div className="hour py-2">
                                <FontAwesomeIcon icon={faVideo} className='ico pe-2'/>
                                <span>12 Videos</span>
                            </div>
                            <div className="hour py-2">
                                <FontAwesomeIcon icon={faPerson} className='ico pe-2'/>
                                <span>10,234+ Enrolled</span>
                            </div>
                        </div>
                        <button className="watchPreviewBtn my-4">Watch Preview</button>
                    </div>

                    <div className="col-5 createAccount">
                        <div className="card">
                            <div className="regesterSection card-body">
                                <div className="acTitle mb-4 mt-2"><h4>Create Free Account</h4></div>
                                <div className="card-icons">
                                    <div className="icon1 icon">
                                        <img src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-png-logo-rouge.png" alt="" />
                                        <span>Google</span>
                                    </div>
                                    <div className="icon2 icon">
                                        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="" />
                                        <span>Twitter</span>
                                    </div>
                                    <div className="icon3 icon">
                                        <img src={Facebook} alt="" />
                                        <span>Facebook</span>
                                    </div>
                                </div>
                                <div className="or my-4">OR</div>
                                <div className="inputsSection">
                                    <input type="email" className="inp my-2" placeholder='Email' />
                                    <input type="password" className="inp my-3" placeholder='Password' />
                                </div>
                                <button className="start mb-5">Start Courses for Free</button>
                            </div>
                            <div className="br my-3"></div>
                            <div className="fot">
                                <div className="footerPar">
                                    By continuing you accept the <a href="#">Terms of Use, Privacy Policy</a>, and <a href="#">Data Policy</a>
                                </div>
                            </div>
                        </div>
                        <div className="bgSvg"><img src={BgSvg} alt="" /></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="courses">
                            <div className="course">
                                <FontAwesomeIcon icon={faCheck} className='check me-2'/>
                                <span>Shareable Certificate</span>
                            </div>
                            <div className="course">
                                <FontAwesomeIcon icon={faCheck} className='check me-2'/>
                                <span>Flexible Deadlines</span>
                            </div>
                            <div className="course">
                                <FontAwesomeIcon icon={faCheck} className='check me-2'/>
                                <span>100% Online Courses</span>
                            </div>
                            <div className="course">
                                <FontAwesomeIcon icon={faCheck} className='check me-2'/>
                                <span>Approx.24 hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </Main2>
  )
}
