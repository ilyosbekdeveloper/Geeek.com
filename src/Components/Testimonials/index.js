import React from 'react'
import Testimon from '../../styles/Testimonials2'
import { Container } from 'react-bootstrap'
import Img1 from '../../static/img/avatar-1.d2fd9642fd3628734b27.jpg'
import Img2 from '../../static/img/avatar-2.397cdd4b772a83b9166e.jpg'

export default function Testimonials({darkMode, ...props}) {
  return (
    <Testimon darkMode={darkMode}>
        <div className="testimonial">
            <Container>
                <div className="testtitle text-center pb-3">TESTIMONIALS</div>
                <h1 className="displayy-4 text-center">What our learners are saying</h1>
                <div className="test-par  mb-5 pb-5"><p>12+ million people are already learning on Geeks</p></div>

                <div className="tests mt-5 row">
                    <div className="test col-6 me-3">
                        <p className="par">
                        The generated lorem Ipsum is therefore always free from repetition, 
                        injected humour, or words etc generate lorem Ipsum which looks racteristic reasonable.
                        </p>
                        <div className="footer">
                            <div className="footerImg"><img src={Img1} alt="" /></div>
                            <div className="footer-title">Barry Watson</div>
                            <div className="footer-par">Web Developer,UK</div>
                        </div>
                    </div>
                    <div className="test col-6 ms-3">
                        <p className="par">
                        Lorem ipsum dolor sit amet, consectetur adipi scing elit. Sed vel felis imperdiet, 
                        lacinia metus malesuada diamamus rutrum turpis leo, id tincidunt magna sodales.
                        </p>
                        <div className="footer footer2">
                            <div className="footerImg"><img src={Img2} alt="" /></div>
                            <div className="footer-title">Linda Shenoy</div>
                            <div className="footer-par">Developer and Bootcamp Instructor</div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </Testimon>
  )
}
