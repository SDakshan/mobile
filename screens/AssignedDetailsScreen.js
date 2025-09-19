import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function AssignedDetailsScreen() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      const snapshot = await getDocs(collection(db, 'assignments'));
      const data = snapshot.docs.map(doc => doc.data());
      setAssignments(data);
    };
    fetchAssignments();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold' }}>Assigned Employees:</Text>
      <FlatList
        data={assignments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 5, padding: 10, borderWidth: 1, borderRadius: 5 }}>
            <Text>Project ID: {item.projectId}</Text>
            <Text>Employee ID: {item.employeeId}</Text>
            <Text>Role: {item.role}</Text>
          </View>
        )}
      />
    </View>
  );
}
