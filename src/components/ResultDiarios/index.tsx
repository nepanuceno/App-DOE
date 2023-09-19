import { Text } from "react-native-paper";
import ListaDiarios from "../ListaDiarios";

const ResultDiarios = ({ navigation, route }) => {
    const { objDiarios } = route.params;
    return (
        <>
        <ListaDiarios dados={ objDiarios } navigation={navigation} />
        </>
    )
}

export default ResultDiarios;