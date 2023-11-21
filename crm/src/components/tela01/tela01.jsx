import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./tela01.css"

function Tela01(props) {
    return <>
        <div className="fundo um d-flex container-fluid" id="pacotes">
        <div className="m-auto">
            <hr className="border border-2 opacity-100"/>
            <h1 className="home-title txt-titulo text-center w">Desvende o Mundo</h1>
            <hr className="border border-2 opacity-100"/>
            <br/>
            <p className="text-center w sub-titulo">Junte-se a nós em uma jornada intrigante ao redor do mundo com The
                Mystery Trip. Explore destinos ocultos e desvende os segredos que os tornam únicos. Sua próxima aventura
                começa aqui.</p>

        </div>
    </div>
    </>
}

export default Tela01;