import React from 'react'
import Question2 from '../../styles/Question2'
import { Accordion } from 'react-bootstrap'

export default function Question({darkMode, ...props}) {
  return (
    <Question2 darkMode={darkMode}>
        <div className="question">
            <div className="container col-8 offset2">
                <div className="title text-center">NEED TO KNOW</div>
                <h1>Frequently Asked Questions.</h1>
                <div className="par text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non accumsan in, tempor dictum neque.</div>

                <div className="accordion">
                    <Accordion defaultActiveKey="0" flush>
                        
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='acTitle'>What is the cost of an online course</Accordion.Header>
                            <Accordion.Body >
                                Create beautiful website with this Geeks UI template. Get started building a site today.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header className='acTitle'>What do I need to take a course?</Accordion.Header>
                            <Accordion.Body >
                            Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header className='acTitle'>What do I receive for taking this course?</Accordion.Header>
                            <Accordion.Body >
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header className='acTitle'>What willI get if I subscribe to this Certificate?</Accordion.Header>
                            <Accordion.Body >
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                            </Accordion.Body>
                        </Accordion.Item>


                    </Accordion>
                </div>

                <div className="mt-5 text-center">
                    <button className='btn'>More questions? Visit the Learner Help Center.</button>
                </div>
            </div>
        </div>
    </Question2>
  )
}
