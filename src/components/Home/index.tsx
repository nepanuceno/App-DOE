import { FlatList, SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

import Diario from '../Diario';
import { useGetDiarios } from "../../useGetDiarios";
import styles from "../../styles/styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Separator = () => {
    return <View style={styles.separator} />;
}

const Home = ({ navigation }) => {
    const {dados} = useGetDiarios();
    console.log("Navigation: ",navigation);
    console.log(dados);

    const onPress = (id: number) => {
        console.log('Testes');
        navigation.navigate('DOE Detalhado', {name: 'ViewDoe', id: id});
    }

    return (
        <SafeAreaView>
            <FlatList data={dados} renderItem={({item}) => (
                <View>
                    <Diario
                        id={item.id} 
                        edicao={item.edicao} 
                        data={item.data} 
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
                        {/* <Image
                            source={require('../../images/livro-do-circulo-aberto_36pt_2x.png')}
                            style={styles.floatingButtonStyle}
                        /> */}
                        <MaterialCommunityIcons name="book-open-variant" color='#0000F0' size={60} />

                    </TouchableOpacity>
                    <Separator />
                </View>
            ) } />
        </SafeAreaView>
        
    )
};

export default Home;