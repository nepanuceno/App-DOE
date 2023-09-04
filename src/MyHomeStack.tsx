import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import ViewDoe from './ViewDoe';

const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{title: 'DOE - Últimas Edições'}} />
            <Stack.Screen name="DOE Detalhado" component={ViewDoe} options={{title: 'DOE Detalhado'}} />
        </Stack.Navigator>
    );
};

export default MyHomeStack;