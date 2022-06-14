import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from '../service/api';

function RecomendaJogo() {

    const [recomenda, setRecomenda] = useState("");    
    
    const getjogos = async () => {
     const { data } =   await api.get('/todos-jogos')
        setRecomenda(data)
    }
   
    useEffect(() => {
        getjogos()
    }, [])

    
    return (
        <section>
            <CardGroup>
                {Object.keys(recomenda).map(rec => {
                    return(
                        <div>
                            <Card className="card-all">
                                <Link to={`/pagina-jogo/${recomenda[rec].idJogo}`}>
                                    <Card.Img className="card-img-top" src={'https://placeimg.com/1080/500/animals'} alt="Card image cap" />
                                </Link>
                                <Card.Body>
                                    <Card.Title className="card-title-all"> {recomenda[rec].nomeJogo}</Card.Title>
                                    <Card.Text className="card-text-all">
                                        {recomenda[rec].subtituloJogo}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </CardGroup>
        </section>
    )
}

export default RecomendaJogo;