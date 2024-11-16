import 'react-native-gesture-handler';
// import './global.css';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Screens/Login';
import Registration from './src/Screens/Registration';
import Dashboard from './src/Screens/Dashboard';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          name="Dashboard"
          options={{headerShown: false}}
          component={Dashboard}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="Register"
          options={{headerShown: false}}
          component={Registration}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
