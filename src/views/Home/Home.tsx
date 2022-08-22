import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = ({navigation}: any) => {
  const goTo = (screen: string): void => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.buttonContainer}>
        <Text style={styles.title}>Share Files App</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => goTo('DeviceInfo')}>
          <Text>Device Info</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => goTo('BandwidthSpeed')}>
          <Text>Bandwidth-speed</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => goTo('TakePhoto')}>
          <Text>Take Photo</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => goTo('TakeSnapshot')}>
          <Text>Take Snapshot</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => goTo('TakeSnapshot')}>
          <Text>Record Video</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => goTo('TakeSnapshot')}>
          <Text>Record Audio</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: '600',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#36be95',
    padding: 15,
    width: 200,
    margin: 5,
  },
});

export default Home;
