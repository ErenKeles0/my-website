import { useState, useRef } from 'react'
import './App.css'
import Login from './Login'
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

function Container(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const scrollRef = useRef(null);

    const smoothScroll = (direction) => {
        const container = scrollRef.current;
        if (!container) return;

        const start = container.scrollLeft;
        const distance = direction === 'right' ? window.innerWidth : -window.innerWidth;
        const duration = 500; // ms
        let startTime = null;

        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const animation = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = easeOutCubic(progress);
            container.scrollLeft = start + distance * ease;

            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative'
        }}>
            <div
                ref={scrollRef}
                style={{
                    flex: '1 1 auto',
                    display: 'flex',
                    overflowX: 'hidden', // scroll bar gizlendi
                    scrollBehavior: 'auto'
                }}
            >
                {props.children}
            </div>

            <button
                onClick={() => smoothScroll('right')}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    background: '#222222ab',
                    borderRadius: 20,
                    border: 'black',
                    padding: 20,
                    marginLeft: '8px',
                    flex: '0 0 auto',
                    position: 'absolute',
                    right: 30,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    opacity: isHovered ? 1 : 0.75,
                    transition: "opacity .25s ease-in-out"
                }}
                type="button"
                aria-label="Next"
            >
                <SlArrowRight />
            </button>

            <button
                onClick={() => smoothScroll('left')}
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
                style={{
                    background: '#222222ab',
                    borderRadius: 20,
                    border: 'black',
                    padding: 20,
                    marginLeft: '8px',
                    flex: '0 0 auto',
                    position: 'absolute',
                    left: 30,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    opacity: isHovered1 ? 1 : 0.75,
                    transition: "opacity .25s ease-in-out"
                }}
                type="button"
                aria-label="Previous"
            >
                <SlArrowLeft />
            </button>
        </div>
    )
}

export default Container;
