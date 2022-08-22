import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const getNetworkBandwidth = async (): Promise<void> => {
  console.log('getNetworkBandwidth');
  try {
    console.log('here');
  } catch (err) {
    console.log(err);
  }
};

const BandwidthSpeed = () => {
  return (
    <View>
      <Text>BandwidthSpeed</Text>
      <TouchableOpacity
        onPress={() => getNetworkBandwidth()}
        style={styles.button}>
        <Text style={styles.text}>AQUIIII</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BandwidthSpeed;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#123456',
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
});
