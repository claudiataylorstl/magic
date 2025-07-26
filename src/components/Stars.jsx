import React from 'react';
import './Stars.css'; 

function Stars() {
    return (
        <>
            <div className="stars-container text-white">
                <span className="star star-1">✦</span>
                <span className="star star-2">✦</span>
                <span className="star star-3">✦</span>
                <span className="star star-4">✦</span>
                <span className="star star-5">✦</span>
                <span className="star star-6">✦</span>
                <span className="star star-7">✦</span>
                <span className="star star-8">✦</span>
            </div>
            <div className="shooting-stars">
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
            </div>
        </>
    );
}

export default Stars;