import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Popup from "./components/popup/popup.jsx";


function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/popup" element={<Popup />} />


        </Routes>
    </BrowserRouter>
}

export default Rotas;