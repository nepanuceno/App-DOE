import { FlatList, RefreshControl, View } from "react-native";

import Diario from "../Diario";
import { useGetDiarios } from "../../useGetDiarios";
import { useCallback, useEffect, useState } from "react";

interface Params {
    navigation: object
};


const ListaDiarios = ( props: Params ) => {
    const  objDiarios = useGetDiarios().objDiarios;
    const [objDiariosList, setDiariosList] = useState(objDiarios);
    const [refreshing, setRefreshing] = useState(false);

    console.log(objDiariosList)

    useEffect(() => {
            if (refreshing == true) {
                setDiariosList(useGetDiarios().objDiarios);
            }
    },[refreshing]);
    
    const onRefresh = () => {
        setRefreshing(true)
        console.log("Refresh")
    };

 


    const dados = objDiariosList.data;
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
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        />
    );
}

export default ListaDiarios;

function componentDidMount() {
    throw new Error("Function not implemented.");
}
