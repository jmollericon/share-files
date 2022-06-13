import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import AppNavigation from './src/navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigation />
    </>
  );
};

export default App;
