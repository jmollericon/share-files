import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../views/Home';
import DeviceInfo from '../../views/DeviceInfo';
import TakePhoto from '../../views/TakePhoto';
import BandwidthSpeed from '../../views/BandwidthSpeed';
import NetworkInfo from '../../views/NetworkInfo';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="DeviceInfo" component={DeviceInfo} />
      <Stack.Screen name="TakePhoto" component={TakePhoto} />
      <Stack.Screen name="TakeSnapshot" component={HomeScreen} />
      <Stack.Screen name="BandwidthSpeed" component={BandwidthSpeed} />
      <Stack.Screen name="NetworkInfo" component={NetworkInfo} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
