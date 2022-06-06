import React from 'react'
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from '../service/api';
import { useEffect } from 'react';
import { useState } from 'react';




function CarroselJogo () {

    const [categoria, setCategoria] = useState("");

    const getCategogrias = async () => {
       const {data} = await api.get('/categorias')
        setCategoria(data)
    }

   
    useEffect(() => {
        getCategogrias();
    }, [])
    
    return (
        <Carousel controls={false} className="carouselJogoStyle">
            {Object.keys(categoria).map((cat) => 
                <Carousel.Item interval={5000}>
                    <Row className="g-4">
                        <Col>
                            <Card>
                                <Link to={`/todos-jogos/${categoria[cat].idcategorias}`}>
                                    <Card.Img src={'https://placeimg.com/1080/500/nature'} />
                                    <Carousel.Caption>
                                            <h1> {categoria[cat].categoriasNome} </h1>
                                    </Carousel.Caption>
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
            )}
        </Carousel>
    )
}

export default CarroselJogo;