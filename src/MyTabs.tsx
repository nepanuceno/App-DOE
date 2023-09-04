import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MyHomeStack from "./MyHomeStack";
import SettingsScreen from "./SettingsScreen";

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