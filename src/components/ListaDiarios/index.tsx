import { FlatList, View } from "react-native";
import Diario from "../Diario";
interface Params {
    dados: object
    navigation: object
};

const ListaDiarios = ( props: Params ) => {
    const dados = props.dados
    return (
        <FlatList 
            data={dados}
            renderItem={({item}) => (
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
        )}
        />
    );
}

export default ListaDiarios;
