import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Filme from "./Filme";

const LINK_API_FILMES = "https://mock-api.driven.com.br/api/v5/cineflex/movies";


function SelecaoDoFilme() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const promessa = axios.get(LINK_API_FILMES);

        promessa.then((response) => setFilmes(response.data));

        promessa.catch((err) => {
            alert(`Não foi possível recuperar os dados do servidor.
        Erro ${err.response.status}: ${err.response.data}`)
        })
    }, [])


    return (
        <Conteudo>
            <h2>Selecione o filme</h2>
            <Filmes>
                {filmes.map((filme) =>
                    <Filme key={filme.id} id={filme.id} imagem={filme.posterURL} titulo={filme.title} />)}
            </Filmes>
        </Conteudo>
    )
}


// Styled - Components
const Conteudo = styled.main`
    margin-top: 67px;

    h2{
        height: 110px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        
        color: var(--cor-titulo-da-pagina);
    }
`;

const Filmes = styled.section`
    width: 100vw;

    display: flex;
    flex-wrap: wrap;

    justify-content: space-evenly;

`



export default SelecaoDoFilme;