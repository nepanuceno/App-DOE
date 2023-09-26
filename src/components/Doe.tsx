import { FlatList, SafeAreaView } from "react-native";
import Diario from './Diario';
import { useGetDiarios } from "../services/useGetDiarios";

const Doe = () => {
    const {dados} = useGetDiarios();
    console.log(dados);
    return (
        <SafeAreaView>
            <FlatList data={dados} renderItem={({item}) => (
                // <Diario 
                //     id={item.id} 
                //     edicao={item.edicao} 
                //     data={item.data} 
                //     suplemento={item.suplemento} 
                //     paginas={item.paginas} 
                //     tamanho={item.tamanho} 
                //     downloads={item.downloads} 
                //     link={item.link} 
                //     imagem={item.imagem}> 
                // </Diario>
            ) } />
        </SafeAreaView>
    )
};

export default Doe;