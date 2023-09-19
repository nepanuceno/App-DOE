import { useGetDiariosPorConsulta } from "../../useGetDiariosPorConsulta";
import { SafeAreaView, StatusBar } from "react-native";
import { Appbar, Button, DefaultTheme, Provider, Surface, TextInput, ThemeProvider, useTheme } from "react-native-paper";

import React, { useEffect, useState } from "react";
import ListaDiarios from "../ListaDiarios";
import DropDown from "react-native-paper-dropdown";


const BuscaPorDoc = ({ navigation }) => {

    const [objDiarios, setObjDiarios] = useState(undefined);
    const [numDoc, setNumDoc] = useState('');
    const [numTipoDoc, setNumTipoDoc] = useState(6);
    const [showDropDownTipoDoc, setShowDropDownTipoDoc] = useState(false);
    const theme = useTheme();

    const sendParams = () => {
        const parametrosDaConsulta = { por:'doc', 'tipo-documento': numTipoDoc, numero: numDoc }
        const baseUrl = 'http://localhost:8080';    
        const dados = useGetDiariosPorConsulta(parametrosDaConsulta, baseUrl)
            .then(data => {
                console.log(data)
                setObjDiarios(data.diarios);
            }).catch(err => console.log(err.message));
    }

    useEffect(() => {
        if (objDiarios != undefined){
            navigation.navigate('Resultado', {name: 'ResultDiarios', objDiarios: objDiarios});
        }
    }, [objDiarios]);

    return (
        <Provider theme={ DefaultTheme }>
            <ThemeProvider theme={ DefaultTheme }>
                <StatusBar 
                    backgroundColor={DefaultTheme.colors.primary}
                    // barStyle={"light-content"}
                />
                <Surface>
                    <Appbar.Header theme={ { colors: {primary: 'green' } }}>
                        {/* <Appbar.BackAction onPress={()=>{ console.log('GoBack')}} /> */}
                        <Appbar.Content title="Consulta por Documento" />
                    </Appbar.Header>
                        <SafeAreaView>
                            <DropDown
                                label={"Tipos de Documento"}
                                mode={"flat"}
                                visible={showDropDownTipoDoc} 
                                onDismiss={ () => setShowDropDownTipoDoc(false) } 
                                showDropDown={ () => setShowDropDownTipoDoc(true) } 
                                value={numTipoDoc}
                                setValue={setNumTipoDoc}
                                list={listaDeTiposDeDocumento}      
                            />
                            <TextInput 
                                label="Número do Documento"
                                value={numDoc}
                                onChangeText={(num) => setNumDoc(num)}
                            />
                            <Button icon="magnify" mode="contained" onPress={() => sendParams()}>Consultar Diários</Button>
                        </SafeAreaView>
                </Surface>
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

export default BuscaPorDoc;