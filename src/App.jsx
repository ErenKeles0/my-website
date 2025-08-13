import { use, useEffect, useState } from 'react'
import './App.css'
import Login from './Login'
import Card from './card'
import Container from './container'
import About from './about'
function App() {


  const [datas, setdatas] = useState([]);
  async function getdata() {
    try {
      const response = await fetch('/assets/cardtexts.json');
      const data = await response.json();
      setdatas(data);
    } catch (error) {
      console.log("Veri çekilirken hata:", error);
    }
  }

 
  useEffect(() => {
      getdata();
  }, [])
    
  if (datas.length<=0){
    return(
      <div>Loading...</div>
    )
  }
  else{

 
  return (
      <div  >
        <About />
        <Container>
          <Card number={datas[0].cardid} header={datas[0].header} title={datas[0].title} img={datas[0].img} />
          <Card number={datas[1].cardid} header={datas[1].header} title={datas[1].title} img={datas[1].img} />
          <Card number={datas[2].cardid} header={datas[2].header} title={datas[2].title} img={datas[2].img} />
          <Card number={datas[3].cardid} header={datas[3].header} title={datas[3].title} img={datas[3].img} />
          <Card number={datas[4].cardid} header={datas[4].header} title={datas[4].title} img={datas[4].img} />
          <Card number={datas[5].cardid} header={datas[5].header} title={datas[5].title} img={datas[5].img} />
          <Card number={datas[3].cardid} header={datas[3].header} title={datas[3].title} img={datas[3].img} />
          <Card number={datas[4].cardid} header={datas[4].header} title={datas[4].title} img={datas[4].img} />
          <Card number={datas[5].cardid} header={datas[5].header} title={datas[5].title} img={datas[5].img} />
       </Container>
      </div>
  )
     }

}




export default App

