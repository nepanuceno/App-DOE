import { FlatList, RefreshControl, View } from "react-native";
import Diario from "../Diario";
import { useEffect, useState } from "react";
interface Params {
    dados: object
    navigation: object
    childToParent
};


const ListaDiarios = ( props: Params ) => {
    const [refreshing, setRefresh] = useState(false);

    const onRefresh = () => {
        setRefresh(true);
        props.childToParent()
    }

    const dados = props.dados;

    useEffect(() => {
        console.log("FEz Refresh")
        setRefresh(false);
    }, [dados]);

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
            refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
            }
        />
    );
}

export default ListaDiarios;
