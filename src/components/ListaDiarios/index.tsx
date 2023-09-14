import { FlatList, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Diario from "../Diario";
import styles from "../../styles/styles";

interface Params {
    dados: Array<object>,
    navigation: object
};

const ListaDiarios = ( props: Params ) => {
    const onPress = (id: number) => {
        console.log('Abrindo Diario Oficial');
        props.navigation.navigate('DOE Detalhado', {name: 'ViewDoe', id: id});
    }

    return (
        <FlatList data={props.dados} renderItem={({item}) => (
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
                    <MaterialCommunityIcons name="book-open-variant" color='#0000F0' size={60} />
                </TouchableOpacity>
            </View>
        ) } />
    );
}

export default ListaDiarios;