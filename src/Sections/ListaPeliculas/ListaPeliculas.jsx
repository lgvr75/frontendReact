import { useState, useEffect } from "react";
import CardComponent from "../../Components/Cards/Cards.jsx";
import Form from 'react-bootstrap/Form';


export default function ListaPeliculas() {



    const [search, setSearch] = useState('')
    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        fetch('https://api-pelis-back.onrender.com/comedia')
        .then(response => response.json())
        .then(data => {
            setPeliculas(data.peliculas)
        })
    }, [])

    const handleSearch = (e) => {
        //console.log(e.target.value)
        setSearch(e.target.value)
    }




    let pelis =[
    {
        title: 'Hombre Araña',
        description: 'pelicula de Accion',
        portada: 'https://th.bing.com/th/id/OIP.N4BDrizUOhnn6yYpXuLZVwHaE8?pid=ImgDet&rs=1'
    },

    {
        title: 'Iron man',
        description: 'pelicula de Accion',
        portada: 'https://th.bing.com/th/id/OIP.N4BDrizUOhnn6yYpXuLZVwHaE8?pid=ImgDet&rs=1'
    },
    {
        title: 'el Aro',
        description: 'pelicula de terror',
        portada: 'https://th.bing.com/th/id/OIP.N4BDrizUOhnn6yYpXuLZVwHaE8?pid=ImgDet&rs=1'
    },
    {
        title: 'la riasa en VAcaciones',
        description: 'pelicula de risa',
        portada: 'https://th.bing.com/th/id/OIP.N4BDrizUOhnn6yYpXuLZVwHaE8?pid=ImgDet&rs=1'
    },
    {
        title: 'Titanic',
        description: 'pelicula de Amor',
        portada: 'https://th.bing.com/th/id/OIP.N4BDrizUOhnn6yYpXuLZVwHaE8?pid=ImgDet&rs=1'
    },

    {
        title: 'El Conjuro',
        description: 'pelicula de Terror',
        portada: 'https://th.bing.com/th/id/OIP.N4BDrizUOhnn6yYpXuLZVwHaE8?pid=ImgDet&rs=1'
    }
]

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Form.Control size="lg" type="text" placeholder="Search" />
                        <br />
                    </div>
                </div>
                <div className="row">
                    {pelis.map((item, index) => {
                        return (
                            <div className="col mt-3" key={index}>
                                <CardComponent portada={item.portada} title={item.title} description={item.description} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
        )}
