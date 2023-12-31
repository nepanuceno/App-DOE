import { Image, Linking, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDownloadDiario } from "../../services/useDownloadDiario";
import { Card } from "react-native-paper";

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

    const shareMessage = async (message:string) => { 
        try {
          const result = await Share.share({
            message: message,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              console.log("compartilhado com o tipo de atividade de: " + result.activityType);
            } else {
              console.log("compartilhado");
            }
          } else if (result.action === Share.dismissedAction) {
            console.log("descartado");
          }
        } catch (error) {
          alert(error.message);
        }
      };
    

        const onShare = (link:string) => {
            Linking.openURL (`whatsapp://send?text=Olha o DOE ai!`);
        }

    
    return (
        <Card style={ {margin: 5} }>
            <Card.Content>
                <View style={styles.topo}>
                    <Text style={styles.textData}>{props.data}</Text>
                </View>
                <View style={styles.diario} >
                    <View style={styles.pagina}>
                        <Image source={{ uri: uri }} style={styles.tinyLogo} />
                    </View>
                </View>
                <View style={styles.comandos}>
                    <Text style={styles.textComandos}>Nº: {props.edicao}</Text>
                    <Text style={styles.textComandos}>{props.paginas} pág</Text>
                    <Text style={styles.textComandos}>
                        {props.downloads} 
                        <TouchableOpacity activeOpacity={0.7} onPress={() => onDownlod(uriFile)} >
                            <Text style={styles.textComandos}>
                                <MaterialCommunityIcons name="download" color='#FFF' size={20} />
                            </Text>
                        </TouchableOpacity>
                    </Text>
                    
                    <Text style={styles.textComandos}>
                        {props.tamanho}
                    </Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => onPress(props.id)} style={stylesButton.touchableOpacityStyleEye} >
                        <Text style={styles.textComandos}>
                            <MaterialCommunityIcons name="eye" color='#FFE4E1' size={30} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => shareMessage(props.link)} style={stylesButton.touchableOpacityStyleShare }>
                        <Text style={styles.textComandos}>
                            <MaterialCommunityIcons name="share" color='#FFE4E1' size={30} />
                        </Text>
                    </TouchableOpacity>
                </View>
            </Card.Content>
        </Card>
    );
};

export default Diario;

function alert(message: any) {
    throw new Error("Function not implemented.");
}

const stylesButton = StyleSheet.create({
    touchableOpacityStyleShare: {
      position: 'absolute',
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      right: -20,
      bottom: 90,
      backgroundColor: '#DA70D6',
      borderRadius: 50,
    },
    touchableOpacityStyleEye: {
        position: 'absolute',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        right: -20,
        bottom: 40,
        backgroundColor: '#DA70D6',
        borderRadius: 50,
        
    },
    floatingButtonStyle: {
      resizeMode: 'contain',
      width: 70,
      height: 70,
    },
});
