import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import PaginaJogo from "./component/PaginaJogo";
import TodosJogos from "./component/TodosJogos";

class Rotas extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route element = { <Login /> }  path="*" />
                    <Route element = { <Login /> }  path="/login" />
                    <Route element = { <Home /> }  path="/home" />
                    <Route element = { <Register /> }  path="/register" />
                    <Route element = { <PaginaJogo /> }  path="/pagina-jogo/:jogo" />
                    <Route element = { <TodosJogos /> }  path="/todos-jogos/:id" exact/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Rotas;