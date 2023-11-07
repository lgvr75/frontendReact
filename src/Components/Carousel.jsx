import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './Carousel.css'

export default function CarouselComponent(){
    return(
    <Carousel>    
        <div className="container-image">
            <img src="https://cdna.artstation.com/p/assets/images/images/021/001/240/large/mike-blueg-spiderman.jpg?1569991057" alt='img1'/>
        </div>
        <div className="container-image">
            <img src="https://th.bing.com/th/id/OIP.N4BDrizUOhnn6yYpXuLZVwHaE8?pid=ImgDet&rs=1"  alt='img2'/>
        </div>
        <div className="container-image">
            <img src="https://th.bing.com/th/id/OIF.6Qt989Jat6al7W80tskFlA?pid=ImgDet&rs=1"  alt='img3'/>
        </div>
        <div className="container-image">
            <img src="https://th.bing.com/th/id/OIP.xpMglpwSJnc7UA9JBSD28AHaEC?pid=ImgDet&rs=1ter"  alt='img4'/>
        </div>

    </Carousel>
    );
};