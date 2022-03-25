import styled from "styled-components"

function Header() {
    return(
    <HeaderCineflex>
        <h1>Cineflex</h1>
    </HeaderCineflex>
    )
}

const HeaderCineflex = styled.header`
    width: 100vw;
    height: 67px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    background-color: var(--cor-bg-header-e-footer);

    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: var(--cor-cineflex);
    }
`;

export default Header;



