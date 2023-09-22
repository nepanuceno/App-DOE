import { FlatList, RefreshControl, View } from "react-native";

import Diario from "../Diario";
import { useGetDiarios } from "../../useGetDiarios";
import { useCallback, useEffect, useState } from "react";

interface Params {
    navigation: object
};


const ListaDiarios = ( props: Params ) => {
    const { objDiarios } = useGetDiarios();
    const dados = objDiarios.data;
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

function componentDidMount() {
    throw new Error("Function not implemented.");
}
