import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
 

export default function ModalidadCitaScreen() {

  const [selectedButton, setSelectedButton] = useState<string|undefined>(undefined);

  const handleSelectButton = (buttonId:string) => {
    setSelectedButton(buttonId);
  };



  return (
    <View style={styles.container}>
      <View style={styles.datosCitaContainer}>
        <Text style={styles.textDatosCita}>Datos para la cita</Text>
      </View>
      
      <View style={styles.modalidadContainer}>
          <Text style={styles.textModalidad}>Elige la modalidad de la cita médica</Text>
          <View style={styles.buttomContainer}>
            <TouchableOpacity style={[styles.buttom,
                                     selectedButton==='p'&&styles.buttomSelected]
                                    } 
                              onPress={()=>handleSelectButton('p')}>
                <Text style={[styles.textButton, selectedButton==='p'&&styles.textButtonSelected]}>
                    Presencial
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttom,
                                     selectedButton==='v'&&styles.buttomSelected]
                                    } 
                              onPress={()=>handleSelectButton('v')}>
               <Text style={[styles.textButton, selectedButton==='v'&&styles.textButtonSelected]}>
                    Virtual
                </Text>
            </TouchableOpacity>
          </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start' 

  },
  datosCitaContainer: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  textDatosCita: {
    color: '#013B83',
    fontSize: 20,
    fontWeight: '600'
  },
  modalidadContainer: {
    backgroundColor:'#013B83',
    padding: 10
  },
  textModalidad: {
    color:'#ffffff',
    fontSize:16,
    paddingVertical: 5
  },
  buttomContainer:{
    flexDirection:'row',
    gap: 5
  },
  
  buttom: {
    flex:1,
    backgroundColor:'#FFFFFF',
    height: 50,
    justifyContent:'center',
    alignItems:'center'
  },
  buttomSelected: {
    backgroundColor: '#0071CF',
    borderWidth:1,
    borderColor: '#ffffff'
  },
  textButton: {
    fontWeight:'bold',
    fontSize: 16
  },
  textButtonSelected: {
    color:'#ffffff'
  }
}
)
