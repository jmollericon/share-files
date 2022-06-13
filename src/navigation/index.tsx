import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './Stack';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
