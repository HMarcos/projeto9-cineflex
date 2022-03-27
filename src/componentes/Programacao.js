import { Link } from "react-router-dom";
import styled from "styled-components";

function Programacao(props) {
    const { dia, data, horarios } = props;

    return (
        <Dia>
            <h3>{dia} - {data}</h3>
            <Horarios>
                {horarios.map((horario) =>
                    <Link key={horario.id} to={`/assentos/${horario.id}`}>
                        <Sessao key={horario.id}>{horario.name}</Sessao>
                    </Link>)}
            </Horarios>
        </Dia>
    );
}


export default Programacao;


const Dia = styled.div`
    
    margin-bottom: 25px;
    margin-left: 25px;
    margin-right: 25px;
    
    

    h3 {
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;

        color: var(--cor-titulo-da-pagina);
    }

`;

const Horarios = styled.div`
    display: flex;
    flex-wrap: wrap;

    margin-top: 25px;

`;

const Sessao = styled.span`
    width: 83px;
    height: 43px;

    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--cor-bg-sessao);

    color: var(--cor-ft-sessao);

    margin-right: 10px;
`;


