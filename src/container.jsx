import { useState, useRef } from 'react'
import './App.css'
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

function Container(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const scrollRef = useRef(null);

    const smoothScroll = (direction) => {
        const container = scrollRef.current;
        if (!container) return;

        const start = container.scrollLeft;
        const distance = direction === 'right' ? window.innerWidth-13 : -window.innerWidth+13;
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
        <div>
            <div style={{ 
                display: "flex", 
                alignItems: "center",
                justifyContent: "center"}}>
                <h1 className="pt-sans-bold" style={{
                    color:"#8d8573",
                    textShadow: "1px 1px 4px #8d8573",
                    fontSize:"36pt"
                }}>PROJECTS</h1>
            </div>

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
                        scrollBehavior: 'auto',
                        padding:"0 0 0 35px"
                    }}
                >
                    {props.children}
                </div>

                <button
                    onClick={() => smoothScroll('right')}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        background: '#131515',
                        borderRadius: 20,
                        border: '1px solid black',
                        padding: 20,
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
                        background: '#131515',
                        borderRadius: 20,
                        border: '1px solid black',
                        padding: 20,
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
        </div>
    )
}

export default Container;
