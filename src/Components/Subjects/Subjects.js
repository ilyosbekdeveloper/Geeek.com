import React from 'react'
import Subject from '../../styles/Subjects'
import { Container } from 'react-bootstrap'
import Shakl1 from '../../static/img/shakl1.svg'
import Shakl2 from '../../static/img/shakl2.svg'
import Shakl3 from '../../static/img/shakl3.svg'
import Shakl4 from '../../static/img/shakl4.svg'

export default function Subjects({darkMode, ...props}) {
  return (
    <Subject darkMode={darkMode}>
        <div className="subject">
            <Container>
                    <div className="courseDescription pb-3 text-center">
                        <div className="top text-center">COURSE DESCRIPTION</div>
                        <div className="display-4 text-center pt-2">What will you learn?</div>
                        <div className="titlePar pt-3 pb-4">Vanilla JS is a fast, lightweight, cross-platformframework for building incredible, powerful JavaScript applications.</div>
                    </div>

                    <div className="boxes row">
                        <div className="col-6">
                            <div className="box p-1">
                                <div className="card">
                                    <div className="card-body m-3">
                                        <div className="box-title row">
                                            <div className="col-2">
                                                <img src={Shakl1}/>
                                            </div>
                                            <div className="col-10">
                                                <div className="int">
                                                    <h5>Introduction to JavaScript</h5>
                                                    <span className='free'>Free</span>
                                                </div>
                                                <div className="crs py-2">
                                                    <span className="crs1">Course 1</span>
                                                    <span className="crs3">6 Lessons</span>
                                                    <span className="crs3">1 HOUR 12 MIN</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cardPar pt-4">
                                            <p>In et tempus dui, in porta dolor. Donec molestie a purus ut interdum. Donec quis felis dignissim, luctus libero ornare</p>
                                        </div>

                                        <div className="cardLink">
                                            <a href="#">View Chapter Details +</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box p-1">
                                <div className="card">
                                    <div className="card-body m-3">
                                        <div className="box-title row">
                                            <div className="col-2">
                                                <img src={Shakl3}/>
                                            </div>
                                            <div className="col-10">
                                                <div className="int">
                                                    <h5>JavaScript Beginning</h5>
                                                </div>
                                                <div className="crs py-2">
                                                    <span className="crs1">Course 1</span>
                                                    <span className="crs3">6 Lessons</span>
                                                    <span className="crs3">1 HOUR 12 MIN</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cardPar pt-4">
                                            <p>In et tempus dui, in porta dolor. Donec molestie a purus ut interdum. Donec quis felis dignissim, luctus libero ornare</p>
                                        </div>

                                        <div className="cardLink">
                                            <a href="#">View Chapter Details +</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box p-1">
                                <div className="card">
                                    <div className="card-body m-3">
                                        <div className="box-title row">
                                            <div className="col-2">
                                                <img src={Shakl2}/>
                                            </div>
                                            <div className="col-10">
                                                <div className="int">
                                                    <h5>Variables and Constants</h5>
                                                </div>
                                                <div className="crs py-2">
                                                    <span className="crs1">Course 1</span>
                                                    <span className="crs3">6 Lessons</span>
                                                    <span className="crs3">1 HOUR 12 MIN</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cardPar pt-4">
                                            <p>In et tempus dui, in porta dolor. Donec molestie a purus ut interdum. Donec quis felis dignissim, luctus libero ornare</p>
                                        </div>

                                        <div className="cardLink">
                                            <a href="#">View Chapter Details +</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box p-1">
                                <div className="card">
                                    <div className="card-body m-3">
                                        <div className="box-title row">
                                            <div className="col-2">
                                                <img src={Shakl4}/>
                                            </div>
                                            <div className="col-10">
                                                <div className="int">
                                                    <h5>Types and Operators</h5>
                                                </div>
                                                <div className="crs py-2">
                                                    <span className="crs1">Course 4</span>
                                                    <span className="crs3">6 Lessons</span>
                                                    <span className="crs3">1 HOUR 12 MIN</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cardPar pt-4">
                                            <p>In et tempus dui, in porta dolor. Donec molestie a purus ut interdum. Donec quis felis dignissim, luctus libero ornare</p>
                                        </div>

                                        <div className="cardLink">
                                            <a href="#">View Chapter Details +</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </div>
    </Subject>
  )
}
