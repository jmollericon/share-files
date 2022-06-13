import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../views/Home';
import DeviceInfo from '../../views/DeviceInfo';
import TakePhoto from '../../views/TakePhoto';
import RecordVideo from '../../views/RecordVideo';

const Stack = createNativeStackNavigator();

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
      <Stack.Screen name="RecordVideo" component={RecordVideo} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
