import { useGetDiariosPorEdicao } from "./useGetDiariosPorEdicao";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";

import React from "react";
import Diario from '../Diario';
import styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const SettingsScreen = ({ navigation }) => {
    const dados = useGetDiariosPorEdicao();

    console.log("DADOS: ", dados.dados);

    const onPress = (id: number) => {
        console.log('Abrindo Diario Oficial');
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

export default SettingsScreen;