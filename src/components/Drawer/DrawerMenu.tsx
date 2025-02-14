import React from 'react'
import { Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from '@expo/vector-icons/Ionicons';
import SettingScreen from '../../screens/Drawer/SettingScreen';
import PromotionScreen from '../../screens/Drawer/PromotionScreen'; 
import HomeScreen from '../../screens/Home/HomeScreen';
import { colors } from '../../global/color';

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  return (
    <Drawer.Navigator screenOptions={{ 
                     headerShadowVisible:false,
                     headerTitleAlign: 'center',
                     headerTitle:()=>(
                         <Image
                             source={require('../../../assets/favicon.png')} // Cambia esta ruta por la de tu logo
                             style={{ width: 120, height: 40 }} // Ajusta el tamaño del logo
                             resizeMode="contain"
                           />
                     )
                   }}>            
       <Drawer.Screen component={HomeScreen} name='Home' options={{
        drawerIcon: ({focused, size})=>(
          <Ionicons name="home-outline" size={size} color={focused?"#007ACC":"#888"} />
        ),
       }}></Drawer.Screen>
       <Drawer.Screen component={PromotionScreen} name='Promociones' options={{
        drawerIcon: ({focused, size})=>(
          <Ionicons name="apps-outline" size={size} color={focused?"#007ACC":"#888"}/>
        ),
       }}></Drawer.Screen>
       <Drawer.Screen component={SettingScreen} name='Configuración' options={{
        drawerIcon: ({focused, size})=>(
          <Ionicons name="settings-outline" size={size} color={focused?"#007ACC":"#888"}/>
        ),
       }}></Drawer.Screen>
    </Drawer.Navigator>
  )
}
