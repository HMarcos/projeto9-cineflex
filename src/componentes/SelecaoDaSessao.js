import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Programacao from "./Programacao";
import Footer from "./Footer";

const LINK_API_FILMES = "https://mock-api.driven.com.br/api/v5/cineflex/movies";


function SelecaoDaSessao() {

    const [filme, setFilme] = useState(null);

    const params = useParams();
    const idFilme = params.idFilme;

    useEffect(() => {
        const promessa = axios.get(`${LINK_API_FILMES}/${idFilme}/showtimes`);

        promessa.then((response) => setFilme(response.data));

        promessa.catch((err) => {
            alert(`Não foi possível recuperar os dados do servidor.
        Erro ${err.response.status}: ${err.response.data}`)
        })
    }, [])


    const dias = filme !== null ? filme.days : [];

    const footer = filme !== null ? <Footer imagem={filme.posterURL} titulo={filme.title} horario=""/> : <></>;

    return (
        <>
            <Conteudo>
                <h2>Selecione o horário</h2>
                <Sessoes>
                    {dias.map((dia) =>
                        <Programacao
                            key={dia.id}
                            data={dia.date}
                            dia={dia.weekday}
                            horarios={dia.showtimes}
                        />)}
                </Sessoes>
            </Conteudo>
            
            {footer}
        </>
    )


}

export default SelecaoDaSessao;

const Conteudo = styled.main`
    margin-top: 67px;
    margin-bottom: 130px;

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

const Sessoes = styled.section`
`

