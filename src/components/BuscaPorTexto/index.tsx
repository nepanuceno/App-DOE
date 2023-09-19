import { useGetDiariosPorConsulta } from "../../useGetDiariosPorConsulta";
import { Alert, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Appbar, Provider, Surface, ThemeProvider, DefaultTheme, useTheme, withTheme } from "react-native-paper";

import React, { useEffect, useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import DatePicker from "react-native-date-picker";


const BuscaPorTexto = ({ navigation }) => {
    const baseUrl = 'http://localhost:8080';    

    const date = new Date();
    date.setDate(date.getDate() - 60);

    const [objDiario, setDiario] = useState(undefined);
    const [texto, updateTexto] = useState('');
    const [dataInicial, updateDataInicial] = useState(date);
    const [dataFinal, updateDataFinal] = useState(new Date());
    const [tagDataInicial, openDataInicial] = useState(false);
    const [tagDataFinal, openDataFinal] = useState(false);
    const theme = useTheme();
    const parametrosDaConsulta = { por:'texto', texto: texto, 'data-inicial': dataInicial, 'data-final': dataFinal}
   
    const consultaDiario = () => {
        console.log("Buscando Diários por Texto");

        useGetDiariosPorConsulta(parametrosDaConsulta, baseUrl)
        .then(data => {
            console.log(data)
            if(data.status==true) {
                setDiario(data.diarios);
            } else {
                Alert.alert(data.message);
            }
        }).catch(err => console.log(err.message));
    }

    useEffect(() => {
        if (objDiario != undefined){
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
                        <Appbar.Content title="Consulta por Texto" />
                    </Appbar.Header>
                    <SafeAreaView>
                        <TextInput 
                            label={'Texto'}
                            value={texto}
                            onChangeText={(newText) => updateTexto(newText)}
                        />

                        <Button 
                            compact={true} 
                            theme={{ colors: theme.colors.primary }} 
                            textColor={DefaultTheme.colors.primary} 
                            mode="text" 
                            icon="calendar"
                            onPress={() => openDataInicial(true)}>
                                Data Inicial
                        </Button>
                        <Button 
                            compact={true} 
                            textColor={ DefaultTheme.colors.primary }
                            mode="text" 
                            onPress={() => openDataFinal(true)}
                            icon="calendar">
                            Data Final
                        </Button>

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
                    </SafeAreaView>
                </Surface>
            </ThemeProvider>
        </Provider>
    );
};

const style = StyleSheet.create({
    inputs: {
        marginTop: 30,
    }
});

export default withTheme(BuscaPorTexto);