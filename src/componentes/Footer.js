import styled from "styled-components";

function Footer(props) {
    const { imagem, titulo, horario } = props;

    return (
        <FooterCineflex>
            <Poster>
                <img src={imagem} alt={titulo} />
            </Poster>
            <Info>
                <span>{titulo}</span>
                <span>{horario}</span>
            </Info>

        </FooterCineflex>
    );

}

export default Footer;

const FooterCineflex = styled.footer`
    
    min-height: 117px;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    background-color: var(--cor-bg-header-e-footer);
    border: 1px solid #9EADBA;

    display: flex;
    align-items: center;
`;

const Poster = styled.div`
    width: 64px;
    height: 89px;

    background-color: var(--cor-bg-poster);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 10px;

    img {
        width: 48px;
        height: 72px;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 14px;

    span{
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;

        color: var(--cot-info-footer);
    }
`;


