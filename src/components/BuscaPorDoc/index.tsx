import { useGetDiariosPorConsulta } from "../../useGetDiariosPorConsulta";
import { FlatList, SafeAreaView, StatusBar, TouchableOpacity, View } from "react-native";
import { Appbar, Button, DefaultTheme, Provider, TextInput, ThemeProvider } from "react-native-paper";

import React, { useEffect, useState } from "react";
import Diario from '../Diario';
import styles from "../../styles/styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ListaDiarios from "../ListaDiarios";
import DropDown from "react-native-paper-dropdown";


const SettingsScreen = ({ navigation }) => {

    const [objDiarios, setObjDiarios] = useState({});
    const [numDoc, setNumDoc] = useState('');
    const [numTipoDoc, setNumTipoDoc] = useState(6);
    const [showDropDownTipoDoc, setShowDropDownTipoDoc] = useState(false);

    
    // useEffect( () => {
        
        // }, []);
        
        const sendParams = () => {
            const parametrosDaConsulta = { por:'doc', 'tipo-documento': numTipoDoc, numero: numDoc }
            const baseUrl = 'http://localhost:8080';    
        const dados = useGetDiariosPorConsulta(parametrosDaConsulta, baseUrl)
            .then(data => {
                console.log(data)
                setObjDiarios(data.diarios);
            }).catch(err => console.log(err.message));
    }

    return (
        <Provider>

            <ThemeProvider>
                <StatusBar 
                    backgroundColor={DefaultTheme.colors.primary}
                    barStyle={"light-content"}
                />

                <Appbar.Header>
                    
                </Appbar.Header>

                <SafeAreaView>
                    <DropDown
                    label={"Tipos de Documento"}
                    mode={"outlined"}
                    visible={showDropDownTipoDoc} 
                    onDismiss={ () => setShowDropDownTipoDoc(true) } 
                    showDropDown={ () => setShowDropDownTipoDoc(false) } 
                    value={undefined} setValue={function (_value: any): void {
                        throw new Error("Function not implemented.");
                    } } 
                    list={listaDeTiposDeDocumento}            
                    />
                    <TextInput 
                        label="Número do Documento"
                        value={numDoc}
                        onChangeText={(num) => setNumDoc(num)}
                    />
                    <Button mode="contained" onPress={() => sendParams()}>Consultar Diários</Button>
                    <ListaDiarios dados={ objDiarios } navigation={ navigation }  />
                </SafeAreaView>
            </ThemeProvider>

        </Provider>

    );
};

const listaDeTiposDeDocumento = [
    {
        label: "Decretos",
        value: 1
    },
    {
        label: "Leis",
        value: 2
    },
    {
        label: "Emenda Constitucional",
        value: 3
    },
    {
        label: "Lei Complementar",
        value: 4
    },
    {
        label: "Medida Provisória",
        value: 5
    },
    {
        label: "Atos",
        value: 6
    },
    
]

export default SettingsScreen;