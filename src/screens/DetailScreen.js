import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { task: initialTask } = route.params;
  const [task, setTask] = useState(initialTask);

  const toggleCompletion = () => {
    setTask(prev => ({
      ...prev,
      completed: !prev.completed,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailCard}>
        <Text style={styles.label}>Title:</Text>
        <Text style={styles.value}>{task.title}</Text>
        
        <Text style={styles.label}>User ID:</Text>
        <Text style={styles.value}>{task.userId}</Text>
        

        <Text style={styles.label}>Status:</Text>
        <Text style={task.completed ? styles.completed : styles.incomplete}>
          {task.completed ? 'Completed' : 'Incomplete'}
        </Text>
        

        
        <Button 
          title={task.completed ? 'Mark Incomplete' : 'Mark Complete'} 
          onPress={toggleCompletion}
          color={task.completed ? '#FF3B30' : '#34C759'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  detailCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    color: '#666',
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  completed: {
    color: 'green',
    fontSize: 16,
    marginBottom: 20,
  },
  incomplete: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
  },
});

export default DetailScreen;