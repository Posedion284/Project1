import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ValidForm from './src/Components/ValidForm/ValidForm';
import Login from './src/Components/Login/Login';
import Date1 from './src/Components/Login/Dapick';
import Signup from './src/Components/Signup/Signup';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <Login/> */}
    //   <Signup/>
    //   {/* <ValidForm/> */}
    //   {/* <Date1/> */}
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ValidForm" component={ValidForm} />
        {/* <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
