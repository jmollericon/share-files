/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import DeviceInfoModule from 'react-native-device-info';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [buildId, setBuildId] = useState('');
  const [batteryLevel, setBatteryLevel] = useState('');
  const [availableLocationProviders, setAvailableLocationProviders] =
    useState('');
  const [carrier, setCarrier] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [fontScale, setFontScale] = useState('');
  const [freeDiskStorage, setFreeDiskStorage] = useState('');
  const [freeDiskStorageOld, setFreeDiskStorageOld] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [installerPackageName, setInstallerPackageName] = useState('');
  const [macAddress, setMacAddress] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [powerState, setPowerState] = useState('');
  const [totalDiskCapacity, setTotalDiskCapacity] = useState('');
  const [totalDiskCapacityOld, setTotalDiskCapacityOld] = useState('');
  const [totalMemory, setTotalMemory] = useState('');
  const [usedMemory, setUsedMemory] = useState('');
  const [userAgent, setUserAgent] = useState('');
  const [isBatteryCharging, setIsBatteryCharging] = useState('');
  const [isEmulator, setIsEmulator] = useState('');
  const [isLandscape, setIsLandscape] = useState('');
  const [isLocationEnabled, setIsLocationEnabled] = useState('');
  const [isHeadphonesConnected, setIsHeadphonesConnected] = useState('');
  const [isPinOrFingerprintSet, setIsPinOrFingerprintSet] = useState('');
  const [supportedAbis, setSupportedAbis] = useState('');

  const appName = DeviceInfoModule.getApplicationName();
  const brand = DeviceInfoModule.getBrand();
  const buildNumber = DeviceInfoModule.getBuildNumber();
  const bundleId = DeviceInfoModule.getBundleId();
  const deviceId = DeviceInfoModule.getDeviceId();
  const deviceType = DeviceInfoModule.getDeviceType();
  const model = DeviceInfoModule.getModel();
  const readableVersion = DeviceInfoModule.getReadableVersion();
  const systemName = DeviceInfoModule.getSystemName();
  const systemVersion = DeviceInfoModule.getSystemVersion();
  const uniqueId = DeviceInfoModule.getUniqueId();
  const version = DeviceInfoModule.getVersion();
  const hasNotch = JSON.stringify(DeviceInfoModule.hasNotch());
  const isTablet = JSON.stringify(DeviceInfoModule.isTablet());

  DeviceInfoModule.getAvailableLocationProviders().then(data => {
    setAvailableLocationProviders(JSON.stringify(data));
  });
  DeviceInfoModule.getBuildId().then(data => {
    setBuildId(data.toString());
  });
  DeviceInfoModule.getBatteryLevel().then(data => {
    setBatteryLevel(data.toString());
  });
  DeviceInfoModule.getCarrier().then(data => {
    setCarrier(data);
  });
  DeviceInfoModule.getDeviceName().then(data => {
    setDeviceName(data);
  });
  DeviceInfoModule.getFontScale().then(data => {
    setFontScale(data.toString());
  });
  DeviceInfoModule.getFreeDiskStorage().then(data => {
    setFreeDiskStorage(data.toString());
  });
  DeviceInfoModule.getFreeDiskStorageOld().then(data => {
    setFreeDiskStorageOld(data.toString());
  });
  DeviceInfoModule.getIpAddress().then(data => {
    setIpAddress(data.toString());
  });
  DeviceInfoModule.getInstallerPackageName().then(data => {
    setInstallerPackageName(data.toString());
  });
  DeviceInfoModule.getMacAddress().then(data => {
    setMacAddress(data.toString());
  });
  DeviceInfoModule.getManufacturer().then(data => {
    setManufacturer(data.toString());
  });
  DeviceInfoModule.getPowerState().then(data => {
    setPowerState(JSON.stringify(data));
  });
  DeviceInfoModule.getTotalDiskCapacity().then(data => {
    setTotalDiskCapacity(JSON.stringify(data));
  });
  DeviceInfoModule.getTotalDiskCapacityOld().then(data => {
    setTotalDiskCapacityOld(JSON.stringify(data));
  });
  DeviceInfoModule.getTotalMemory().then(data => {
    setTotalMemory(JSON.stringify(data));
  });
  DeviceInfoModule.getUsedMemory().then(data => {
    setUsedMemory(JSON.stringify(data));
  });
  DeviceInfoModule.getUserAgent().then(data => {
    setUserAgent(JSON.stringify(data));
  });
  DeviceInfoModule.isBatteryCharging().then(data => {
    setIsBatteryCharging(JSON.stringify(data));
  });
  DeviceInfoModule.isEmulator().then(data => {
    setIsEmulator(JSON.stringify(data));
  });
  DeviceInfoModule.isLandscape().then(data => {
    setIsLandscape(JSON.stringify(data));
  });
  DeviceInfoModule.isLocationEnabled().then(data => {
    setIsLocationEnabled(JSON.stringify(data));
  });
  DeviceInfoModule.isHeadphonesConnected().then(data => {
    setIsHeadphonesConnected(JSON.stringify(data));
  });
  DeviceInfoModule.isPinOrFingerprintSet().then(data => {
    setIsPinOrFingerprintSet(JSON.stringify(data));
  });
  DeviceInfoModule.supportedAbis().then(data => {
    setSupportedAbis(data.toString());
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Device Info">Device Information</Section>
          <View style={styles.sectionContainer}>
            <Text>
              <Text style={styles.highlight}>Application name: </Text> {appName}
            </Text>
            <Text>
              <Text style={styles.highlight}>
                Available Location Providers:
              </Text>
              {availableLocationProviders}
            </Text>
            <Text>
              <Text style={styles.highlight}>Build Id: </Text> {buildId}
            </Text>
            <Text>
              <Text style={styles.highlight}>Battery Level: </Text>
              {batteryLevel}
            </Text>
            <Text>
              <Text style={styles.highlight}>Brand: </Text> {brand}
            </Text>
            <Text>
              <Text style={styles.highlight}>Build Number: </Text> {buildNumber}
            </Text>
            <Text>
              <Text style={styles.highlight}>Bundle Id: </Text> {bundleId}
            </Text>
            <Text>
              <Text style={styles.highlight}>Carrier: </Text> {carrier}
            </Text>
            <Text>
              <Text style={styles.highlight}>Device Id: </Text> {deviceId}
            </Text>
            <Text>
              <Text style={styles.highlight}>Device Type: </Text> {deviceType}
            </Text>
            <Text>
              <Text style={styles.highlight}>Device Name: </Text> {deviceName}
            </Text>
            <Text>
              <Text style={styles.highlight}>Font Scale: </Text> {fontScale}
            </Text>
            <Text>
              <Text style={styles.highlight}>Free Disk Storage: </Text>
              {freeDiskStorage}
            </Text>
            <Text>
              <Text style={styles.highlight}>Free Disk Storage Old: </Text>
              {freeDiskStorageOld}
            </Text>
            <Text>
              <Text style={styles.highlight}>Ip Address: </Text> {ipAddress}
            </Text>
            <Text>
              <Text style={styles.highlight}>Installer Package Name: </Text>
              {installerPackageName}
            </Text>
            <Text>
              <Text style={styles.highlight}>Mac Address: </Text> {macAddress}
            </Text>
            <Text>
              <Text style={styles.highlight}>Manufacturer: </Text>
              {manufacturer}
            </Text>
            <Text>
              <Text style={styles.highlight}>Model: </Text> {model}
            </Text>
            <Text>
              <Text style={styles.highlight}>Power State: </Text> {powerState}
            </Text>
            <Text>
              <Text style={styles.highlight}>Readable Version: </Text>
              {readableVersion}
            </Text>
            <Text>
              <Text style={styles.highlight}>System Name: </Text> {systemName}
            </Text>
            <Text>
              <Text style={styles.highlight}>System Version: </Text>
              {systemVersion}
            </Text>
            <Text>
              <Text style={styles.highlight}>Total Disk Capacity: </Text>
              {totalDiskCapacity}
            </Text>
            <Text>
              <Text style={styles.highlight}>Total Disk Capacity Old: </Text>
              {totalDiskCapacityOld}
            </Text>
            <Text>
              <Text style={styles.highlight}>Total Memory: </Text> {totalMemory}
            </Text>
            <Text>
              <Text style={styles.highlight}>Unique Id: </Text> {uniqueId}
            </Text>
            <Text>
              <Text style={styles.highlight}>Used Memory: </Text> {usedMemory}
            </Text>
            <Text>
              <Text style={styles.highlight}>User Agent: </Text> {userAgent}
            </Text>
            <Text>
              <Text style={styles.highlight}>Version: </Text> {version}
            </Text>
            <Text>
              <Text style={styles.highlight}>Has Notch: </Text> {hasNotch}
            </Text>
            <Text>
              <Text style={styles.highlight}>Is Battery Charging: </Text>
              {isBatteryCharging}
            </Text>
            <Text>
              <Text style={styles.highlight}>Is Emulator: </Text> {isEmulator}
            </Text>
            <Text>
              <Text style={styles.highlight}>Is Landscape: </Text> {isLandscape}
            </Text>
            <Text>
              <Text style={styles.highlight}>Is Location Enabled: </Text>
              {isLocationEnabled}
            </Text>
            <Text>
              <Text style={styles.highlight}>Is Headphones Connected: </Text>
              {isHeadphonesConnected}
            </Text>
            <Text>
              <Text style={styles.highlight}>Is Pin Or Fingerprint Set: </Text>
              {isPinOrFingerprintSet}
            </Text>
            <Text>
              <Text style={styles.highlight}>Is Tablet: </Text> {isTablet}
            </Text>
            <Text>
              <Text style={styles.highlight}>Supported Abis: </Text>
              {supportedAbis}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
