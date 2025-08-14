import React, { useState } from 'react';

function Card(props) {
  const [isHovered, setIsHovered] = useState(false);
  const preId = "container" + props.number;

  return (
    <div>
      <div
        id={preId}
        className="card-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`card-overlay-dark ${isHovered ? 'hidden' : ''}`} />
        <div className={`card-overlay-light ${isHovered ? 'visible' : ''}`} />

        <div className="card-content">
          <img
            src={props.img}
            alt="Thumbnail"
            className="card-image"
          />
          <h3 className="pt-sans-bold card-header">
            {props.header}
          </h3>
          <p className="pt-sans-regular card-title">
            <br />
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
