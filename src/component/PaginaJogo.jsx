import React from 'react';
import { Card } from 'react-bootstrap';
import Nav from './Nav';
import PopupAvaliar from './PopupAvaliar';
import Avaliacao from './Avaliacao';
import {useParams} from "react-router-dom";
import { api } from '../service/api';
import { useEffect } from 'react';
import { useState } from 'react';


function PaginaJogo() {

    const {jogo} = useParams()
    const [play, setPlay] = useState("");    

    const getjogos = async () => {
        const { data } =   await api.get('/todos-jogos')
        setPlay(data)
       }


    useEffect(() => {
        getjogos()
    }, [])

    return (
        <section>
            <Nav />
            <div className="container-login100">
                {Object.keys(play).map((game) => {
                    if(jogo == play[game].idJogo) {
                        return (
                            <Card className="bg-card">
                                <Card.Body>
                                    <Card.Img src={'https://placeimg.com/1080/500/nature'} />
                                    <h1 className="card-title-all">{play[game].nomeJogo}</h1>
                                    <p className="card-text-all">{play[game].descricaoJogo}</p>
                                    <h1 className="card-title-all">Como jogar?</h1>
                                    <p className="card-text-all">{play[game].comoJogarJogo}</p>
                                    
                                    <div className='centralizar'>
                                        <PopupAvaliar avaliarJogo={play[game].idJogo}/>
                                    </div>

                                    <div>
                                        <h2 className="card-title-all"> Pessoas que avaliaram:</h2>  
                                        <Avaliacao avaliacoes={play[game].idJogo} />
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    }
                })}  
            </div>
        </section>
    )
}

export default PaginaJogo;