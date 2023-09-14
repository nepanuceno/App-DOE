import { FlatList, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Diario from "../Diario";
import styles from "../../styles/styles";
import { object } from "yup";

interface Params {
    dados: object,
};

const ListaDiarios = ( props: Params ) => {

    
    return (
        <FlatList data={props} renderItem={({item}) => (
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