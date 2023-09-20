import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // shadowColor: '#000000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.5,
        // shadowRadius: 20,
        margin: 10,

    },

    diario: {
        padding: 0,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFD700',
        margin: 0,
    },

    tinyLogo: {
        flex: 1,
        justifyContent: 'space-between',
        width: 320,
        height: 450,
    },
    pagina: {
        padding: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        width: 300
    },
    topo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2471A3',
        height: 40,
        verticalAlign: 'middle',
    },

    comandos: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#2471A3',
        paddingTop: 5,
        paddingBottom: 5,
    },
    textData: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
        color: '#fff',
        fontWeight: '700',
    },
    textComandos: {
        fontWeight: '700',
        color: '#fff',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
      },
});

export default styles;