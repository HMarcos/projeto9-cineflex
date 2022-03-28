import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Header";
import SelecaoDoFilme from "./SelecaoDoFilme";
import SelecaoDaSessao from "./SelecaoDaSessao";
import SelecaoDeAssentos from "./SelecaoDeAssentos";


function App() {

    const [infoCompra, setInfoCompra] = useState({});

    function atualizarInfoCompra(dados) {
        setInfoCompra(dados);
    }

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<SelecaoDoFilme />}></Route>
                <Route path="/sessoes/:idFilme" element={<SelecaoDaSessao />}></Route>
                <Route
                    path="/assentos/:idSessao"
                    element={<SelecaoDeAssentos
                        atualizarInfoCompra={atualizarInfoCompra} />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;