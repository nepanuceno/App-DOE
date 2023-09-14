import { useGetDiariosPorConsulta } from "../../useGetDiariosPorConsulta";
import { SafeAreaView } from "react-native";

import React, { useState } from "react";
import ListaDiarios from "../ListaDiarios";
import { Button, TextInput } from "react-native-paper";


const SettingsScreen = ({ navigation }) => {
    const baseUrl = 'http://localhost:8080';    
    
    const [objDiario, setDiario] = useState({});
    const [texto, updateTexto] = useState('');
    const [dataInicial, updateDataInicial] = useState('');
    const [dataFinal, updateDataFinal] = useState('');
    
    const parametrosDaConsulta = { por:'texto', texto: texto, 'data-inicial': dataInicial, 'data-final': dataFinal}
   
    const consultaDiario = () => {
        // const parametrosDaConsulta = { por:'texto', texto: texto }
        console.log("Buscando Diários por Texto");

        useGetDiariosPorConsulta(parametrosDaConsulta, baseUrl).then(data => {
            console.log(data.diarios)
            setDiario(data.diarios);
        }).catch(err => console.log(err));
    }
    return (
        <SafeAreaView>
            <TextInput 
            label={'Texto'}
            value={texto}
            onChangeText={(newText) => updateTexto(newText)}
            />

<TextInput 
            label={'Data Inicial'}
            value={dataInicial}
            onChangeText={(newDate) => updateDataInicial(newDate)}
            left={<TextInput.Icon icon="calendar" />}
            />

<TextInput 
            label={'Data Final'}
            value={dataFinal}
            onChangeText={(newDate) => updateDataFinal(newDate)}
            left={<TextInput.Icon icon="calendar" />}
            />
            <Button buttonColor="#0000FF" textColor="#FFF" onPress={() => consultaDiario()}>Consultar</Button>
            <ListaDiarios dados={ objDiario } navigation={ navigation }  />
        </SafeAreaView>
    );
};

export default SettingsScreen;