import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import PopUp from "./components/popup/popup.jsx";


function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/popup" element={<PopUp />} />


        </Routes>
    </BrowserRouter>
}

export default Rotas;