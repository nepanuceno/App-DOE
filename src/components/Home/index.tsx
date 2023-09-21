import { SafeAreaView } from "react-native";
import ListaDiarios from "../ListaDiarios";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ListaDiarios navigation={navigation} />
        </SafeAreaView>
    )
};

export default Home;