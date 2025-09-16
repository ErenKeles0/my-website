import './App.css'
import Card from './Card'
import { useEffect, useState } from "react";
import Container from './Container';


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
