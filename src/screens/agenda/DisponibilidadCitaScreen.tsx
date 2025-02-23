import React, { useEffect, useState } from 'react';
import { View, Text, Button, Platform, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import HorizontalCalendar from '../../components/HorizontalCalendar';
import DoctorCard from '../../components/Profesional/DoctorCard';
import { obtenerProfesionalesDisponibles } from '../../services/ProfesionalesServices';

export default function DisponibilidadCitaScreen() {
  const [date, setDate] = useState(new Date()); 
  const [profesionales, setProfesionales] = useState();
  const [shiftSelected, setShiftSelected] = useState();


  const obtenerMedicosDisponibles = async()=>{
      const data = await obtenerProfesionalesDisponibles();
      setProfesionales(data);
  }

  useEffect(() => {
    console.log('useEffect')
     obtenerMedicosDisponibles()
  }, [date])
  
  
  return (
    <View style={styles.container}> 
           <HorizontalCalendar setDate={setDate}></HorizontalCalendar>
           <Text>{date.toString()}</Text>   
           {
            shiftSelected&&(<Text>{shiftSelected!.horaInicio}</Text>)
           }
           <View style={{gap:10}}>
            <FlatList
              data={profesionales}
              renderItem={({item})=>(<DoctorCard 
                                            name={item.nombreMedico}
                                            shifts={item.turnos}
                                            setShiftSelected={setShiftSelected}
                                        ></DoctorCard>)}
            ></FlatList>
           </View>
           
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:10
  },

})