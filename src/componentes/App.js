import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import SelecaoDoFilme from "./SelecaoDoFilmes";

function App(){
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<SelecaoDoFilme />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App;