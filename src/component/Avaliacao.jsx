import React from 'react'
import { api } from '../service/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Rating from '@mui/material/Rating';


function Avaliacao(avaliacoes) {

    const [avaliar, setAvaliacao] = useState("")

    const getAvaliacao = async () => {
        const { data } =   await api.get('/avaliacao')
        setAvaliacao(data)
    }
    const value = Object.values(avaliacoes);

    useEffect(() => {
        getAvaliacao()
    }, [])

    return (
        <section>
            <CardGroup>
                {Object.keys(avaliar).map(av => {
                    if(value[0] == avaliar[av].idJogo) {
                        return(
                            <Card className="card-all">
                                <Card.Body>
                                    <Card.Img className="comment-avatar" src={'https://placeimg.com/1080/500/animals'} alt="Card image cap" />
                                    <Card.Title className="card-title-all">{avaliar[av].autor}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        <Rating name="size-large" size="large" defaultValue={avaliar[av].rating} precision={1} readOnly />
                                    </Card.Subtitle>
                                    <Card.Text>
                                        {avaliar[av].conteudo}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    }
                })}
            </CardGroup>
        </section>
    )
}

export default Avaliacao;