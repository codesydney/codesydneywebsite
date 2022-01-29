import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressTwo = (props) => {
    return (
        // Start Single Progressbar 
        <div className={`rn-progress-bar ${props.ProgressStyle}`}>
            <div className="single-progress custom-color--1">
                <h6 className="title">Designing</h6>
                <ProgressBar now={81} />
                <span className="label">81%</span>
            </div>

            <div className="single-progress custom-color--2">
                <h6 className="title">Managment</h6>
                <ProgressBar now={72} />
                <span className="label">72%</span>
            </div>

            <div className="single-progress custom-color--3">
                <h6 className="title">Marketing</h6>
                <ProgressBar now={89} />
                <span className="label">89%</span>
            </div>

            <div className="single-progress custom-color--4">
                <h6 className="title">Development</h6>
                <ProgressBar now={57} />
                <span className="label">57%</span>
            </div>
        </div>
        // {/* // End Progress Bar */}
    )
}

export default ProgressTwo
