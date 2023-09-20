import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MyHomeStack from "./MyHomeStack";
import SettingsScreen from "./SettingsScreen";
import BuscaPorTexto from './components/BuscaPorTexto';
import BuscaPorDoc from './components/BuscaPorDoc';
import BuscaPorEdicao from './components/BuscaPorEdicao';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
              name="Principal"
              component={MyHomeStack}
              options={
                { 
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    ),
                }
              }
          />
          <Tab.Screen 
              name="Busca Por Texto"
              component={BuscaPorTexto}
              options={
                  {
                      tabBarLabel: 'Por Texto',
                      tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="text-box-search-outline" color={color} size={24} />
                  ),
                  }
              }
          />
          <Tab.Screen 
              name="Busca Por Documento"
              component={BuscaPorDoc}
              options={
                  {
                      tabBarLabel: 'Por Documento',
                      tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="file-search" color={color} size={24} />
                  ),
                  }
              }
          />
          <Tab.Screen 
              name="Busca Por Edição"
              component={BuscaPorEdicao}
              options={
                  {
                      tabBarLabel: 'Por Edição',
                      tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="layers-search" color={color} size={24} />
                  ),
                  }
              }
          />
          <Tab.Screen 
              name="Configurações"
              component={SettingsScreen}
              options={
                  {
                      tabBarLabel: 'Configurações',
                      tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="cog" color={color} size={24} />
                  ),
                  }
              }
          />
        </Tab.Navigator>
      );
};

export default MyTabs;