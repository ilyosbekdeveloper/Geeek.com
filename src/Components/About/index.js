import React from 'react'
import About2 from '../../styles/About2'
import { Container } from 'react-bootstrap'
import Instructor from '../../static/img/instructor-img.1ed9cc40ee4734876e12.png'

export default function About({darkMode, ...props}) {
  return (
    <About2 darkMode={darkMode}>
        <div className="About">
            <Container>
                <div className="col-10 offset-1 padd">
                    <div className="row">
                        <div className="col-7">
                            <h6 className="inst">YOUR INSTRUCTOR</h6>
                            <h3 className='name'>Hi, I’m <span>James Davies</span>, <br />
                                I will be taking you through lessons.
                            </h3>
                            <div className="titlePar">
                                <p>Create beautiful website with this Geeks UI template. Get started building a site today.</p>
                            </div>
                            <div className="br"></div>

                            <div className="students py-4">
                                <div className="st">
                                    <h1>45</h1>
                                    <p>Lessons</p>
                                </div>
                                <div className="st">
                                    <h1>10,500+</h1>
                                    <p>Students</p>
                                </div>
                                <div className="st">
                                    <h1>12+</h1>
                                    <p>Learning Hours</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-5 ps-5">
                            <img src={Instructor} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row works container">
                    <div className="worksTitle text-center pb-5">
                        TRUSTED BY TOP-TIER PRODUCT COMPANIES
                    </div>
                    <div className="work">
                        <div className="work-1"><img src="https://geeks-react.netlify.app/static/media/gray-logo-stripe.6b556d06bcc209f1c051bbdb399131f0.svg" alt="" /></div>
                        <div className="work-2"><img src="https://geeks-react.netlify.app/static/media/gray-logo-airbnb.5908aac3e8062333869d580f4b2f3d59.svg" alt="" /></div>
                        <div className="work-3"><img src="https://geeks-react.netlify.app/static/media/gray-logo-discord.2e0bae69d24feccf4efdd3f80746031b.svg" alt="" /></div>
                        <div className="work-4"><img src="https://geeks-react.netlify.app/static/media/gray-logo-intercom.870602b99ded665ecf0c2d5b2ffeb8c4.svg" alt="" /></div>
                        <div className="work-5"><img src="https://geeks-react.netlify.app/static/media/gray-logo-pinterest.928eaa29223a809cc5554847139d26a9.svg" alt="" /></div>
                        <div className="work-6"><img src="https://geeks-react.netlify.app/static/media/gray-logo-netflix.a47db6eaf2de7327844f27eb230da39c.svg" alt="" /></div>
                    </div>
                </div>
            </Container>
        </div>
    </About2>
  )
}
