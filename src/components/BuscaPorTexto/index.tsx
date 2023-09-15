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
    
    const [objDiario, setDiario] = useState({});
    const [texto, updateTexto] = useState('');
    const [dataInicial, updateDataInicial] = useState(new Date());
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
            setDiario(data.diarios);
        }).catch(err => console.log(err.message));
    }
    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.primary }}>
            <Text>Consulta Por Edição</Text>
            <TextInput 
                label={'Texto'}
                value={texto}
                onChangeText={(newText) => updateTexto(newText)}
                style={style.inputs}
            />

            <Button buttonColor="#148F77" textColor="#FFF" mode="elevated" onPress={() => openDataInicial(true)}>Data Inicial</Button>
            <Button buttonColor="#148F77" textColor="#FFF" mode="elevated" onPress={() => openDataFinal(true)}>Data Final</Button>

            <DatePicker
                modal
                open={tagDataInicial}
                date={dataInicial} 
                mode="date"
                locale="pt_BR"
                onConfirm={(date) => {
                    openDataInicial(false)
                    updateDataInicial(dataInicial)
                }}
                onCancel={ () => { openDataInicial(false)}}
            />

            <DatePicker
                modal
                open={tagDataFinal}
                date={dataFinal} 
                mode="date"
                locale="pt_BR"
                onConfirm={(date) => {
                    openDataFinal(false)
                    updateDataFinal(dataFinal)
                }}
                onCancel={ () => { openDataFinal(false)}}

            />

            {/* <TextInput 
                label={'Data Inicial'}
                value={dataInicial}
                onChangeText={(newDate) => updateDataInicial(newDate)}
                left={<TextInput.Icon icon="calendar" />}
            /> */}

            {/* <TextInput 
                label={'Data Final'}
                value={dataFinal}
                onChangeText={(newDate) => updateDataFinal(newDate)}
                left={<TextInput.Icon icon="calendar" />}
            /> */}
            <Button buttonColor="#0000FF" textColor="#FFF" onPress={() => consultaDiario()}>Consultar</Button>
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