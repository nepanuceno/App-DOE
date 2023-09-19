import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import ViewDoe from './ViewDoe';
import ResultDiarios from './components/ResultDiarios';

const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{title: 'DOE - Últimas Edições'}} />
            <Stack.Screen name="DOE Detalhado" component={ViewDoe} options={{title: 'DOE Detalhado'}} />
            <Stack.Screen name="Resultado" component={ResultDiarios} options={{title: 'Resultado da Busca'}} />
        </Stack.Navigator>
    );
};

export default MyHomeStack;