import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Header";
import SelecaoDoFilme from "./SelecaoDoFilme";
import SelecaoDaSessao from "./SelecaoDaSessao";
import SelecaoDeAssentos from "./SelecaoDeAssentos";
import TelaSucesso from "./TelaSucesso";

function App() {

    const [infoPedido, setInfoPedido] = useState({
        assentosID: [],
        numerosDosAssentos: [],
        nomeComprador: "",
        CPF: "",
        filme: "",
        horario: "",
        data: ""
    });

    function atualizarInfoPedido(pedido) {
        setInfoPedido({...pedido});
    }

    console.log("App:");
    console.log(infoPedido);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<SelecaoDoFilme />}></Route>
                <Route path="/filme/:idFilme" element={<SelecaoDaSessao />}></Route>
                <Route
                    path="/sessao/:idSessao"
                    element={<SelecaoDeAssentos
                        atualizarInfoPedido={atualizarInfoPedido} />}>
                </Route>
                <Route path="/sucesso" element={<TelaSucesso informacaoPedido={infoPedido} /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;