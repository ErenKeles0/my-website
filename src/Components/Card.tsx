import '../Styles/Card.css'
import { FaGithub } from "react-icons/fa";
function Card(props:any) {

    let link=props.link
    let title=props.title
    let header=props.header
    let image=props.image

  return (
    <>
        <div className='CardBox'>
            <img className='Thumb' src={image} alt="Thumbnail" />
            <h2 className='CardHeader montserrat-semibold'>{header}</h2>
            <p className='Cardtitle montserrat-regular'>{title}</p>
            <a className='GithubButton' href={link}><FaGithub className='GithubIcon'/></a>
        </div>
    
    
    
    
    
    </>




  )
}

export default Card