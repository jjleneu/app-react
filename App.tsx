import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { RootStackParamList } from './src/types/navigation-prop';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen'; 
import { Image, StatusBar } from 'react-native';
import Index from './src/screens/Index';
import DrawerMenu from './src/components/Drawer/DrawerMenu';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='#fff'></StatusBar>
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen} options={{
              headerShown:false
            }}></Stack.Screen>
            <Stack.Screen name='SignUp' component={SignUpScreen} options={{
              headerShown:false
            }}></Stack.Screen>
            <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} options={{
              headerShown:false
            }}></Stack.Screen>
            <Stack.Screen name='Index' component={Index} options={{
              headerShown:false
            }}/> 
        </Stack.Navigator>
        
    </NavigationContainer>
  );
} 