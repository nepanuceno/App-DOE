import { useGetDiariosPorEdicao } from "../../useGetDiariosPorConsulta";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";

import React from "react";
import Diario from '../Diario';
import styles from "../../styles/styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const ListaDeDiarios = ({ navigation }) => {
    const parametrosDaConsulta = { por:'edicao', edicao: 6408 }
    const dados = useGetDiariosPorEdicao(parametrosDaConsulta);
    const onPress = (id: number) => {
        navigation.navigate('DOE Detalhado', {name: 'ViewDoe', id: id});
    }

    return (
        <SafeAreaView>
            <FlatList data={dados.dados} renderItem={({item}) => (
                <View>
                    <Diario
                        id={item.id} 
                        edicao={item.edicao} 
                        data={item.data_publicacao} 
                        suplemento={item.suplemento} 
                        paginas={item.paginas} 
                        tamanho={item.tamanho} 
                        downloads={item.downloads} 
                        link={item.link} 
                        imagem={item.imagem} 
                    />
                    
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => onPress(item.id)}
                        style={styles.touchableOpacityStyle}>
                        <MaterialCommunityIcons name="book-open-variant" color='#5499C7' size={60} />
                    </TouchableOpacity>
                    {/* <Separator /> */}
                </View>
            ) } />
        </SafeAreaView>
    );
};

export default ListaDeDiarios;