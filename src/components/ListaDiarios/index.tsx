import { FlatList, View } from "react-native";

import Diario from "../Diario";

interface Params {
    dados: Array<object>,
    navigation: object
};

const ListaDiarios = ( props: Params ) => {
    return (
        <FlatList data={props.dados} renderItem={({item}) => (
            <View>
                <Diario
                    id={item.id} 
                    edicao={item.edicao} 
                    data={item.data_publicacao ? item.data_publicacao : item.data } 
                    suplemento={item.suplemento} 
                    paginas={item.paginas} 
                    tamanho={item.tamanho} 
                    downloads={item.downloads} 
                    link={item.link} 
                    imagem={item.imagem}
                    navigation={props.navigation} 
                />
            </View>
        ) } />
    );
}

export default ListaDiarios;