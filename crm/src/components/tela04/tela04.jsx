import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./tela04.css"
import prediosImg from "../../assets/predios.jpg"


function Tela04(props) {
    return <>
        {/* <!-- TELA 4 - predios --> */}
        <div className="fundo d-flex container-fluid" id="voos">
            <div className="container text-center my-auto">
                {/* <!-- abaixo fizemos uma especie de tabela para organizar os elementos --> */}
                <div className="row">
                    <div className="col bridge-class">
                        <img src={prediosImg} className="predios" />
                    </div>
                    {/* <!-- botões com JS --> */}
                    <div className="col coluna-voos">
                        <div className="row ">
                            <button className="border-2  ida text-voo umm" >
                                <p>Ida e Volta</p>
                            </button>
                            <button className="border-2  volta text-voo doiis">
                                <p>Somente Ida</p>
                            </button>
                        </div>

                        <br />
                        {/* <!-- primeira opção (vai ser aberto quando o 1º botão for clicado) --> */}
                        <form className="row ida-volta-input" id="opcao-voo-1">
                            {/* <!-- coluna com duas linhas --> */}
                            <div className="col responsividade-linha">
                                <span className=""> De onde você está saindo?</span>

                                <input className="airport" placeholder="Buscar por aeroportos" id="saida" />

                            </div>
                            {/* <!-- setas no centro da div --> */}
                            <div className="col m-auto">
                                <br />
                                <div className="circle-flecha border border-2 border-warning m-auto "><svg
                                    xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="orange"
                                    className="bi bi-arrow-left-right flecha" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707  4H14.5a.5.5 0 0 1 .5.5z" />
                                </svg>
                                </div>
                            </div>

                            <div className="col responsividade-linha"><span>Para onde você vai?</span>
                                <input className="airport" placeholder="Buscar por aeroportos" type="text" id="chegada" />
                            </div>
                            <div className="row mt-3">
                                <input className="data-ida umm d-inline-flex" type="date" id="data" required />
                                <input className="  data-volta doiis" type="date" id="data2" required />
                            </div>

                            <div className="col m-0 mt-3 ">
                                <div className="m-auto">
                                    <p className="fs-6 me-0">Passageiros</p>
                                    <span className="persona m-auto">
                                        <i className="bi bi-people"></i>
                                        <input className="m-auto" placeholder="1" type="number" min="1" max="10" id="pessoas" />
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 text-center">
                                <button type="button" name="" id="" className="buscar-c-volta m-auto" value="Buscar Voos"
                                    >Buscar Voos</button>
                            </div>
                            <span id="ook" className="mt-3"></span>
                        </form>
                        {/* <!-- Botão 02 --> */}
                        <form className="row ida-volta-input" id="opcao-voo-2">

                            <div className="col">De onde você está saindo?
                                <input className="airport" placeholder="Buscar por aeroportos" id="saida2" />
                            </div>

                            <div className="col">
                                <br />
                                <div className="circle-flecha border border-2 border-primary m-auto"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue"
                                    className="bi bi-arrow-left-right flecha" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707  4H14.5a.5.5 0 0 1 .5.5z" />
                                </svg>
                                </div>
                            </div>

                            <div className="col">Para onde você vai?
                                <input className="airport" placeholder="Buscar por aeroportos" type="text" id="chegada2" />
                            </div>
                            <div className="row mt-3">
                                <input className="persona m-auto d-inline-flex" type="date" id="data3" />
                            </div>

                            <div className="col m-0 mt-3 ">
                                <p className="fs-6 my-1">Passageiros</p>
                                <span className="persona m-auto">
                                    <i className="bi bi-people"></i>
                                    <input className="m-auto" placeholder="1" type="number" min="1" max="10" id="pessoas2" />
                                </span>
                            </div>

                            <div className="mt-4 text-center">
                                <button type="button" name="" id="" className="buscar-c-volta m-auto" value="Buscar Voos"
                                    >Buscar Voos</button>
                            </div>
                            <span id="ook" className="mt-3"></span>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Tela04;