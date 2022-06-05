import React from 'react';
import Nav from './Nav';
import CarroselJogo from './CarroselJogo';

function Home() {

    return (
        <div>
            <Nav />
            <div className="container-login100">
                <span  className="carousel100-title col-12">
                   Categoria
                </span>   
                <CarroselJogo />
            </div>
        </div>
    )
}

export default Home;