import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native' 
import { OpcionCita } from '../types'; 
import IconOptionCard from './IconOptionCard';

const padding = 16;

type OptionCardProps = {
    option: OpcionCita
}
export default function OptionCard({option}: OptionCardProps) {
 
  const { width } = Dimensions.get('window');

  return (
    <View style={[styles.card,{width: (width/2)-padding }]}>
        
       <IconOptionCard title={option.title}></IconOptionCard>
        <Text>
           {option.title}
        </Text> 
    </View>
  )
}


const styles = StyleSheet.create({
    card: {  
    flex: 1,
    backgroundColor: 'white', 
    borderRadius: 8,
    padding: padding,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Para Android, agrega sombra
    shadowColor: '#000', // Para iOS, agrega sombra
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: 150,
  },
   svg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})