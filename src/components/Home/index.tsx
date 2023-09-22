import { SafeAreaView, ScrollView, View } from "react-native";
import ListaDiarios from "../ListaDiarios";
import { useGetDiarios } from "../../useGetDiarios";

const Home = ({ navigation }) => {
    const { objDiarios } = useGetDiarios();

    return (
        <SafeAreaView>
            <ListaDiarios dados={objDiarios.data} navigation={navigation}/>
        </SafeAreaView>
    )
};

export default Home;