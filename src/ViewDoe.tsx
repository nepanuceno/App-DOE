import { View, StyleSheet, Dimensions } from "react-native";
import React from 'react';
import Pdf from 'react-native-pdf';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});

const ViewDoe = ({ route, navigation }) => {

    console.log("Route:", route.params);

    const { id } = route.params;
    const source = { uri: `https://doe.to.gov.br/diario/${ id }/download`, cache: true };

    return (
        <View style={styles.container}>
            <Pdf
                source={source}
                onLoadComplete={(numberOfPages,filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page,numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf}/>
        </View>
    )

    // const { id } = route.params;
    // return (
    //     <SafeAreaView>
    //         <View>

    //         </View>
    //     </SafeAreaView>
    // )

    
};

export default ViewDoe;