import { useGetDiariosPorEdicao } from "../../useGetDiariosPorConsulta";
import { SafeAreaView } from "react-native";

import React from "react";
import ListaDiarios from "../ListaDiarios";


const SettingsScreen = ({ navigation }) => {
    const parametrosDaConsulta = { por:'edicao', edicao: 6390 }
    const dados = useGetDiariosPorEdicao(parametrosDaConsulta).dados;

    return (
        <SafeAreaView>
           <ListaDiarios dados={ dados } navigation={ navigation }  />
        </SafeAreaView>
    );
};

export default SettingsScreen;