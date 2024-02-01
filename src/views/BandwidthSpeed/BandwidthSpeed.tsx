import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import RNFetchBlob from 'rn-fetch-blob';

const downloadSizeInBits = 21135528; // bits
const metric = 'Mbps';

const measureConnectionSpeed = (imageURIParam: any): any => {
  const imageURI = imageURIParam
    ? imageURIParam
    : 'https://educa.att.gob.bo/pluginfile.php/1/theme_lambda/slide1image/1660671444/Slider-01.png';

  // 'https://drive.google.com/open?id=1MBHJXeRxMLLwHFpqbgTdEPsFArMM0cz7'; // https://www.google.com

  const startTime = new Date().getTime();
  console.log('before');
  return new Promise((resolve, reject) => {
    RNFetchBlob.config({
      fileCache: false,
    })
      .fetch('GET', imageURI, {})
      .then(() => {
        console.log('completed');
        const endTime = new Date().getTime();
        const duration = (endTime - startTime) / 1000; // sec
        const speed = downloadSizeInBits / (duration * 1000000);

        resolve({metric, speed});
      })
      .catch(reject);
  });
};

const getNetworkBandwidth = async (): Promise<any> => {
  console.log('getNetworkBandwidth');
  try {
    const speeds = [];
    const counter = 2;

    for (let i = 0; i < counter; i++) {
      console.log('i = ', i);
      const networkSpeed = await measureConnectionSpeed(null);
      speeds.push(networkSpeed.speed);
      console.log({networkSpeed}); // Network bandwidth speed, Mbps
    }

    const sum = speeds.reduce((a, b) => a + b);
    const average_speed = sum / counter;

    return average_speed.toFixed(2);
  } catch (err) {
    console.log(err);
  }
};

const BandwidthSpeed = () => {
  const [speed, setSpeed] = useState(0);
  const [loading, setLoading] = useState(false);

  const onPress = async () => {
    setLoading(true);
    setSpeed(0);
    const speed_avg = await getNetworkBandwidth();
    console.log('average_speed', speed_avg, 'Mbps');
    setSpeed(speed_avg);
    setLoading(false);
  };

  return (
    <View>
      <Text>BandwidthSpeed</Text>
      <TouchableOpacity onPress={() => onPress()} style={styles.button}>
        <Text style={styles.text}>AQUIIII</Text>
      </TouchableOpacity>
      <Text style={styles.speed}>{speed} Mbps</Text>
      {loading && <Text style={styles.speed}>Procesando...</Text>}
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
  speed: {
    fontSize: 25,
    textAlign: 'center',
  },
});
