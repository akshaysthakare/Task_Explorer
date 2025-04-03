import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Task Explorer' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{ title: 'Task Details' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;