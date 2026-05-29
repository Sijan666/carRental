import React from 'react';
import { Link } from 'react-router-dom';

const AnimatedPremiumError = () => {
    return (
        <div className="relative min-h-screen bg-[#050505] overflow-hidden font-sans flex flex-col items-center justify-center">
            {/* Custom CSS for Animations */}
            <style>{`
                @keyframes moveRoad {
                from { background-position: 0 0; }
                to { background-position: -100px 0; }
                }
                @keyframes driveCar {
                0% { transform: translateX(-200px); }
                100% { transform: translateX(calc(100vw + 200px)); }
                }
                @keyframes spinWheel {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
                }
                @keyframes exhaustFlame {
                0%, 100% { transform: scaleX(1); opacity: 0.8; }
                50% { transform: scaleX(1.5); opacity: 0.4; }
                }
                .animated-road {
                background-image: linear-gradient(90deg, #E50027 0%, #E50027 50%, transparent 50%, transparent 100%);
                background-size: 100px 100%;
                animation: moveRoad 0.6s linear infinite;
                }
                .spin-origin {
                transform-box: fill-box;
                transform-origin: center;}`}
            </style>
            {/* Ambient Red Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-125 h-125 bg-[#E50027]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
            {/* Massive Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full text-center pointer-events-none select-none">
                <h1 className="text-[12rem] md:text-[25rem] font-black text-white/3 tracking-tighter leading-none">
                404
                </h1>
            </div>
            {/* Animated Road & Car Scene */}
            <div className="absolute top-[45%] md:top-1/2 left-0 w-full h-0.5 bg-white/5 z-10">
                {/* Moving Dashed Line */}
                <div className="w-full h-full animated-road opacity-40"></div>
                {/* The Driving Car Container */}
                <div className="absolute bottom-0 left-0 animate-[driveCar_6s_linear_infinite]">
                {/* Headlight Beam */}
                <div className="absolute bottom-2.5 left-42.5 w-75 h-10 bg-linear-to-r from-white/30 to-transparent -rotate-6 origin-left blur-sm pointer-events-none z-20"></div>
                {/* Exhaust Flame */}
                <div className="absolute bottom-1.25 -left-5 w-7.5 h-2.5 bg-linear-to-l from-orange-500 to-transparent rounded-full animate-[exhaustFlame_0.1s_linear_infinite] origin-right z-10 blur-[2px]"></div>
                    {/* SVG Sports Car */}
                    <svg className="w-48 md:w-56 text-[#E50027] drop-shadow-[0_5px_15px_rgba(229,0,39,0.4)] relative z-20" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Car Body Silhouette */}
                        <path d="M 25 45 Q 20 30 40 25 L 75 18 Q 95 10 120 15 L 165 25 Q 185 28 190 40 Q 190 45 175 45 L 25 45 Z" fill="currentColor"/>
                        {/* Cabin / Windows */}
                        <path d="M 80 20 Q 95 13 115 17 L 145 25 L 80 25 Z" fill="#050505"/>
                        {/* Glowing Headlight Dot */}
                        <circle cx="185" cy="35" r="4" fill="#ffffff" className="drop-shadow-[0_0_8px_#ffffff]" />
                        {/* Taillight Dot */}
                        <circle cx="28" cy="32" r="3" fill="#ff0000" />
                        {/* Back Wheel */}
                        <g className="spin-origin animate-[spinWheel_0.3s_linear_infinite]">
                        <circle cx="50" cy="45" r="12" fill="#111" stroke="#222" strokeWidth="2" />
                        <circle cx="50" cy="45" r="4" fill="#E50027" />
                        <path d="M 50 33 L 50 57 M 38 45 L 62 45 M 41 36 L 59 54 M 41 54 L 59 36" stroke="#333" strokeWidth="1.5" />
                        </g>
                        {/* Front Wheel */}
                        <g className="spin-origin animate-[spinWheel_0.3s_linear_infinite]">
                        <circle cx="150" cy="45" r="12" fill="#111" stroke="#222" strokeWidth="2" />
                        <circle cx="150" cy="45" r="4" fill="#E50027" />
                        <path d="M 150 33 L 150 57 M 138 45 L 162 45 M 141 36 L 159 54 M 141 54 L 159 36" stroke="#333" strokeWidth="1.5" />
                        </g>
                    </svg>
                </div>
            </div>
            {/* Premium Glassmorphism UI Card */}
            <div className="relative z-30 mt-[35vh] md:mt-[30vh] max-w-2xl w-full px-4">
                <div className="bg-white/2 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Out of <span className="text-[#E50027]">Bounds</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed max-w-lg mx-auto">
                        The page you are looking for has sped past our radar. Let's get you back on the main route.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <Link to={'/'}>
                            <button className="cursor-pointer group relative w-full sm:w-auto px-8 py-4 bg-[#E50027] hover:bg-[#c40020] text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(229,0,39,0.2)] hover:shadow-[0_0_30px_rgba(229,0,39,0.5)] overflow-hidden">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Return to Homepage
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </button>
                        </Link>
                        <Link to={'/contact'}>
                            <button className="cursor-pointer w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white font-medium rounded-full border border-white/20 hover:border-white/40 transition-all duration-300">
                                Contact Support
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedPremiumError;