import React, { useState } from 'react';
import { Button, Alert } from 'react-native';
import * as Location from 'expo-location';

export default function LocationButton() {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'We need location access');
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    setLocation(loc.coords);
    Alert.alert('Current Location', `Lat: ${loc.coords.latitude}, Lon: ${loc.coords.longitude}`);
  };

  return (
    <Button title="📍 My Location" onPress={getLocation} />
  );
}
