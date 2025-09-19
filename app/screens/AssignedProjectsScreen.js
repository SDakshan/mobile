import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db, auth } from '../firebase';
import HeaderWithLocation from '../components/HeaderWithLocation';

export default function AssignedProjectsScreen() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const q = query(collection(db, 'assignments'), where('employeeId', '==', user.email));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => doc.data());
      setAssignments(data);
    };

    fetchAssignments();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderWithLocation />
      <Text style={styles.title}>Your Assigned Projects</Text>
      <FlatList
        data={assignments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Project ID: {item.projectId}</Text>
            <Text>Role: {item.role}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { backgroundColor: '#eee', padding: 10, marginBottom: 10, borderRadius: 5 },
});
