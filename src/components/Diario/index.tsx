import { Image, Text, View } from "react-native";
import styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface Params {
    id: string,
    edicao: string,
    data: string,
    suplemento: boolean,
    paginas: string,
    tamanho: string,
    downloads: string,
    link: string,
    imagem: string,
}

const Diario = (props: Params) => {

    console.log(props);

    const uri = `https://doe.to.gov.br/diario/${props.id}/imagem`;
    
    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                    <Text style={styles.textData}>{props.data}</Text>
            </View>
            <View style={styles.diario} >
                <View style={styles.pagina}>
                    <Image 
                        source={{ uri: uri }} 
                        style={styles.tinyLogo} />
                </View>
            </View>
            <View style={styles.comandos}>
                <Text style={styles.textComandos}>Nº: {props.edicao}</Text>
                <Text style={styles.textComandos}>{props.paginas} pág</Text>
                <Text style={styles.textComandos}>
                    {props.downloads} 
                    <MaterialCommunityIcons name="download" color='#FFF' size={22} />
                </Text>
                <Text style={styles.textComandos}>
                    {props.tamanho}
                </Text>
            </View>
        </View>
    );
};

export default Diario;