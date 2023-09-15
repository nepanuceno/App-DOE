import { useGetDiariosPorConsulta } from "../../useGetDiariosPorConsulta";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";

import React from "react";
import Diario from '../Diario';
import styles from "../../styles/styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ListaDiarios from "../ListaDiarios";


const SettingsScreen = ({ navigation }) => {
    const parametrosDaConsulta = { por:'doc', numero: 88 }
    const dados = useGetDiariosPorConsulta(parametrosDaConsulta).dados;
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