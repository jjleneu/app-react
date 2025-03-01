import React, { useEffect, useState } from 'react';
import { View, Text, Button, Platform, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import HorizontalCalendar from '../../components/HorizontalCalendar';
import DoctorCard from '../../components/Profesional/DoctorCard';
import { obtenerProfesionalesDisponibles } from '../../services/ProfesionalesServices';
import { DisponibilidadCitaScreenProps } from '../../types/navigation-prop';
import { agendarCita } from '../../services/AgendamientoServices';

export default function DisponibilidadCitaScreen({navigation,route}: DisponibilidadCitaScreenProps) {
  const [date, setDate] = useState(new Date()); 
  const [profesionales, setProfesionales] = useState();
  const [shiftSelected, setShiftSelected] = useState();

  const agendar = async () =>{
      const datosAgendamiento = {
          idTurnos:shiftSelected!.idsIntervalos.toString(),
          idCliente:0,
          usuario:'KSUR',
          modalidad:'N'
      }
      await agendarCita(datosAgendamiento);
  }


  const obtenerMedicosDisponibles = async()=>{
      const data = await obtenerProfesionalesDisponibles();
      setProfesionales(data);
  }

  useEffect(() => {
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
                                            sucursal={route.params.sucursal!}
                                            especialty={route.params.especialty!}
                                            shifts={item.turnos}
                                            setShiftSelected={setShiftSelected}
                                            agendar={agendar}
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