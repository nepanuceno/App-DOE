import { Text } from "react-native-paper";
import ListaDiarios from "../ListaDiarios";
import { useEffect, useState } from "react";

const ResultDiarios = ({ navigation, route }) => {
    const { objDiarios } = route.params;

    console.log("Diário Recebido", objDiarios)

    const [objDiariosList , setObjDiarios] = useState([]);

    useEffect( () => {
        setObjDiarios(objDiarios);

    },[objDiarios]);

    return (
        
        <>
        <ListaDiarios dados={ objDiariosList } navigation={navigation} />
        </>
    )
}

export default ResultDiarios;