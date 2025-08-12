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
                    width: '600px',
                    height: '500px',
                    border: '1px solid #e0db52',
                    borderRadius: '13px',
                    margin: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 4px #e0db52'}}>
                    
                <div
                    style={{
                        border: '1px solid #e0db52',
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(0deg, #000000 0%, #586120 100%)',
                        transition: 'opacity 1s ease',
                        opacity: isHovered ? 0 : 1}}/>


                <div
                    style={{
                        border: '1px solid #e0db52',
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(0deg, #000000 0%, #969b38 100%)',
                        transition: 'opacity 1s ease',
                        opacity: isHovered ? 1 : 0}}/>

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <img
                        src={props.img}
                        alt="Thumbnail"
                        style={{
                            boxShadow: '0 6px 6px #000000ff',
                            margin: '10px 10px 5px 10px',
                            width: '580px',
                            height: 'auto',
                            borderRadius: '8px'
                        }}/>

                    <h3 style={{
                            marginTop: '10px',
                            fontSize: '24px',
                            color: '#969b38',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>                   
                        {props.header}
                    </h3>
                    <p style={{
                            color: '#e0db52',
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
