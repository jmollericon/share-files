import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import RNFetchBlob from 'rn-fetch-blob';

const downloadSizeInBits = 21135528; // bits
const metric = 'MBps';

const measureConnectionSpeed = (imageURIParam: any): any => {
  const imageURI = imageURIParam
    ? imageURIParam
    : 'https://educa.att.gob.bo/pluginfile.php/1/theme_lambda/slide1image/1660671444/Slider-01.png';

  // 'https://drive.google.com/open?id=1MBHJXeRxMLLwHFpqbgTdEPsFArMM0cz7'; // https://www.google.com

  const startTime = new Date().getTime();

  return new Promise((resolve, reject) => {
    RNFetchBlob.config({
      fileCache: false,
    })
      .fetch('GET', imageURI, {})
      .then(() => {
        const endTime = new Date().getTime();
        const duration = (endTime - startTime) / 1000; // sec
        const speed = downloadSizeInBits / (duration * 1000000);

        resolve({metric, speed});
      })
      .catch(reject);
  });
};

const getNetworkBandwidth = async (): Promise<void> => {
  console.log('getNetworkBandwidth');
  try {
    const networkSpeed = await measureConnectionSpeed(null);
    console.log({networkSpeed}); // Network bandwidth speed, Mbps
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
