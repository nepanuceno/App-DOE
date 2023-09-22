import { Alert, SafeAreaView } from "react-native";
import ListaDiarios from "../ListaDiarios";
import { useGetDiarios } from "../../useGetDiarios"
import { useEffect, useState } from "react";

const Home = ({ navigation }) => {
    const baseUrl = 'https://diariooficial.to.gov.br/api.json';
    
    const [objDiariosLista, setObjDiarios] = useState({});

    useEffect( () => {
        console.log("Refresh")
        const dados = useGetDiarios(baseUrl)
            .then((response:object) => {
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
                    Alert.alert("Erro ao Grave", "Ocorreu um erro ao consultar. Por favor, tente mais tarde.");
                }
            });
    }, []);
    
    return (
        <SafeAreaView>
            <ListaDiarios dados={objDiariosLista} navigation={navigation}/>
        </SafeAreaView>
    )
};

export default Home;