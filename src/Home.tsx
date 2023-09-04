import { FlatList, SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

import Diario from './components/Diario';
import { useGetDiarios } from "./useGetDiarios";

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        hairlineWidth: 3,
        borderBottomColor: '#FF00FF',
      },
    separator: {
        marginVertical: 20,
        borderBottomColor: "#737373",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 80,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
});

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
                        <Image
                            source={require('./images/livro-do-circulo-aberto_36pt_2x.png')}
                            style={styles.floatingButtonStyle}
                        />
                    </TouchableOpacity>
                    <Separator />
                </View>
            ) } />
        </SafeAreaView>
    )
};

export default Home;