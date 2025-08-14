import { useState, useRef } from 'react';
import './App.css';
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

function Container(props) {

    const cardsRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const scrollRef = useRef(null);

    const smoothScroll = (direction) => {
        const container = scrollRef.current;
        if (!container) return;

        const firstCard = container.querySelector('.card-container');
        if (!firstCard) return;

        const style = getComputedStyle(firstCard);
        const cardWidth = firstCard.offsetWidth 
            + parseFloat(style.marginLeft) 
            + parseFloat(style.marginRight);

        const distance = direction === 'right' ? cardWidth*2 : -cardWidth*2;
        const duration = 500;
        let startTime = null;
        const start = container.scrollLeft;

        const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

        const animation = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            container.scrollLeft = start + distance * easeOutCubic(progress);
            if (progress < 1) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    };

    return (
        <div id="cards" ref={cardsRef}>
            <div className="projects-title-container">
                <h1 className="pt-sans-bold projects-title">Projects</h1>
            </div>

            <div className="projects-wrapper">
                <div
                    ref={scrollRef}
                    className="projects-scroll"
                >
                    {props.children}
                </div>

                <button
                    onClick={() => smoothScroll('right')}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`scroll-button right ${isHovered ? 'hovered' : ''}`}
                    type="button"
                    aria-label="Next"
                >
                    <SlArrowRight />
                </button>

                <button
                    onClick={() => smoothScroll('left')}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                    className={`scroll-button left ${isHovered1 ? 'hovered' : ''}`}
                    type="button"
                    aria-label="Previous"
                >
                    <SlArrowLeft />
                </button>
            </div>
        </div>
    );
}

export default Container;
