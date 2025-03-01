import React, { useEffect, useMemo, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BuscarEspecialidadesModal from '../../components/Especialidades/Modal/BuscarEspecialidadesModal';
import { Especialidad } from '../../types/especialidad';
import { Sucursal } from '../../types/sucursal';
import BuscarSucursalXEspecialidadModal from '../../components/Especialidades/Modal/BuscarSucursalXEspecialidadModal';  
import Toast from 'react-native-toast-message'; 
import { ModalidadCitaScreenProps } from '../../types/navigation-prop';

export default function ModalidadCitaScreen({navigation}:ModalidadCitaScreenProps) {
  
  const [selectedButton, setSelectedButton] = useState<string|undefined>(undefined); 
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSucursal, setModalSucursal] = useState(false); 
  const [especialty, setEspecialty] = useState<Especialidad>()
  const [sucursal, setSucursal] = useState<Sucursal>();

  const isSelectedPresencial = useMemo(() => selectedButton==='p', [selectedButton])
  
  const isSelectedVirtual= useMemo(() => selectedButton==='v', [selectedButton])

  const handleSelectButton = (buttonId:string) => { 
    setSelectedButton(buttonId);
  };

  const cerrarModalEspecialidad = ()=>{
    setModalVisible(false)
  }

  const cerrarModalSucursal = ()=>setModalSucursal(false)


    const continuar = ()=>{
      if(!selectedButton){
        errorMessage('Elija modalidad Presencial o Virtual.');
        return;
      }

      if(!especialty){
         errorMessage('Elija una especialidad para continuar');
         return;
      }

      if(!sucursal){
         errorMessage('Elija un centro médico para continuar');
         return;
      }   
      navigation.navigate('DisponibilidadCita', {
        especialty,
        sucursal
      })
    } 
    const errorMessage = (error:string)=>{
        Toast.show({
                    type: 'error', 
                    text2: error, 
                    text2Style: {
                      color: '#AC2B19',   
                      fontSize: 14,
                    },
                    topOffset: 10
              })
    }

    const verEspecialidades = ()=>{
        if(!selectedButton){
          errorMessage('Elija modalidad Presencial o Virtual.');
          return;
        }
        setModalVisible(true);
    }

    const verSucursales = ()=>{
        if(!especialty){
          errorMessage('Elija una especialidad para continuar');
          return;
        }
        setModalSucursal(true);
    }


  return (
    <View style={styles.container}>
      <View style={styles.datosCitaContainer}>
        <Text style={styles.textDatosCita}>Datos para la cita</Text>
      </View>
      
      <View style={styles.modalidadContainer}>
          <Text style={styles.textModalidad}>Elige la modalidad de la cita médica</Text>
          <View style={styles.buttomContainer}>
            <TouchableOpacity style={[styles.buttom, isSelectedPresencial&&styles.buttomSelected]} 
                              onPressIn={()=>handleSelectButton('p')}>
                <Text style={[styles.textButton,isSelectedPresencial&&styles.textButtonSelected]}>
                    Presencial
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttom,
                                     isSelectedVirtual&&styles.buttomSelected]
                                    } 
                              onPressIn={()=>handleSelectButton('v')}>
               <Text style={[styles.textButton,isSelectedVirtual&&styles.textButtonSelected]}>
                    Virtual
                </Text>
            </TouchableOpacity>
          </View>
      </View>
      <ScrollView style={{paddingHorizontal: 10}}>
            <Text style={styleForm.tilteText}>Elige los datos de la cita médica</Text>    
            <View style={styleForm.inputContainer}>
                 <Text style={styleForm.label}>Especialidad*: </Text> 
                 <TouchableOpacity style={[styleForm.input,especialty&&especialty.nombre?{borderColor:'#0071CF'}:{borderColor:'#888'}]} 
                                    onPressIn={verEspecialidades}>
                       <Text
                          style={especialty&&especialty.nombre?{color:'#0071CF'}:{color:'#888'}}
                       >{ especialty&&especialty.nombre?especialty.nombre:'Elegir una especialidad'}</Text>     
                       <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />         
                  </TouchableOpacity>                   
            </View>  

            <View style={styleForm.inputContainer}>
                 <Text style={styleForm.label}>Central médica*: </Text> 
                 <TouchableOpacity style={[styleForm.input,sucursal&&sucursal.nombre?{borderColor:'#0071CF'}:{borderColor:'#888'}]} 
                                    onPressIn={verSucursales}>
                       <Text
                          style={sucursal&&sucursal.nombre?{color:'#0071CF'}:{color:'#888'}}
                       >{sucursal?sucursal?.nombre:'Elegir un centro médico'}</Text>     
                       <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />         
                  </TouchableOpacity>                   
            </View>  

             <View style={styleForm.inputContainer}>
                  <TouchableOpacity style={styleForm.continuarButtom} onPress={continuar}>
                       <Text style={styleForm.continuarLabel}>CONTINUAR</Text>          
                  </TouchableOpacity>               
             </View>
   
      </ScrollView>  
    <Toast/> 
    <BuscarEspecialidadesModal modalVisible={modalVisible} 
                                 closeModal={cerrarModalEspecialidad}
                                 setEspecialty={setEspecialty}></BuscarEspecialidadesModal>    
    {especialty&&
        ( <BuscarSucursalXEspecialidadModal modalVisible={modalSucursal} 
                                            closeModal={cerrarModalSucursal}
                                            idSpecialty={especialty.idEspecialidad}
                                            setSucursal={setSucursal}></BuscarSucursalXEspecialidadModal>)
      }                    
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
    alignItems:'center',
    borderRadius:10,
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
);

const styleForm = StyleSheet.create({
   inputContainer: {
      flex:1,
      marginVertical: 15
   },

   input: {
      height: 50,
      borderWidth:1,
      backgroundColor:'#ffffff',
      justifyContent:'space-between',
      alignItems:'center',
      borderRadius: 5,
      paddingHorizontal: 5,
      flexDirection:'row', 
   },
   label: {
    color:'#858993',
    fontWeight:'bold'
   },
   continuarButtom: {
      height: 50,
      borderWidth:0.1,
      backgroundColor:'#0071CF',
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 5,
      marginTop: 20
   },
   continuarLabel: {
      color:'#ffffff',
      fontSize: 16
   },
   tilteText: {
    color: '#1A1A2E',
    fontSize: 18,
    fontWeight:'bold',
    marginTop: 20,
    marginBottom: 10
   }
}); 