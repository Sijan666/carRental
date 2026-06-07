import React from 'react';

const Loader = () => {
    return (
        <div className="luxury-loader-wrapper">
            <div className="luxury-loader-content">
                <h1 className="luxury-brand">
                SPEEDY<span className="luxury-highlight">RENT</span>
                </h1>
                <div className="luxury-progress-container">
                    <div className="luxury-progress-bar"></div>
                </div>
                <p className="luxury-loading-text">PREPARING YOUR EXPERIENCE</p>
            </div>
        <style>
            {`
            /* 1. Pure Black Canvas for Ultra-Premium Feel */
            .luxury-loader-wrapper {
                position: fixed;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #000000; 
                z-index: 99999;
                font-family: 'Helvetica Neue', 'Inter', 'Arial', sans-serif;
                padding: 0 20px; /* Added padding to prevent touching edges on small screens */
                box-sizing: border-box;
            }
            .luxury-loader-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                max-width: 400px;
            }
            /* 2. Sophisticated Letter Spacing Animation (Desktop Base) */
            .luxury-brand {
                font-size: 28px;
                font-weight: 300;
                color: #ffffff;
                margin-bottom: 20px;
                text-transform: uppercase;
                animation: fadeScaleDesktop 2s ease-out forwards;
                white-space: nowrap; /* Prevents text from breaking into two lines */
            }
            .luxury-highlight {
                font-weight: 700;
                color: #E30022; /* Speedy Rent Brand Red */
                margin-left: 8px;
            }
            /* 3. Hairline Progress Track */
            .luxury-progress-container {
                width: 70%;
                height: 1px;
                background-color: rgba(255, 255, 255, 0.1);
                position: relative;
                overflow: hidden;
            }
            /* 4. Sweeping Red Line (Left to Right and out) */
            .luxury-progress-bar {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-color: #E30022;
                transform-origin: left;
                animation: fillProgress 2s cubic-bezier(0.8, 0, 0.2, 1) infinite;
            }
            /* 5. Minimal Loading Text (Desktop Base) */
            .luxury-loading-text {
                margin-top: 15px;
                font-size: 10px;
                color: rgba(255, 255, 255, 0.3);
                letter-spacing: 4px;
                text-align: center;
                animation: pulseText 1.5s ease-in-out infinite alternate;
            }
            /* --- Desktop Animations --- */
            @keyframes fadeScaleDesktop {
                0% { opacity: 0; transform: scale(0.95); letter-spacing: 4px; }
                100% { opacity: 1; transform: scale(1); letter-spacing: 8px; }
            }
            @keyframes fillProgress {
                0% { transform: scaleX(0); }
                50% { transform: scaleX(1); transform-origin: left; }
                50.1% { transform-origin: right; }
                100% { transform: scaleX(0); transform-origin: right; }
            }
            @keyframes pulseText {
                0% { opacity: 0.3; }
                100% { opacity: 0.8; }
            }
            /* --- Responsive Queries for Mobile & Tablet --- */
            @media (max-width: 600px) {
                .luxury-brand {
                font-size: 20px; /* Smaller font for mobile */
                animation: fadeScaleMobile 2s ease-out forwards;
                }
                
                .luxury-highlight {
                margin-left: 5px; /* Tighter gap on mobile */
                }
                .luxury-progress-container {
                width: 85%; /* Slightly wider line relative to screen size */
                }
                .luxury-loading-text {
                font-size: 9px;
                letter-spacing: 2px; /* Reduced letter spacing for mobile */
                }
            }
            /* --- Mobile Animations --- */
            @keyframes fadeScaleMobile {
                0% { opacity: 0; transform: scale(0.95); letter-spacing: 2px; }
                100% { opacity: 1; transform: scale(1); letter-spacing: 4px; } /* Adjusted spacing so it fits on screen */
            }
            `}
        </style>
        </div>
    );
};

export default Loader;