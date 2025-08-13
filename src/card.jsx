import React, { useEffect, useState } from 'react';


function Card(props) {

    const [isHovered, setIsHovered] = useState(false);
    const preId = "container" + props.number;
    

    return (
        <div>
            <div
                id={preId}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    width: "550px",
                    height: '600px',
                    border: '1px solid #c9c1b8',
                    borderRadius: '13px',
                    margin: '0 70px 0 0',
                    overflow: 'hidden',
                    boxShadow: '0 2px 4px #c9c1b8'}}>
                    
                <div
                    style={{
                        border: '1px solid #c9c1b8',
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(0deg, #000000 0%, #484545 100%)',
                        transition: 'opacity 1s ease',
                        opacity: isHovered ? 0 : 1}}/>


                <div
                    style={{
                        border: '1px solid #c9c1b8',
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(0deg, #000000 0%, #8d8573 100%)',
                        transition: 'opacity 1s ease',
                        opacity: isHovered ? 1 : 0}}/>

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <img
                        src={props.img}
                        alt="Thumbnail"
                        style={{
                            boxShadow: '0 6px 6px #000000',
                            margin: '10px 10px 5px 10px',
                            width: '580px',
                            height: 'auto',
                            borderRadius: '8px'
                        }}/>

                    <h3 className="pt-sans-bold" style={{
                            marginTop: '10px',
                            fontSize: '24px',
                            color: '#8d8573',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>                   
                        {props.header}
                    </h3>
                    <p className="pt-sans-regular" style={{
                            color: '#c9c1b8',
                            alignItems: 'center',
                            textAlign: 'center'
                            
                        }}>
                        <br />
                        {props.title}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
