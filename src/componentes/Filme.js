import { Link } from "react-router-dom";
import styled from "styled-components";

function Filme(props) {
    const { id, imagem, titulo } = props;
    return (
        <Link to={`/filme/${id}`}>
            <Poster>
                <img src={imagem} alt={titulo} />
            </Poster>
        </Link>
    )

}
export default Filme;

const Poster = styled.div`

    width: 145px;
    height: 209px;

    background-color: var(--cor-bg-poster);
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 11px;

    img {
        width: 129px;
        height: 193px;
    }

`;

