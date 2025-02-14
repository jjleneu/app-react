import React from 'react'   
import {  TouchableOpacity, View } from 'react-native';
import DrawerMenu from './Drawer/DrawerMenu';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import CitasScreen from '../screens/agenda/CitasScreen';
import { colors } from '../global/color';

 

const Tab = createBottomTabNavigator();


export default function BottomTabs() { 
  return (
    <Tab.Navigator initialRouteName='Menu' screenOptions= {({ route }) =>({
      headerShown: false, 
      tabBarIcon:({ focused, color, size }) => {
          let iconName: "home"| "menufold"|"calendar" = "home"; 
        let colorIcon = ''
        if(route.name==='Menu'){
          iconName = 'home'
          colorIcon = focused?colors.primary.background:'gray'
        }else if (route.name === "Citas") {
          iconName = 'calendar'
          colorIcon = focused?colors.primary.background:'gray'
        }else if (route.name === "Tratamiento") {
          iconName = 'menufold'
          colorIcon = focused?colors.primary.background:'gray'
        }  
        return <AntDesign name={iconName} size={24} color={colorIcon} />;
      },
      tabBarActiveTintColor:colors.primary.background,
      tabBarInactiveTintColor: "gray",
    })}>
        <Tab.Screen  name='Menu' 
                     component={DrawerMenu}  
                     options={{title:'Inicio'}}
                     listeners={({ navigation }) => ({
                      tabPress: (e) => { 
                        /*const ruta = navigation.getState().routes[navigation.getState().index].name;
                        console.log(ruta)
                        if(ruta!=='Menu'){
                          navigation.reset({
                          index: 0,
                           routes: [{ name: 'Index' }]
                          })
                        } */
                      },
                    })}></Tab.Screen>
        <Tab.Screen  name='Citas' component={CitasScreen} options={{
          headerTitle:'Atrás',
          headerShown:true,
          headerShadowVisible:false,
          headerLeft: () => {
            const navigation = useNavigation(); // Hook para acceder a la navegación
            return (
              <View style={{paddingHorizontal: 10}}>
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}  // Ajusta el color del botón según necesites
                  >
                      <Ionicons name="arrow-back" size={24} color="black" />
                  </TouchableOpacity>
              </View>
              
            );
          } 
        }}></Tab.Screen>  
    </Tab.Navigator>
  )
}
