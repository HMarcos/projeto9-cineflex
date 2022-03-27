import {useParams} from "react-router-dom";

function SelecaoDeAssentos(){
    const params = useParams();
    const idSessao = params.idSessao;

    console.log(idSessao);

    return (
        <>
        </>
    )
}

export default SelecaoDeAssentos;