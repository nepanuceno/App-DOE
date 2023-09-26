import { useGetDiariosPorConsulta } from "../../useGetDiariosPorConsulta";
import { Alert, SafeAreaView, StatusBar, View } from "react-native";
import { Appbar, Button, DefaultTheme, Provider, Surface, TextInput, ThemeProvider, useTheme } from "react-native-paper";

import React, { useEffect, useState } from "react";
import DropDown from "react-native-paper-dropdown";
import styles from "../Diario/styles";


const BuscaPorDoc = ({ navigation }) => {

    const [objDiarios, setObjDiarios] = useState(undefined);
    const [numDoc, setNumDoc] = useState('');
    const [numTipoDoc, setNumTipoDoc] = useState(6);
    const [showDropDownTipoDoc, setShowDropDownTipoDoc] = useState(false);
    const theme = useTheme();

    const sendParams = () => {
        const parametrosDaConsulta = { por:'doc', 'tipo-documento': numTipoDoc, numero: numDoc }
        // const baseUrl = 'http://localhost:8080';    
        const baseUrl = 'http://10.113.254.110:8080/';    

        const dados = useGetDiariosPorConsulta(parametrosDaConsulta, baseUrl)
            .then(data => {
                console.log(data)
                if(data.status==true) {
                    setObjDiarios(data.diarios);
                } else {
                    Alert.alert(data.message);
                }
            }).catch(err => {
                console.log("ERRO GRAVE",err.toString())
                if (err.request._response != null) {
                    Alert.alert("Erro ao Consultar", err.request._response);
                } else {
                    Alert.alert("Erro ao Grave", "Ocorreu um erro ao consultar. Por favor, tente mais tarde.");
                }
            }
            );
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
                />
                <Surface>
                    <Appbar.Header theme={ { colors: {primary: 'green' } }}>
                        {/* <Appbar.BackAction onPress={()=>{ console.log('GoBack')}} /> */}
                        <Appbar.Content title="Consulta por Documento" />
                    </Appbar.Header>
                        <SafeAreaView style={ styles.container }>
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
                            <TextInput style={ styles.itens } 
                                label="Número do Documento"
                                value={numDoc}
                                onChangeText={(num) => setNumDoc(num)}
                            />
                            <View style={ styles.itens }>
                                <Button icon="magnify" mode="contained" onPress={() => sendParams()}>Consultar Diários</Button>
                            </View>
                                
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