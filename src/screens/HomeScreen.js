import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { fetchTasks } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorView from '../components/ErrorView';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'incomplete'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      setError('Failed to fetch tasks. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.taskItem}
      onPress={() => navigation.navigate('Details', { task: item })}
    >
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={item.completed ? styles.completed : styles.incomplete}>
        {item.completed ? '✓ Completed' : '✗ Incomplete'}
      </Text>
    </TouchableOpacity>
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorView message={error} onRetry={fetchData} />;

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Button 
          title="All" 
          onPress={() => setFilter('all')} 
          color={filter === 'all' ? '#007AFF' : '#CCCCCC'}
        />


        <Button 
          title="Completed" 
          onPress={() => setFilter('completed')} 
          color={filter === 'completed' ? '#007AFF' : '#CCCCCC'}
        />



        <Button 
          title="Incomplete" 
          onPress={() => setFilter('incomplete')} 
          color={filter === 'incomplete' ? '#007AFF' : '#CCCCCC'}
        />
      </View>
      
      <FlatList
        data={filteredTasks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  taskItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#007AFF',
  },
  taskTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  completed: {
    color: 'green',
  },
  incomplete: {
    color: 'red',
  },
});

export default HomeScreen;