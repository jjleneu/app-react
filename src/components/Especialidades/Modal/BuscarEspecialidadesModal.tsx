import React, { Dispatch, useEffect, useState } from 'react'
import { FlatList, Image, Modal, StyleSheet,  Text,  TextInput,  TouchableOpacity,  View } from 'react-native' 
import { obtenerEspecialidades } from '../../../services/EspecialidadesServices';
import { Especialidad } from '../../../types/especialidad';
import SearchInput from '../../SearchInput'; 

type BuscarEspecialidadesModalProps = {
    modalVisible: boolean,
    closeModal: () => void,
    setEspecialty:    React.Dispatch<React.SetStateAction<Especialidad | undefined>>
}
export default function BuscarEspecialidadesModal({ modalVisible, closeModal, setEspecialty }: BuscarEspecialidadesModalProps) {
  
    const [especialidades, setEspecialidades] = useState<Especialidad[]>();

    const seletedEspecialty = (specialty: Especialidad)=>{
        setEspecialty(specialty);
        closeModal();
    }

    useEffect(() => {
        const cargar = async ()=>{
            const data = await obtenerEspecialidades("N");
            setEspecialidades(data.especialidades);
        }
       cargar();
    },[]);


    
    
    
         
  return (
    <Modal visible={modalVisible}
           animationType="fade"
           transparent={true}
           onRequestClose={closeModal}
           style={modalStyle.modal}>

            <View style={modalStyle.container}>
                <View style={modalStyle.modalContainer}>
                    <View style={modalStyle.searchContainer}>
                        <Text style={modalStyle.title}>Elige especialidad</Text>
                       <SearchInput></SearchInput>
                    </View>
                    <FlatList
                       style={{width:'100%', height: 350, marginTop: 20}}
                        data={especialidades}
                        renderItem={({item})=> (
                          <View style={modalStyle.especialidadContainer}>
                            <TouchableOpacity style={modalStyle.inputEspecialidad} onPress={()=> seletedEspecialty(item)}>
                                <Image source={
                                    require("../../../../assets/icon.png")
                                }
                                style={modalStyle.icon}
                                resizeMode='contain'
                                ></Image>
                                <Text style={modalStyle.textEspecialidad}>{item.nombre}</Text>
                            </TouchableOpacity>
                          </View>
                            
                        )}
                        keyExtractor={item=>item.idEspecialidad.toString()}
                    > 
                    </FlatList>
                    <View style={{height: 40, justifyContent:'center'}}>
                         <TouchableOpacity onPress={closeModal}>
                                            <Text style={{color:'#0071CF', fontWeight:'bold', fontSize: 16}}>Cancelar</Text>
                         </TouchableOpacity>   
                    </View>
                    
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
    }

})