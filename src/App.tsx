import * as React from 'react';

import { NavigationContainer } from "@react-navigation/native";

import MyTabs from './MyTabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <MyTabs />
            </SafeAreaProvider>
        </NavigationContainer>
    )
};

export default App;