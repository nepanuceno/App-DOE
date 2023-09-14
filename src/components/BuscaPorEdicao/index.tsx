import { useGetDiariosPorConsulta } from "../../useGetDiariosPorConsulta";
import { SafeAreaView } from "react-native";

import React, { useState } from "react";
import ListaDiarios from "../ListaDiarios";
import { Button, TextInput } from "react-native-paper";

const SettingsScreen = ({ navigation }) => {

    const [objDiario, setDiario] = useState({});
    const [edicao, updateEdicao] = useState('');

    const baseUrl = 'http://localhost:8080';    
    
    const consultaDiario = () => {
        const parametrosDaConsulta = { por:'edicao', edicao: edicao }
        const baseUrl = 'http://localhost:8080';
        console.log("Buscando Diários por Edição");

        useGetDiariosPorConsulta(parametrosDaConsulta).then(data => {
            console.log(data)
            setDiario(data.diarios);
        }).catch(err => console.log(err));
    }
    console.log(objDiario)
    return (
        <SafeAreaView>
            <TextInput 
            label={'Edição'}
            value={edicao}
            onChangeText={(newEdicao) => updateEdicao(newEdicao)}
            />
            <Button buttonColor="#0000FF" textColor="#FFF" onPress={() => consultaDiario()}>Consultar</Button>
           <ListaDiarios dados={ objDiario } navigation={ navigation }  />
        </SafeAreaView>
    );
};

export default SettingsScreen;
