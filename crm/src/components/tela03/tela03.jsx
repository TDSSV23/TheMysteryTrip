import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./tela03.css"


function Tela03(props) {
    return <>
        <div className="fundo dois d-flex container-fluid" id="nos">
            <div className="m-auto">
                <hr className="border border-2 opacity-100"/>
                    <h1 className="home-title txt-titulo text-center w">Quem somos?</h1>
                    <hr className="border border-2 opacity-100"/>
                        <br/>
                            <p className="text-center w sub-titulo">Nós, um grupo de seis recém-chegados ao mercado de trabalho, unimos
                                nossa paixão por aventuras e fundamos o site de viagens "The Mystery Trip". Estamos ansiosos para
                                explorar destinos únicos e compartilhar experiências emocionantes com outros viajantes.</p>

                        </div>
                    </div>
                </>
}

                export default Tela03;