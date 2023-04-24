import React, { useState, useEffect } from 'react'
import { DataTips } from './TipsList/ApiDataTips'
import '../assets/sass/components/_tips.scss'

function Tips() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
        if (!paused) {
            setCurrentIndex((currentIndex + 1) % DataTips.length);
        }
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, paused]);

    const handleMouseEnter = () => {
        setPaused(true);
    };

    const handleMouseLeave = () => {
        setPaused(false);
    };

    return (
        <div className='tips-section' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='tips-section-background'></div>
        {currentIndex < 0 ? ('') : (
            <h2 className='tips-title-fruit'>{DataTips[currentIndex].title}</h2>
        )}
        <div className='tips-container'>
            <div className='tip'>
            <ul>
                {currentIndex >= 0 &&
                DataTips[currentIndex].tip.map((item) => (
                    <li className="tips-li" key={item}>{item}</li>
                ))}
            </ul>
            </div>
        </div>
        </div>
    );
    }

    export default Tips;
