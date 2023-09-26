import { useGetDiariosPorConsulta } from "../../services/useGetDiariosPorConsulta";
import { Alert, SafeAreaView, StatusBar, View } from "react-native";
import { Appbar, Provider, Surface, ThemeProvider, DefaultTheme, useTheme, withTheme } from "react-native-paper";
import moment from 'moment';
import React, { useEffect, useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import DatePicker from "react-native-date-picker";
import styles from "../../components/Diario"


const BuscaPorTexto = ({ navigation }) => {
    const baseUrl = 'http://10.113.254.110:8080/';
    const date = new Date();
    date.setDate(date.getDate() - 60);

    const [objDiario, setDiario] = useState(undefined);
    const [texto, updateTexto] = useState('');
    const [dataInicial, updateDataInicial] = useState(date);
    const [dataFinal, updateDataFinal] = useState(new Date());
    const [tagDataInicial, openDataInicial] = useState(false);
    const [tagDataFinal, openDataFinal] = useState(false);
    
    
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
                    <SafeAreaView >
                        <View style={styles.container}>
                            <TextInput style={ styles.itens }
                                label={'Expressão a procurar'}
                                value={texto}
                                onChangeText={(newText) => updateTexto(newText)}
                            />
                            <TextInput style={ styles.itens }
                                label={'Data Inicial'}
                                value={ moment(dataInicial).format("DD/MM/YYYY") }
                                onChangeText={(dataInicial) => updateTexto(dataInicial)}
                                onPressIn={() => openDataInicial(true)}
                                right={<TextInput.Icon name="calendar" />}
                            />
                            <TextInput style={ styles.itens }
                                label={'Data Final'}
                                value={ moment(dataFinal).format("DD/MM/YYYY") }
                                onChangeText={(dataFinal) => updateTexto(dataFinal)}
                                onPressIn={() => openDataFinal(true)}
                                right={<TextInput.Icon name="calendar" />}
                            />
                
                            <Button style={ styles.itens } mode="contained" onPress={() => consultaDiario()}>Consultar</Button>
                        </View>

                        <DatePicker
                            modal
                            title='Data Inicial'
                            open={tagDataInicial}
                            date={dataInicial} 
                            mode="date"
                            locale='pt_BR'
                            onConfirm={(date) => {
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

                    </SafeAreaView>
                </Surface>
            </ThemeProvider>
        </Provider>
    );
};

export default withTheme(BuscaPorTexto);