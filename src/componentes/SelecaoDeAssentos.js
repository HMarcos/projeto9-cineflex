import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Assento from "./Assento";
import Footer from "./Footer";

const LINK_API_SESSOES = "https://mock-api.driven.com.br/api/v5/cineflex/showtimes";


function SelecaoDeAssentos() {

    const [sessao, setSessao] = useState(null);

    const params = useParams();
    const idSessao = params.idSessao;

    useEffect(() => {
        const promessa = axios.get(`${LINK_API_SESSOES}/${idSessao}/seats`);

        promessa.then((response) => { setSessao(response.data) });

        promessa.catch((err) => {
            alert(`Não foi possível recuperar os dados do servidor.
        Erro ${err.response.status}: ${err.response.data}`)
        })

    }, [idSessao])

    const assentos = sessao !== null ? sessao.seats : [];

    console.log(assentos);

    const footer = sessao !== null ?
        <Footer
            imagem={sessao.movie.posterURL}
            titulo={sessao.movie.title}
            horario={`${sessao.day.weekday} - ${sessao.name}`} />
        : <></>;

    const disponibilidades = ["Selecionado", "Disponível", "Indisponível"];

    return (
        <>
            <Conteudo>
                <h2>Selecione o(s) assento(s)</h2>
                <Assentos>
                    {assentos.map((assento) =>
                        <Assento key={assento.id} estaDisponivel={assento.isAvailable} numero={assento.name} />
                    )}
                </Assentos>
                <LegendaAssentos>
                    {disponibilidades.map((disponibilidade) => {
                        return (<Item key={disponibilidade} status={disponibilidade}>
                            <span></span>
                            <p>{disponibilidade}</p>
                        </Item>);
                    })}
                </LegendaAssentos>
                {footer}
            </Conteudo>
        </>
    )
}

export default SelecaoDeAssentos;

const Conteudo = styled.main`
    margin-top: 67px;

    h2{
        height: 110px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        
        text-align: center;

        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        
        color: var(--cor-titulo-da-pagina);

    }
`;

const Assentos = styled.section`
    width: 327px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: -20px;

    button:nth-last-child(10n) {
        margin-left: 0px;
    }
`;

const LegendaAssentos = styled.section`
    width: 327px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 auto;

`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        width: 25px;
        height: 25px;
        border-radius: 17px;

        background-color: ${(props) => {
        if (props.status === "Disponível") {
            return "var(--cor-assento-disponivel)"
        }
        else if (props.status === "Indisponível") {
            return "var(--cor-assento-indisponivel)"
        }
        else if (props.status === "Selecionado") {
            return "var(--cor-assento-selecionado)"
        }
    }};

        border: ${(props) => {
        if (props.status === "Disponível") {
            return "1px solid var(--cor-borda-assento-disponivel)"
        }
        else if (props.status === "Indisponível") {
            return "1px solid var(--cor-borda-assento-indisponivel)"
        }
        else if (props.status === "Selecionado") {
            return "1px solid var(--cor-borda-assento-selecionado)"
        }
    }};;

    }

    p{
        width: 65px;
        height: 28px;
        color: var(--cor-texto-legenda);

        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;

        margin-top: 1px;
    }
`;