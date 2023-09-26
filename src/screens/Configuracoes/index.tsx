import { SafeAreaView, StatusBar, Text } from "react-native";
import { Appbar, DefaultTheme, Provider, Surface, ThemeProvider } from "react-native-paper";

const Configuracoes = () => {
    return (
        <Provider theme={ DefaultTheme }>
            <ThemeProvider theme={ DefaultTheme }>
                <StatusBar 
                    backgroundColor={DefaultTheme.colors.primary}
                />
                <Surface>
                    <Appbar.Header>
                        {/* <Appbar.BackAction onPress={()=>{ console.log('GoBack')}} /> */}
                        <Appbar.Content title="Consulta por Texto" />
                    </Appbar.Header>
                    <SafeAreaView >
                        <Text>Config</Text>
                    </SafeAreaView>
                </Surface>
            </ThemeProvider>
        </Provider>
    );
};

export default Configuracoes;