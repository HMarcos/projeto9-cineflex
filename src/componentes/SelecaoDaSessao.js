import {useParams} from "react-router-dom";

function SelecaoDaSessao(){
    const params = useParams();

    const idFilme = params.idFilme;
    
    console.log(idFilme);
    
    return(
        <>
        </>
    )


}


export default SelecaoDaSessao;