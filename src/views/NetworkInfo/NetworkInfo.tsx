import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import NetInfo, {useNetInfo} from '@react-native-community/netinfo';

const NetworkInfo = () => {
  const netInfo = useNetInfo();

  const unsubscribe = NetInfo.addEventListener(state => {
    console.log(state);
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
    console.log('Details', state.details);
  });

  useEffect(() => {
    unsubscribe();
  }, []);

  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <View style={styles.sectionContainer}>
            <Text>Network Info</Text>
            <Text>
              <Text style={styles.highlight}>Type: </Text> {netInfo.type}
            </Text>
            <Text>
              <Text style={styles.highlight}>Is Connected?: </Text>
              {netInfo.isConnected?.toString()}
            </Text>
            <Text>
              <Text style={styles.highlight}>Is Internet Reachable?: </Text>
              {netInfo.isInternetReachable?.toString()}
            </Text>
            <Text>
              <Text style={styles.highlight}>Is Wifi Enabled?: </Text>
              {netInfo.isWifiEnabled?.toString()}
            </Text>
            <Text>Details Wifi</Text>
            <Text>
              <Text style={styles.highlight}>isConnectionExpensive: </Text>
              {netInfo.details?.isConnectionExpensive?.toString()}
            </Text>
            <Text>
              <Text style={styles.highlight}>ssid: </Text>
              {netInfo.details?.ssid}
            </Text>
            <Text>
              <Text style={styles.highlight}>bssid: </Text>
              {netInfo.details?.bssid}
            </Text>
            <Text>
              <Text style={styles.highlight}>A strength: </Text>
              {netInfo.details?.strength}
            </Text>
            <Text>
              <Text style={styles.highlight}>ipAddress: </Text>
              {netInfo.details?.ipAddress}
            </Text>
            <Text>
              <Text style={styles.highlight}>subnet: </Text>
              {netInfo.details?.subnet}
            </Text>
            <Text>
              <Text style={styles.highlight}>A frequency: </Text>
              {netInfo.details?.frequency}
            </Text>
            <Text>
              <Text style={styles.highlight}>A linkSpeed: </Text>
              {netInfo.details?.linkSpeed}
            </Text>
            <Text>
              <Text style={styles.highlight}>A rxLinkSpeed: </Text>
              {netInfo.details?.rxLinkSpeed}
            </Text>
            <Text>
              <Text style={styles.highlight}>A txLinkSpeed: </Text>
              {netInfo.details?.txLinkSpeed}
            </Text>
            <Text>Details Cellular</Text>
            <Text>
              <Text style={styles.highlight}>isConnectionExpensive: </Text>
              {netInfo.details?.isConnectionExpensive?.toString()}
            </Text>
            <Text>
              <Text style={styles.highlight}>cellularGeneration: </Text>
              {netInfo.details?.cellularGeneration}
            </Text>
            <Text>
              <Text style={styles.highlight}>carrier: </Text>
              {netInfo.details?.carrier}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NetworkInfo;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  highlight: {
    fontWeight: '700',
  },
});
