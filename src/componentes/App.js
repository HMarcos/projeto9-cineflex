import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import SelecaoDoFilme from "./SelecaoDoFilme";
import SelecaoDaSessao from "./SelecaoDaSessao";
import SelecaoDeAssentos from "./SelecaoDeAssentos";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<SelecaoDoFilme />}></Route>
                <Route path="/sessoes/:idFilme" element={<SelecaoDaSessao />}></Route>
                <Route path="/assentos/:idSessao" element={<SelecaoDeAssentos />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;