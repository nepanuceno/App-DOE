import { useGetDiariosPorConsulta } from "../../useGetDiariosPorConsulta";
import { SafeAreaView, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Searchbar, ThemeProvider, Provider, Surface, Appbar, DefaultTheme } from "react-native-paper";

const BuscaPorEdicao = ({ navigation }) => {

    const [objDiario, setDiario] = useState(undefined);
    const [edicao, updateEdicao] = useState('');

    const baseUrl = 'http://localhost:8080';    
    
    const consultaDiario = () => {
        const parametrosDaConsulta = { por:'edicao', edicao: edicao }
        console.log("Buscando Diários por Edição");

        useGetDiariosPorConsulta(parametrosDaConsulta, baseUrl).then(data => {
            console.log(data)
            setDiario(data.diarios);
        }).catch(err => console.log(err.request));
    }

    useEffect(() => {
        if (objDiario != undefined){
            navigation.navigate('Resultado', {name: 'ResultDiarios', objDiarios: objDiario});
        }
    }, [objDiario]);
    
    // console.log(objDiario)
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
                    <SafeAreaView>
                        <Searchbar 
                        label={'Edição'}
                        value={edicao}
                        onChangeText={(newEdicao) => updateEdicao(newEdicao)}
                        />
                        <Button buttonColor="#0000FF" textColor="#FFF" onPress={() => consultaDiario()}>Consultar</Button>
                        {/* <ListaDiarios dados={ objDiario } navigation={ navigation }  /> */}
                    </SafeAreaView>
                </Surface>
            </ThemeProvider>
        </Provider>
    );
};

export default BuscaPorEdicao;
