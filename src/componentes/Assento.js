import { useState } from "react";
import styled from "styled-components";

function Assento(props) {
    const { estaDisponivel, numero } = props;

    const [status, setStatus] = useState(
        estaDisponivel ? "disponivel" : "indisponivel"
    );

    function alterarStatus(){
        if (status === "disponivel"){
            setStatus("selecionado");
        }
        else if (status === "selecionado"){
            setStatus("disponivel");
        }
        else {
            alert("Esse assento não está disponível!");
        }
    }

    return (
        <BotaoAssento onClick={alterarStatus} status={status}>
            {numero}
        </BotaoAssento>
    )
}

export default Assento;

const BotaoAssento = styled.button`
    width: 26px;
    height: 26px;

    background-color: ${(props) => {
        if (props.status === "disponivel"){
            return "var(--cor-assento-disponivel)"
        }
        else if (props.status === "indisponivel"){
            return "var(--cor-assento-indisponivel)"   
        }
        else if (props.status === "selecionado"){
            return "var(--cor-assento-selecionado)" 
        }
    }};

    border: ${(props) => {
        if (props.status === "disponivel"){
            return "1px solid var(--cor-borda-assento-disponivel)"
        }
        else if (props.status === "indisponivel"){
            return "1px solid var(--cor-borda-assento-indisponivel)"   
        }
        else if (props.status === "selecionado"){
            return "1px solid var(--cor-borda-assento-selecionado)" 
        }
    }};;
    
    border-radius: 12px;

    margin-left: 7px;
    margin-bottom: 18px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: black;
`;