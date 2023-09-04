import * as React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

import MyTabs from './MyTabs';

const App = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
};

export default App;