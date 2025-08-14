import { useState, useEffect, useRef } from "react";
import About from "./about";
import Container from "./container";
import Card from "./card";
import AutoAlign from "./scroll";
import Contact from "./contact"
function App() {
  const aboutRef = useRef(null);   // About için ref
  const cardsRef = useRef(null);   // Cards/Projects için ref
  const contactRef = useRef(null); // Contact için ref
  const [datas, setdatas] = useState([]);

  useEffect(() => {
    async function getdata() {
      try {
        const response = await fetch('/assets/cardtexts.json');
        const data = await response.json();
        setdatas(data);
      } catch (error) {
        console.log("Veri çekilirken hata:", error);
      }
    }
    getdata();
  }, []);

  if (datas.length <= 0) return <div>Loading...</div>;

  return (
    <div>
      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={cardsRef}>
        <Container>
          {datas.map((item, index) => (
            <Card
              key={index}
              number={item.cardid}
              header={item.header}
              title={item.title}
              img={item.img}
            />
          ))}
        </Container>
      </div>

      <div ref={contactRef}>
            <Contact />
      </div>

      <AutoAlign
        aboutRef={aboutRef}
        sections={[
          { ref: cardsRef },
          { ref: contactRef },
        ]}
        minVisiblePercent={20}
      />
    </div>
  );
}

export default App;
