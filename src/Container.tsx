import React, { useState } from 'react';
import './Container.css';
import { FaChevronUp,FaChevronDown} from "react-icons/fa";
import ScrollFloat from './ScrollFloat';


interface ContainerProps {
  children: React.ReactNode[];
}

export default function Container({ children }: ContainerProps) {
  const [page, setPage] = useState(0);
  let itemsPerPage = 3; // default to 3 items per page
  if (window.innerWidth < 768) {
    itemsPerPage = 1;
  }

    else {
        itemsPerPage = 3;
    }
  
  
  const totalPages = Math.ceil(children.length / itemsPerPage);

  const containerHeight = window.innerHeight*0.69; // px cinsinden, kartların toplam yüksekliği

  const nextPage = () => {
    if (page + 1 < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div>
      <div className="container-header">
      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=2%'
        scrollEnd='bottom bottom-=80%'
        stagger={0.05}
        textClassName='scrollfloat-text montserrat-bold'
      >
      My Projects
      </ScrollFloat></div>
      <div className="container-wrapper">
        <div
          className="container-inner"
          style={{ transform: `translateY(-${page * containerHeight}px)` }}
        >
          {children}
        </div>
      </div>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <button className="nav-button" onClick={prevPage} disabled={page === 0}><FaChevronUp /></button>
        <button className="nav-button" onClick={nextPage} disabled={page + 1 === totalPages}><FaChevronDown /></button>
      </div>
    </div>
  );
}
