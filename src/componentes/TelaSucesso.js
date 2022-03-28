import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components"

function TelaSucesso(props) {
    const { informacaoPedido } = props;

    return (
        <Conteudo>
            <h2>Pedido feito <br /> com sucesso!</h2>
            <InfoFilme>
                <h3>Filme e sessão</h3>
                <span>{informacaoPedido.filme}</span>
                <span>{informacaoPedido.data} - {informacaoPedido.horario}</span>
            </InfoFilme>

            <InfoAssentos>
                <h3>Ingressos</h3>
                {informacaoPedido.numerosDosAssentos.map((assento) => <span key={assento}>Assento {assento}</span>)}
            </InfoAssentos>

            <InfoComprador>
                <h3>Comprador</h3>
                <span>Nome: {informacaoPedido.nomeComprador}</span>
                <span>CPF: {informacaoPedido.CPF}</span>
            </InfoComprador>
            
            <Link to="/">
                <BotaoVoltarHome> Voltar pra Home </BotaoVoltarHome>
            </Link>
        </Conteudo>
    )

}

export default TelaSucesso;

const Conteudo = styled.main`
    margin-top: 67px;

    h2{
        height: 110px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        
        color: var(--cor-titulo-sucesso);
    }
`;

const sharedStyle = css`
    display: flex;
    flex-direction: column;

    margin-left: 28px;
    margin-top: 40px;

    h3{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;

        color: var( --cor-secao-sucesso);

        margin-bottom: 15px;
    }
    
    span{
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;

        color: var( --cor-secao-sucesso);

        margin-bottom: 5px;
    }
`;

const InfoFilme = styled.section`
    ${sharedStyle}
`;

const InfoAssentos = styled.section`
    ${sharedStyle}
`;

const InfoComprador = styled.section`
    ${sharedStyle}
`;

const BotaoVoltarHome = styled.button`
    width: 225px;
    height: 42px;

    margin: 0 auto;
    margin-top: 70px;

    background-color: var(--cor-bg-botao-voltar);
    border-radius: 3px;

    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: var(--cor-texto-botao-voltar);

`;