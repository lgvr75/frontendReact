import { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Cards.css"


export default function CardComponent(props){

  const [isFavorite, setIsFavorite] = useState(false);

   
  const handlerFavorite = () => {
    if (isFavorite==false){
      setIsFavorite(true)
      console.log(isFavorite)
    }
    else{
      setIsFavorite(false)
      console.log(isFavorite)
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
        <Button variant="primary" onClick={handlerFavorite}>Me Gusta {isFavorite  ? <FaHeart /> : <FaRegHeart /> }</Button>
      </Card.Body>
    </Card>
    )
  }