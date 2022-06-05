import Nav from './Nav';
import React from 'react';
import {useParams} from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from '../service/api';


function TodosJogos() {

    const {id} = useParams()
    const [jogos, setJogos] = useState("");    
    
    api.defaults.withCredentials = true;
    useEffect(() => {
         api.get('/todos-jogos').then((res) => {
             setJogos(res.data)
         })
    }, [])


    return (
        <section>
            <Nav />
            <div class="container-login100">
                <CardGroup>
                    {Object.keys(jogos).map((jog) => {
                        if(id == jogos[jog].idCatJogo) {
                            return (
                                <div>
                                    <Card className="card-all">
                                        <Link to={`/pagina-jogo/${jogos[jog].idJogo}`}>
                                            <Card.Img className="card-img-top" src={'https://placeimg.com/1080/500/nature'} alt="Card image cap" />
                                        </Link>
                                        <Card.Body>
                                            <Card.Title className="card-title-all"> {jogos[jog].nomeJogo} </Card.Title>
                                            <Card.Text className="card-text-all">
                                                {jogos[jog].subtituloJogo}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    })}
                </CardGroup>
            </div>
        </section>
    )
}

export default TodosJogos;