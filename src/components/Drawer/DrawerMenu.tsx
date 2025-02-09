import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import SettingScreen from '../../screens/Drawer/SettingScreen';
import PromotionScreen from '../../screens/Drawer/PromotionScreen'; 
import { Image } from 'react-native';
import BottomTabs from '../BottomTabs';
import HomeScreen from '../../screens/Home/HomeScreen';

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
       <Drawer.Screen component={HomeScreen} name='Home'></Drawer.Screen>
       <Drawer.Screen component={PromotionScreen} name='Promociones'></Drawer.Screen>
       <Drawer.Screen component={SettingScreen} name='Configuración'></Drawer.Screen>
    </Drawer.Navigator>
  )
}
