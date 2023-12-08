import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./tela05.css"



function Tela05(props) {
    return <>
        <div className="fundo um d-flex container-fluid" id="entre-contato">
        <div className="m-auto">
            <hr className="border border-2 opacity-100"/>
            <h1 className="home-title txt-titulo text-center w">Entre em Contato Conosco</h1>
            <hr className="border border-2 opacity-100"/>
            <br/>
            <p className="text-center w sub-titulo">Na The Mystery Trip, acreditamos que viajar é mais do que simplesmente
                visitar lugares - é uma forma de enriquecer sua vida, criar laços e criar memórias que durarão para
                sempre. Quando você escolhe viajar conosco, escolhe uma equipe comprometida em tornar cada jornada
                inesquecível.
                Junte-se a nós em uma jornada de descoberta, aventura e conexão com o mundo. Viva cada momento ao
                máximo, e deixe-nos cuidar de todos os detalhes. Sua jornada começa aqui!</p>

        </div>
    </div>

    </>
}

export default Tela05;