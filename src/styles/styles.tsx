import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    buttonOuterLayout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        backgroundColor: '#FFF',
        marginBottom: 10
    },

    separator: {
        marginVertical: 20,
        borderBottomColor: "#737373",
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    touchableOpacityStyle: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: -2,
        bottom: 80,
    },

    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },

    input: {
        height: 40,
        margin: 10,
        
    },
});

export default styles;