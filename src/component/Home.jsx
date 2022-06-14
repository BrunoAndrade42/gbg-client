import React from 'react';
import Nav from './Nav';
import CarroselJogo from './CarroselJogo';
import RecomendaJogo from './RecomendaJogo';

function Home() {

    return (
        <section>
            <Nav />
            <div className="container-login100">
                <span  className="carousel100-title col-2">
                   Categoria
                </span>   
                <CarroselJogo />

                <span  className="carousel100-title col-12">
                   Recomendações de Jogos
                </span>
                <RecomendaJogo />
            </div>
        </section>
    )
}

export default Home;