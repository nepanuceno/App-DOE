import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDownloadDiario } from "../../useDownloadDiario";
// import useDownloadDiario from "../../useDownloadDiario";

interface Params {
    id: number,
    edicao: string,
    data: string,
    suplemento: boolean,
    paginas: string,
    tamanho: string,
    downloads: string,
    link: string,
    imagem: string,
    navigation: any,
}

const Diario = (props: Params) => {

    console.log("##############: ",props);

    const uri = `https://doe.to.gov.br/diario/${props.id}/imagem`;
    const uriFile = `https://doe.to.gov.br/diario/${props.id}/download`;

    const onPress = (id: number) => {
        console.log('Abrindo Diario Oficial');
        props.navigation.navigate('DOE Detalhado', {name: 'ViewDoe', id: id});
    }

    const onDownlod = (uri:string) => {
        console.log("Baixando DOE", uri)
        useDownloadDiario(uri, props.edicao);
    }
    
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
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => onDownlod(uriFile)} >
                        <Text style={styles.textComandos}>
                            <MaterialCommunityIcons name="download" color='#FFF' size={20} />
                        </Text>
                </TouchableOpacity>
                </Text>
                
                <Text style={styles.textComandos}>
                    {props.tamanho}
                </Text>
                <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => onPress(props.id)} >
                        <Text style={styles.textComandos}>
                            <MaterialCommunityIcons name="eye" color='#FFF' size={30} />
                        </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Diario;