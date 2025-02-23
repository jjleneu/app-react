import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { RootStackParamList } from './src/types/navigation-prop';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen'; 
import { StatusBar } from 'react-native';
import Index from './src/screens/Index';
import ModalidadCitaScreen from './src/screens/agenda/ModalidadCitaScreen';
import DisponibilidadCitaScreen from './src/screens/agenda/DisponibilidadCitaScreen';

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
             <Stack.Screen name='Modalidad' component={ModalidadCitaScreen} options={{
               headerTitle:'Atrás',
               headerShadowVisible:false,
               headerStyle: {
                backgroundColor:'#F3F4F6'
               }
             }}/> 
              <Stack.Screen name='DisponibilidadCita' component={DisponibilidadCitaScreen} options={{
               headerTitle:'Atrás',
               headerShadowVisible:false,
               headerStyle: {
                backgroundColor:'#F3F4F6'
               }
             }}/> 
        </Stack.Navigator>
        
    </NavigationContainer>
  );
} 