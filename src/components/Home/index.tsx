import { SafeAreaView } from "react-native";

import { useGetDiarios } from "../../useGetDiarios";
import ListaDiarios from "../ListaDiarios";


const Home = ({ navigation }) => {
    const {objDiarios} = useGetDiarios();
    
    return (
        <SafeAreaView>
            <ListaDiarios dados={ objDiarios } navigation={navigation} />
        </SafeAreaView>
        
    )
};

export default Home;