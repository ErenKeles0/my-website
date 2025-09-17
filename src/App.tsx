import './App.css'
import Card from './Card'
import { useEffect, useState } from "react";
import Container from './Container';
import About from './About';
import LightRays from './LightRays.tsx';
export default function App() {
    type Item = {
      link: string;
      title: string;
      header: string;
      thumbnail: string;
    };

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch("./ProjectsData.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  
  return (
    <>
      <div className='Rayscontainer' >
        <LightRays
            raysOrigin="top-center"
            raysColor="#adb5bd"
            raysSpeed={0.5}
            lightSpread={0.8}
            rayLength={1.8}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
        />
      </div>
    <About />
    <Container>
      {items.map((item, index) => (
        <Card
          key={index}
          link={item.link}
          title={item.title}
          header={item.header}
          image={item.thumbnail}
        />  
      ))}
    </Container>


    
    
    
    </>
    
  )
}
