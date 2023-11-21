import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./tela02.css"
import imgKombi from "../../assets/kombi.webp"

function Tela02(props) {
    return <>
        <div className="fundo m-auto container-fluid kombi" id="hoteis">
        <div className="m-auto">
            <img src={imgKombi} className="kombi-img"/>
        </div>
        {/* <!-- metade da tela --> */}
        <div className="kombi-txt text-center">
            <hr className="border border-2 opacity-100"/>
            <h1 className="home-title text-center b fs-1">Nosso Projeto</h1>
            <hr className="border border-2 opacity-100"/>
            <br/>
            {/* <!-- Texto lateral --> */}
            <p className="text-center b sub-titulo fs-6">
                The Mystery Trip é o seu guia de viagens completo, com inspiração, planejamento e uma comunidade
                apaixonada de viajantes, tudo em um só lugar. Transforme suas aventuras em experiências inesquecíveis.
            </p>
        </div>


    </div>
    </>
}

export default Tela02;