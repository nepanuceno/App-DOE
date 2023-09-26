import { Alert, SafeAreaView } from "react-native";
import ListaDiarios from "../../components/ListaDiarios";
import { useGetDiarios } from "../../services/useGetDiarios"
import { useEffect, useState } from "react";

const Home = ({ navigation }) => {
    const baseUrl = 'https://diariooficial.to.gov.br/api.json';
    
    const [objDiariosLista, setObjDiarios] = useState({});

    const getDiarios = () => {
        const dados = useGetDiarios(baseUrl).then((response:object) => {
            if(response.status==200) {
                setObjDiarios(response.data);
            } else {
                Alert.alert("ERRO!",response.message);
            }
        }).catch((err) => {
            console.log("ERRO GRAVE",err.toString())
            if (err.request._response != null) {
                Alert.alert("Erro ao Consultar", err.request._response);
            } else {
                Alert.alert("Erro Grave", "Ocorreu um erro ao consultar. Por favor, tente mais tarde.");
            }
        });
    }

    useEffect( () => {
        console.log("Refresh");
        getDiarios();
    }, []);
    
    return (
        <SafeAreaView>
            <ListaDiarios dados={objDiariosLista} navigation={navigation} childToParent={getDiarios} />
        </SafeAreaView>
    )
};

export default Home;