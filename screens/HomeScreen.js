import React from 'react';
import { View, Button } from 'react-native';
import LocationButton from '../components/LocationButton';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'flex-end', padding: 10 }}>
        <LocationButton />
      </View>
      <Button title="View Assigned Details" onPress={() => navigation.navigate('Assignments')} />
    </View>
  );
}
