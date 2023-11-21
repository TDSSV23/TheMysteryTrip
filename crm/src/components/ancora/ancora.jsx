import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./ancora.css"

function Ancora(props) {
    return <>
        {/* <!-- ancora para voltar ao topo --> */}
    <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="blue"
            class="bi bi-arrow-up-circle-fill position-fixed mb-0 ms-0" viewBox="0 0 16 16">
            <path
                d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
        </svg>
    </a>
    </>
}

export default Ancora;