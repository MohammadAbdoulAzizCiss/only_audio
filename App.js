import React from 'react';
import Home from './screens/Home';
import OTPScreen from './screens/Otp';
import Sign from './screens/Sign';
import Chat from './screens/Chat';
import Discussions from './screens/Discussions';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Otp" component={OTPScreen} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Discussions" component={Discussions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
