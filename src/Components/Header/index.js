import React, { useState } from 'react'
import Logo from '../../static/img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faChevronDown, faCube, faEllipsis, faFile, faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header2 from '../../styles/Header'


export default function Header({themeChanger, changer, darkMode, ...props}) {


  return (
    <Header2 darkMode={darkMode}>
        <header>
            <div className="row headerRow">
                <div className="col-8 d-flex align-items-center">
                    <div className="logo ps-3"><img src={Logo}  /></div>

                    <div className="drops">
                        <div className="drop drop1 d-flex align-items-center px-2">
                            <div className="hoverLink">
                                <div className="drop-title ps-2 pe-1 py-3 d-flex align-items-center">Browse 
                                    <span><FontAwesomeIcon icon={faChevronDown} /></span>
                                </div>

                                <div className="dropHovered">
                                    <ul>
                                        <li className='hoverLi'>
                                        <a href="#" className='d-flex align-items-center'>Web Development <FontAwesomeIcon icon={faAngleRight} className='ps-4' /></a>
                                            <div className="dropHovered1 insideHover">
                                                <ul>
                                                    <li><a href="#">Bootstrap</a></li>
                                                    <li><a href="#">React</a></li>
                                                    <li><a href="#">Angular</a></li>
                                                    <li><a href="#">Css</a></li>
                                                    <li><a href="#">Meteor</a></li>
                                                    <li><a href="#">Java</a></li>
                                                    <li><a href="#">JavaScript</a></li>
                                                    <li><a href="#">Vue js</a></li>
                                                    <li><a href="#">Tailwind css</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='hoverLi'>
                                            <a href="#" className='d-flex align-items-center'>Design <FontAwesomeIcon icon={faAngleRight} className='ps-5 ms-5' /></a>
                                            <div className="dropHovered1 insideHover">
                                                <ul>
                                                    <li><a href="#">Graphik Design</a></li>
                                                    <li><a href="#">PhotoShop</a></li>
                                                    <li><a href="#">UX UI Design</a></li>
                                                    <li><a href="#">Css</a></li>
                                                    <li><a href="#">Meteor</a></li>
                                                    <li><a href="#">Java</a></li>
                                                    <li><a href="#">JavaScript</a></li>
                                                    <li><a href="#">Icon Design</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#">Mobile App</a></li>
                                        <li><a href="#">IT Software</a></li>
                                        <li><a href="#">Marketing</a></li>
                                        <li><a href="#">Music</a></li>
                                        <li><a href="#">Life Style</a></li>
                                        <li><a href="#">Buisness</a></li>
                                        <li><a href="#">Photography</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="drop drop2 d-flex align-items-center">
                            <div className="hoverLink">
                                <div className="drop-title ps-2 pe-1 py-3 d-flex align-items-center">Landings 
                                    <span><FontAwesomeIcon icon={faChevronDown} /></span>
                                </div>

                                <div className="dropHovered">
                                    <ul>
                                        <span className='landings'>Landings</span>
                                        <li><a href="#">Courses<span className='new'>New</span></a></li>
                                        <li><a href="#">Lead Course</a></li>
                                        <li><a href="#">Request Access</a></li>
                                        <li><a href="#">SaaS</a></li>
                                        <li><a href="#">Job Listing <span className="new">New</span></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="drop drop3 d-flex align-items-center px-2">
                            <div className="hoverLink">
                                <div className="drop-title ps-2 pe-1 py-3 d-flex align-items-center">Pages 
                                    <span><FontAwesomeIcon icon={faChevronDown} /></span>
                                </div>

                                <div className="dropHovered">
                                    <ul>
                                        <li className='hoverLi'>
                                        <a href="#" className='d-flex align-items-center df-section'><span>Career</span> <FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                            <div className="dropHovered1 insideHover">
                                                <ul>
                                                    <li><a href="#">Course Single 1</a></li>
                                                    <li><a href="#">Course Single 2</a></li>
                                                    <li><a href="#">Course Single 3</a></li>
                                                    <li><a href="#">Course Single 4</a></li>
                                                    <li><a href="#">Course Single 5</a></li>
                                                    <li><a href="#">Course Single 6</a></li>
                                                    <li><a href="#">Course Single 7</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='hoverLi'>
                                            <a href="#" className='d-flex align-items-center df-section'><span>Career</span> <FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                            <div className="dropHovered1 insideHover">
                                                <ul>
                                                    <li><a href="#">Browthe Path</a></li>
                                                    <li><a href="#">Path Single</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='hoverLi'>
                                            <a href="#" className='d-flex align-items-center df-section'><span>Career</span> <FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                            <div className="dropHovered1 insideHover">
                                                <ul>
                                                    <li><a href="#">Listining</a></li>
                                                    <li><a href="#">Article</a></li>
                                                    <li><a href="#">Category</a></li>
                                                    <li><a href="#">Sidebar</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='hoverLi'>
                                            <a href="#" className='d-flex align-items-center df-section'><span>Career</span> <FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                            <div className="dropHovered1 insideHover">
                                                <ul>
                                                    <li><a href="#">Overiew</a></li>
                                                    <li><a href="#">Listening</a></li>
                                                    <li><a href="#">Opening</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='hoverLi'>
                                            <a href="#" className='d-flex align-items-center df-section'><span>Job</span> <span className="new">New</span> <FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                            <div className="dropHovered1 insideHover">
                                                <ul>
                                                    <li><a href="#">Home</a></li>
                                                    <li><a href="#">List</a></li>
                                                    <li><a href="#">Grid</a></li>
                                                    <li><a href="#">Single</a></li>
                                                    <li><a href="#">Company List</a></li>
                                                    <li><a href="#">Company Single</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='hoverLi'>
                                            <a href="#" className='d-flex align-items-center df-section'><span>Specitaly</span> <FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                            <div className="dropHovered1 insideHover">
                                                <ul>
                                                    <li><a href="#">Coming Soon</a></li>
                                                    <li><a href="#">Error 404</a></li>
                                                    <li><a href="#">Maintenance Mode</a></li>
                                                    <li><a href="#">Terms & Condations</a></li>
                                                </ul>
                                            </div>
                                        </li>

                                        <div className="br"></div>

                                        <li><a href="#">About</a></li>
                                        <li className='hoverLi'>
                                            <a href="#" className='d-flex align-items-center df-section'><span>Help Center</span> <FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                            <div className="dropHovered1 insideHover">
                                                <ul>
                                                    <li><a href="#">Help Center</a></li>
                                                    <li><a href="#">FA `Q</a></li>
                                                    <li><a href="#">Guide</a></li>
                                                    <li><a href="#">Guide Single</a></li>
                                                    <li><a href="#">Support</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#">Pricing</a></li>
                                        <li><a href="#">Compare Plan</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="drop drop4 d-flex align-items-center px-2">
                            <div className="hoverLink">
                                <div className="drop-title ps-2 pe-1 py-3 d-flex align-items-center">Acounts 
                                    <span><FontAwesomeIcon icon={faChevronDown} /></span>
                                </div>

                                <div className="dropHovered">
                                    <ul>
                                        <span className='landings'>Acounts</span>
                                        <li className='hoverLi'>
                                        <a href="#" className='d-flex align-items-center df-section'><span>Instructor</span> <FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                            <div className="dropHovered1 insideHover2">
                                                <ul>
                                                    <li className='instContainer'>
                                                        <span className="inst">Instructor</span>
                                                        <div className="instPar">
                                                            Instructor dashboard for manage courses and earning.
                                                        </div>
                                                    </li>
                                                    <div className="br"></div>
                                                    <li><a href="#">Course 1</a></li>
                                                    <li><a href="#">Course 2</a></li>
                                                    <li><a href="#">Course 3</a></li>
                                                    <li><a href="#">Course 4</a></li>
                                                    <li><a href="#">Course 5</a></li>
                                                    <li><a href="#">Course 6</a></li>
                                                    <li><a href="#">Earning</a></li>
                                                    <li className='insideHover3'>
                                                        <a href="#" className='d-flex align-items-center df-section'><span>Quiz</span> <span className="new">New</span><FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                                        <div className="hoverLi3">
                                                            <ul>
                                                                <li><a href="#">Browthe Path</a></li>
                                                                <li><a href="#">Path Single</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='hoverLi'>
                                            <a href="#" className='d-flex align-items-center df-section'><span>Career</span> <FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                            <div className="dropHovered1 insideHover2">
                                                <ul>
                                                    <li className='instContainer'>
                                                        <span className="inst">Students</span>
                                                        <div className="instPar">
                                                            Students dashboard to manage your courses and subscriptions.
                                                        </div>
                                                    </li>
                                                    <div className="br"></div>
                                                    <li><a href="#">Dashboard</a></li>
                                                    <li><a href="#">Subscriptions</a></li>
                                                    <li><a href="#">Paymets</a></li>
                                                    <li><a href="#">Billing Info</a></li>
                                                    <li><a href="#">Invoice</a></li>
                                                    <li><a href="#">Invoice Detalies</a></li>
                                                    <li><a href="#">Bookmarked</a></li>
                                                    <li><a href="#">My Path</a></li>
                                                    <li className='insideHover3'>
                                                        <a href="#" className='d-flex align-items-center df-section'><span>Quiz</span> <span className="new">New</span><FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                                        <div className="hoverLi3">
                                                            <ul className='quiz'>
                                                                <li><a href="#">Quiz</a></li>
                                                                <li><a href="#">Attempt</a></li>
                                                                <li><a href="#">Start</a></li>
                                                                <li><a href="#">Result</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li className='hoverLi'>
                                            <a href="#" className='d-flex align-items-center df-section'><span>Career</span> <FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                            <div className="dropHovered1 insideHover">
                                                <ul>
                                                    <li><a href="#">Listining</a></li>
                                                    <li><a href="#">Article</a></li>
                                                    <li><a href="#">Category</a></li>
                                                    <li><a href="#">Sidebar</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='hoverLi'>
                                            <a href="#" className='d-flex align-items-center df-section'><span>Career</span> <FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                            <div className="dropHovered1 insideHover">
                                                <ul>
                                                    <li><a href="#">Overiew</a></li>
                                                    <li><a href="#">Listening</a></li>
                                                    <li><a href="#">Opening</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='hoverLi'>
                                            <a href="#" className='d-flex align-items-center df-section'><span>Job</span> <span className="new">New</span> <FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                            <div className="dropHovered1 insideHover">
                                                <ul>
                                                    <li><a href="#">Home</a></li>
                                                    <li><a href="#">List</a></li>
                                                    <li><a href="#">Grid</a></li>
                                                    <li><a href="#">Single</a></li>
                                                    <li><a href="#">Company List</a></li>
                                                    <li><a href="#">Company Single</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='hoverLi'>
                                            <a href="#" className='d-flex align-items-center df-section'><span>Specitaly</span> <FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                            <div className="dropHovered1 insideHover">
                                                <ul>
                                                    <li><a href="#">Coming Soon</a></li>
                                                    <li><a href="#">Error 404</a></li>
                                                    <li><a href="#">Maintenance Mode</a></li>
                                                    <li><a href="#">Terms & Condations</a></li>
                                                </ul>
                                            </div>
                                        </li>

                                        <div className="br"></div>

                                        <li><a href="#">About</a></li>
                                        <li className='hoverLi'>
                                            <a href="#" className='d-flex align-items-center df-section'><span>Help Center</span> <FontAwesomeIcon icon={faAngleRight} className='pe-2' /></a>
                                            <div className="dropHovered1 insideHover">
                                                <ul>
                                                    <li><a href="#">Help Center</a></li>
                                                    <li><a href="#">FA `Q</a></li>
                                                    <li><a href="#">Guide</a></li>
                                                    <li><a href="#">Guide Single</a></li>
                                                    <li><a href="#">Support</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#">Pricing</a></li>
                                        <li><a href="#">Compare Plan</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="drop drop5 d-flex align-items-center">
                            <div className="hoverLink">
                                <div className="drop-title px-2 py-3 d-flex align-items-center">
                                    <span><FontAwesomeIcon icon={faEllipsis} /></span>
                                </div>

                                <div className="dropHovered">
                                    <ul className='docs'>
                                        <section className="doc1">
                                            <div className="docLeft"><FontAwesomeIcon icon={faFile} className='file pe-2' /></div>
                                            <div className="docRight">
                                                <div className="docTitle">Documentations</div>
                                                <p>Browse the all documentations</p>
                                            </div>
                                        </section>
                                        <section className="doc1">
                                            <div className="docLeft"><FontAwesomeIcon icon={faCube} className='file pe-2' /></div>
                                            <div className="docRight">
                                                <div className="docTitle">Changelog <span>v 2.0.1</span></div>
                                                <p>See what's new</p>
                                            </div>
                                        </section>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="drop6 me-2">
                                <span><FontAwesomeIcon icon={faSearch} className='search'/></span>
                                <input type="search" className='inp' placeholder='Search Courses' />
                            </div>

                        
                    </div>
                </div>

                <div className="col-4">
                    <div className="drop drop6 ps-3">
                            

                            <div className="rightHeader">
                                <div className="themeSection" onClick={themeChanger}>
                                    {
                                        changer === 'light' ? <FontAwesomeIcon icon={faSun} className='sun changer'/> :
                                        <FontAwesomeIcon icon={faMoon} className='moon changer'/>
                                    }
                                </div>
                                <div className="signBtn">Sign In</div>
                                <div className="signBtn signUp me-2">Sign Up</div>
                            </div>
                        </div>
                </div>
            </div>
        </header>
    </Header2>
  )
}
