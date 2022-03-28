import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Assento from "./Assento";
import Footer from "./Footer";

const LINK_API_SESSOES = "https://mock-api.driven.com.br/api/v5/cineflex/showtimes";


function SelecaoDeAssentos(props) {

    const { atualizarInfoCompra } = props;

    const [sessao, setSessao] = useState(null);
    const [compra, setCompra] = useState({
        assentosID: [],
        numerosDosAssentos: [],
        nomeComprador: "",
        CPF: "",
        filme: "",
        horario: "",
        data: ""
    });

    const params = useParams();
    const idSessao = params.idSessao;

    const navigate = useNavigate();

    const disponibilidades = ["Selecionado", "Disponível", "Indisponível"];

    useEffect(() => {
        const promessa = axios.get(`${LINK_API_SESSOES}/${idSessao}/seats`);

        promessa.then((response) => { 
            const sessao = response.data;
            setSessao(sessao);
            setCompra({
                ...compra,
                filme: sessao.movie.title,
                horario: sessao.name,
                data: sessao.day.date
            }) 
        });

        promessa.catch((err) => {
            alert(`Não foi possível recuperar os dados do servidor.
        Erro ${err.response.status}: ${err.response.data}`)
        })

    }, [idSessao])


    function redirecionarDados() {
        atualizarInfoCompra("Teste");
    }

    function adicionarAssento(assentoID, numeroDoAssento) {
        const listaDeAssentosID = [...compra.assentosID];
        const numerosDosAssentos = [...compra.numerosDosAssentos];

        listaDeAssentosID.push(assentoID);
        listaDeAssentosID.sort(comparaNumeros);

        numerosDosAssentos.push(Number(numeroDoAssento));
        numerosDosAssentos.sort(comparaNumeros);

        setCompra({
            ...compra,
            assentosID: listaDeAssentosID,
            numerosDosAssentos: numerosDosAssentos
        });

    }

    function removerAssento(assentoID, numeroDoAssento) {
        const listaDeAssentosID = [...compra.assentosID];
        const numerosDosAssentos = [...compra.numerosDosAssentos];

        listaDeAssentosID.splice(listaDeAssentosID.indexOf(assentoID), 1);
        listaDeAssentosID.sort(comparaNumeros);

        numerosDosAssentos.splice(numerosDosAssentos.indexOf(Number(numeroDoAssento)), 1);
        numerosDosAssentos.sort(comparaNumeros);

        setCompra({
            ...compra,
            assentosID: listaDeAssentosID,
            numerosDosAssentos: numerosDosAssentos
        });

    }


    console.log(compra)


    const assentos = sessao !== null ? sessao.seats : [];

    const footer = sessao !== null ?
        <Footer
            imagem={sessao.movie.posterURL}
            titulo={sessao.movie.title}
            horario={`${sessao.day.weekday} - ${sessao.name}`} />
        : <></>;


    return (
        <>
            <Conteudo>
                <h2>Selecione o(s) assento(s)</h2>

                <Assentos>
                    {assentos.map((assento) =>
                        <Assento
                            key={assento.id}
                            id={assento.id}
                            estaDisponivel={assento.isAvailable}
                            numero={assento.name}
                            adicionarAssento={adicionarAssento}
                            removerAssento={removerAssento}
                        />
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

                <ReservaDosAssentos>
                    <form onSubmit={redirecionarDados}>
                    <button onClick={redirecionarDados}>Reservar assentos(s)</button>
                    </form>
                </ReservaDosAssentos>

            </Conteudo>

            {footer}
        </>
    )
}

function comparaNumeros(a, b) { if (a === b) return 0; if (a < b) return -1; if (a > b) return 1; };

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

const ReservaDosAssentos = styled.section`
    button {
    width: 225px;
    height: 42px;

    margin: 0 auto;

    background-color: var(--cor-bg-botao-reservar);
    border-radius: 3px;

    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: var(--cor-texto-botao-reservar);
    }
`;