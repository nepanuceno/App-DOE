import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import ViewDoe from './components/ViewDoe';
import ResultDiarios from './components/ResultDiarios';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{title: 'DOE - Últimas Edições'}} />
            <Stack.Screen name="DOE Detalhado" component={ViewDoe} options={{title: 'DOE Detalhado'}} />
            <Stack.Screen name="Resultado" component={ResultDiarios} options={{title: 'Resultado da Busca'}} />
        </Stack.Navigator>
    );
};

export default Routes;