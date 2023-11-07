import { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Cards.css"


export default function CardComponent(props){

  const [isFavorite, setIsFavorite] = useState(false);

   
  const handlerFavorite = () => {
    if (!setIsFavorite){
      setIsFavorite(true)
      let iconMeGusta = '<FaRegHeart />'
''      
    }
    else{
      setIsFavorite(false)
      let iconMeGusta = '<FaHeart />'
    }
  }

return(
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={props.portada} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.description}
        </Card.Text>
        <Button variant="primary" onClick={handlerFavorite}>Me Gusta {iconMeGusta}</Button>
      </Card.Body>
    </Card>
    )
  }