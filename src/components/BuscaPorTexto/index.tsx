import { useGetDiariosPorConsulta } from "../../useGetDiariosPorConsulta";
import { SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme, withTheme } from "react-native-paper";

import React, { useState } from "react";
import ListaDiarios from "../ListaDiarios";
import { Button, Text, TextInput } from "react-native-paper";
import DatePicker from "react-native-date-picker";


const SettingsScreen = ({ navigation }) => {
    const baseUrl = 'http://localhost:8080';    

    const date = new Date();
    date.setDate(date.getDate() - 60);

    const [objDiario, setDiario] = useState({});
    const [texto, updateTexto] = useState('');
    const [dataInicial, updateDataInicial] = useState(date);
    const [dataFinal, updateDataFinal] = useState(new Date());
    const [tagDataInicial, openDataInicial] = useState(false);
    const [tagDataFinal, openDataFinal] = useState(false);
    const theme = useTheme();
    const parametrosDaConsulta = { por:'texto', texto: texto, 'data-inicial': dataInicial, 'data-final': dataFinal}
   
    const consultaDiario = () => {
        console.log("Buscando Diários por Texto");

        // const parametrosDaConsulta = { por:'texto', texto: "107947", 'data-inicial': "2023-06-15", 'data-final': "2023-09-15"}

        useGetDiariosPorConsulta(parametrosDaConsulta, baseUrl)
        .then(data => {
            console.log(data)
            setDiario(data.diarios);
        }).catch(err => console.log(err.message));
    }
    return (
        <SafeAreaView>
            <Text>Consulta Por Edição</Text>
            <TextInput 
                label={'Texto'}
                value={texto}
                onChangeText={(newText) => updateTexto(newText)}
            />

            <Button theme={{ colors: theme.colors.primary }} buttonColor="#148F77" textColor="#FFF" mode="elevated" onPress={() => openDataInicial(true)}>Data Inicial</Button>
            <Button buttonColor="#148F77" textColor="#FFF" mode="elevated" onPress={() => openDataFinal(true)}>Data Final</Button>

            <DatePicker
                modal
                title='Data Inicial'
                open={tagDataInicial}
                date={dataInicial} 
                mode="date"
                locale={'pt_BR'} 
                onConfirm={(date) => {
                    console.log("DAta:", date);
                    openDataInicial(false)
                    updateDataInicial(date)
                }}
                onCancel={ () => { openDataInicial(false)}}
                confirmText="Confirma"
                cancelText="Cancela"
            />

            <DatePicker
                modal
                title='Data Final'
                open={tagDataFinal}
                date={dataFinal} 
                mode="date"
                locale="pt_BR"
                onConfirm={(date) => {
                    openDataFinal(false)
                    updateDataFinal(date)
                }}
                onCancel={ () => { openDataFinal(false)}}
                confirmText="Confirma"
                cancelText="Cancela"
            />

            <Button mode="contained" onPress={() => consultaDiario()}>Consultar</Button>
            <ListaDiarios dados={ objDiario } navigation={ navigation }  />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    inputs: {
        marginTop: 30,
    }
});

export default withTheme(SettingsScreen);