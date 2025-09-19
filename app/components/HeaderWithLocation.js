import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';

export default function HeaderWithLocation() {
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return Alert.alert('Permission denied', 'Allow location access in settings');
    }

    const location = await Location.getCurrentPositionAsync({});
    Alert.alert("Your Location", `Lat: ${location.coords.latitude}, Lon: ${location.coords.longitude}`);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Welcome</Text>
      <Button title="📍 Location" onPress={getLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#f2f2f2' },
  headerText: { fontSize: 18, fontWeight: 'bold' }
});
