import React from 'react'
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native' 
import AntDesign from '@expo/vector-icons/AntDesign';

type ShiftsModalProps = {
    modalVisible:boolean,
    closeModal: () => void, 
    shifts:any,
    setShiftSelected: React.Dispatch<React.SetStateAction<undefined>> 
}

export default function ShiftsModal(props: ShiftsModalProps) {

  const seleccionarTurno = (shift:any)=>{
        props.setShiftSelected(shift);
        props.closeModal()
  }

  return (
      <Modal visible={props.modalVisible}
               animationType="fade"
               transparent={true}
               onRequestClose={props.closeModal}
               style={modalStyle.modal}>
    
              <View style={modalStyle.container}>
                    <View style={modalStyle.modalContainer}>
                        <Text style={{fontWeight:'bold', fontSize:16, marginBottom:5}}>Selecciona un Turno</Text>
                        <FlatList
                            numColumns={2}
                            data={props.shifts}
                            renderItem={({item})=>(
                                <TouchableOpacity style={modalStyle.turnInfoContainer} onPress={()=>seleccionarTurno(item)}>
                                    <AntDesign name="clockcircleo" size={14} color="black" />
                                    <Text style={modalStyle.turnInfoText}>{item.horaInicio} - {item.horaFin}</Text>
                                </TouchableOpacity>
                            )}
                            ></FlatList>
                        <TouchableOpacity style={{marginTop: 10}} onPress={props.closeModal}>
                            <Text style={{color:'red'}}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
              </View>  
             
       </Modal>
  )
}

const modalStyle  = StyleSheet.create({
    modal: {
        flex:1,
        justifyContent:'center'
    },
    container: {  
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
        modalContainer: {
        width: 310,
        height: 500,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    searchContainer: {
        width:'100%'
    },
    inputSearch: { 
        borderWidth: 1
    },
    inputEspecialidad: {
        borderWidth:0.75,
        borderColor: '#888',
        borderRadius: 10,
        height: 50, 
        flexDirection:'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal:5
    },
    especialidadContainer: {
       paddingVertical: 5
    },
    icon: {
        width: 30,
        height:30
    },
    title: {
        color: '#013B83',
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 18,
        marginBottom: 10
    },
    textEspecialidad: {
         color: '#013B83',
    },
    turnInfoContainer: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:5,
        margin: 10, 
        borderRadius: 10,
        paddingHorizontal: 7, 
        paddingVertical: 10, 
        backgroundColor:'#F5F5F5'
        
    },
    turnInfoText: {
        fontWeight:'400'
    }
})