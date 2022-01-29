import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressOne = (props) => {
    return (
        // Start Single Progressbar 
        <div className={`rn-progress-bar ${props.ProgressStyle}`}>
            <div className="single-progress">
                <h6 className="title">Designing</h6>
                <ProgressBar now={95} />
                <span className="label">95%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">Managment</h6>
                <ProgressBar now={85} />
                <span className="label">85%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">Marketing</h6>
                <ProgressBar now={75} />
                <span className="label">75%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">Development</h6>
                <ProgressBar now={80} />
                <span className="label">80%</span>
            </div>
        </div>
        // {/* // End Progress Bar */}
    )
}

export default ProgressOne
