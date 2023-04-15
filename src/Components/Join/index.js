import React from 'react'
import Join2 from '../../styles/Join2'

export default function Join({darkMode, ...props}) {
  return (
    <Join2 darkMode={darkMode}>
        <div className="join">
            <div className="join-container text-center">
                <div className="title"><h2>Join more than 1 million learners worldwide</h2></div>
                <div className="par"><p>Effective learning starts with assessment. Learning a new skill is hard work—Signal makes it easier.</p></div>

                <div className="btns mt-5">
                    <button className="btn btn1 me-2">Start Learning for Free</button>
                    <button className="btn btn2 ms-2">Geeks for Buisness</button>
                </div>
            </div>
        </div>
    </Join2>
  )
}