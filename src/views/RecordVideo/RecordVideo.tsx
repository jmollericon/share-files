import React, {useEffect, useState, useRef} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

import images from '../../constants/images';

const RecordVideo = () => {
  const [cameraStatus, setCameraStatus] = useState(true);
  const [newPhoto, setPhotoPath] = useState(images.defaultImage);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  const requestPermissions = async () => {
    console.log('requestPermissions');
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    console.log({newCameraPermission});
    console.log({newMicrophonePermission});
  };
  const validatePermissions = async () => {
    console.log('validatePermissions');
    const cameraPermission = await Camera.getCameraPermissionStatus();
    const microphonePermission = await Camera.getMicrophonePermissionStatus();
    console.log({cameraPermission});
    console.log({microphonePermission});

    //const devices = await Camera.getAvailableCameraDevices();
    //console.log({devices});
  };

  useEffect(() => {
    requestPermissions();
    validatePermissions();
  }, []);

  const camera = useRef<Camera>(null);

  if (device == null) {
    return (
      <View style={styles.sectionContainer}>
        <Text>Loading</Text>
      </View>
    );
  }

  const startStopRecording = async () => {
    if (cameraStatus) {
      camera.current?.startRecording({
        flash: 'off',
        onRecordingFinished: video => console.log(video),
        onRecordingError: error => console.error(error),
      });
      setCameraStatus(false);
    } else {
      await camera.current?.stopRecording();
      setCameraStatus(true);
    }
    console.log('startRecording');
    //setPhotoPath({uri: 'file://' + photo?.path});
  };


  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={camera}
          style={styles.camera}
          device={device}
          isActive={true}
          preset="medium"
          fps={240}
          video={true}
          audio={true}
        />
        <TouchableOpacity style={styles.button} onPress={startStopRecording}>
          <Text style={styles.center}>{cameraStatus ? 'Start' : 'Stop'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondConatiner}>
        <Image style={styles.tinyLogo} source={newPhoto} />
        <TouchableOpacity style={styles.buttonSend} onPress={() => {}}>
          <Text style={styles.center}>Send Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  cameraContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#aaaaaa',
    borderWidth: 4,
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    right: 10,
  },
  buttonSend: {
    position: 'absolute',
    borderRadius: 4,
    borderColor: '#aaaaaa',
    borderWidth: 4,
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
    margin: 10,
  },
  tinyLogo: {
    flex: 1,
  },
  center: {
    textAlign: 'center',
  },
  camera: {
    flex: 1,
  },
  secondConatiner: {
    flex: 0.5,
    backgroundColor: '#26be95',
  },
  photoContainer: {
    flex: 1,
    backgroundColor: '#260095',
  },
});

export default RecordVideo;
