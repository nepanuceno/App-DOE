import { useGetDiariosPorEdicao } from "../../useGetDiariosPorConsulta";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";

import React from "react";
import Diario from '../Diario';
import styles from "../../styles/styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ListaDiarios from "../ListaDiarios";


const SettingsScreen = ({ navigation }) => {
    const parametrosDaConsulta = { por:'texto', texto:'107947', 'data-inicial':'2023-08-01', 'data-final':'2023-09-13' }
    const dados = useGetDiariosPorEdicao(parametrosDaConsulta).dados;
    const onPress = (id: number) => {
        console.log('Abrindo Diario Oficial');
        navigation.navigate('DOE Detalhado', {name: 'ViewDoe', id: id});
    }

    return (
        <SafeAreaView>
            <ListaDiarios dados={ dados } navigation={ navigation }  />
        </SafeAreaView>
    );
};

export default SettingsScreen;