import { useGetDiariosPorConsulta } from "../../useGetDiariosPorConsulta";
import { Alert, SafeAreaView, StatusBar, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Searchbar, ThemeProvider, Provider, Surface, Appbar, DefaultTheme } from "react-native-paper";
import styles from "../Diario/styles";

const BuscaPorEdicao = ({ navigation }) => {

    const [objDiario, setDiario] = useState(undefined);
    const [edicao, updateEdicao] = useState('');

    const baseUrl = 'http://10.113.254.110:8080/';    
    
    const consultaDiario = () => {
        const parametrosDaConsulta = { por:'edicao', edicao: edicao }
        console.log("Buscando Diários por Edição");

        useGetDiariosPorConsulta(parametrosDaConsulta, baseUrl).then(data => {
            console.log("Status:", data.status)
            if(data.status==true) {
                console.log(data)
                setDiario(data.diarios);
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
        });
    }

    useEffect(() => {
        if (objDiario != undefined){
            console.log("Diário Enviado: ",objDiario)
            navigation.navigate('Resultado', {name: 'ResultDiarios', objDiarios: objDiario});
        }
    }, [objDiario]);
    
    return (
        <Provider theme={ DefaultTheme }>
            <ThemeProvider theme={ DefaultTheme }>
                <StatusBar 
                    backgroundColor={DefaultTheme.colors.primary}
                />
                <Surface>
                    <Appbar.Header>
                        {/* <Appbar.BackAction onPress={()=>{ console.log('GoBack')}} /> */}
                        <Appbar.Content title="Consulta por Edição" />
                    </Appbar.Header>
                    <SafeAreaView style={ styles.container }>
                        <Searchbar style={ styles.itens }
                            mode="bar"
                            label={'Edição'}
                            value={edicao}
                            placeholder="Edição a consultar"
                            onChangeText={(newEdicao) => updateEdicao(newEdicao)}
                        />
                        <View style={ styles.itens }>
                            <Button icon="magnify" mode="contained" onPress={() => consultaDiario()}>Consultar</Button>
                        </View>
                    </SafeAreaView>
                </Surface>
            </ThemeProvider>
        </Provider>
    );
};

export default BuscaPorEdicao;
