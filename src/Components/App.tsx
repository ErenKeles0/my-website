import '../Styles/App.css'
import Card from './Card'
import { useEffect, useState } from "react";
import Container from './Container';
import Hi from './Hi.tsx';
import LightRays from './LightRays.tsx';
import About from './About.tsx';
import Contact from './Contact.tsx';
import Scroll from './Scroll.tsx';

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

      <Scroll />

      <div className='Rayscontainer'>
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

      <section style={{ height: "100vh" }}>
        <Hi />
      </section>

      <section style={{ height: "100vh" }}>
        <About />
      </section>

      <section style={{ minHeight: "100vh" }}>
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
      </section>

      <section style={{ height: "100vh" }}>
        <Contact />
      </section>
    </>
  );
}
