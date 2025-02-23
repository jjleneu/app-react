import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'; 
import ShiftsModal from '../ShiftsModal';

type DoctorCardProps = {
    name: string,
    shifts: any,
    setShiftSelected: React.Dispatch<React.SetStateAction<undefined>>
}

export default function DoctorCard(props: DoctorCardProps) {

  const [modalVisible, setModalVisible] = useState(false);
  
  const closeModal = ()=>{
    setModalVisible(false)
  }

  const verTurnos = ()=>{
    setModalVisible(true)
  }



  return (
    <View style={styles.card}>
        <View style={styles.cardContainer}>
                <Image source={require('../../../assets/doctor.png')}></Image>
                <View style={styles.infoContainer}>
                    <View style={styles.nameContainer}>
                            <Text style={styles.nameText}>Dr. {props.name}</Text>   
                    </View>
                       
                      <Text style={styles.especialidadText}>Cardiologia</Text>   
                      <View style={styles.sucursalContainer}>
                            <Feather name="map-pin" size={14} color="black" />
                            <Text>Veris Alborada</Text>  
                      </View>
                       
                      <TouchableOpacity style={styles.turnosButtom} onPressOut={verTurnos}>
                        <Text style={styles.turnoText}>Seleccionar Horario</Text>
                      </TouchableOpacity>
                </View> 
        </View> 
        <ShiftsModal modalVisible={modalVisible} closeModal={closeModal} shifts={props.shifts} setShiftSelected={props.setShiftSelected}></ShiftsModal>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        borderWidth:0.1,
        width:'100%',
        height: 110,
        borderRadius: 10,
        backgroundColor:'#ffffff'
    },
    cardContainer: { 
        flexDirection:'row'
    },
    infoContainer: {
        flex:1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        gap:2
    },
    nameContainer: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    sucursalContainer: {
        flexDirection:'row',
        gap: 5,
        alignItems:'center'
    },
    sucursalText: {
        fontWeight:'700'
    },
    nameText: {
        fontWeight:'bold',
        fontSize: 16
    },
    especialidadText: {
        color:'#8295E9' 
    },
    turnosButtom: {
        backgroundColor:'#4651C5',
        borderRadius: 20,
        height: 25,
        justifyContent:'center',
        alignItems:'center'
    },
    turnoText: {
        color:'#fff'
    }
})