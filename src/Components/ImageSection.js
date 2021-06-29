import React from 'react';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <h4>I am<span> Rodrigo Pacheco</span></h4>
                <p className="about-text">
                I'm a creative front-end developer wanting to keep learning. 
                My goal is to become a full-stack developer. 
                One of my preferred language at the moment is python
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Languages</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Rodrigo Pacheco Elias</p>
                        <p>: 23</p>
                        <p>: Spanish, English(mid-level)</p>
                        <p>: Argentina, Buenos Aires</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;
