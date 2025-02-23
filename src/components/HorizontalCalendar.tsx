import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';  

type FechaDisponiblidad = {
  diaSemana:string,
  diaDelMes: number,
  mes:string,
  fechaSeleccionada:Date
}

type HorizontalCalendar = {
  setDate: React.Dispatch<React.SetStateAction<Date>>
}
const HorizontalCalendar = (props: HorizontalCalendar) => {
  
  function obtenerDiasCalendario(fecha: Date|undefined): string[] {
  const fechas: string[] = [];
  const fechaActual = fecha?fecha:new Date(); 

  for (let i = 0; i <= 10; i++) {
    const nuevaFecha = new Date(fechaActual);
    nuevaFecha.setDate(fechaActual.getDate() + i);
    fechas.push(nuevaFecha.toISOString().split("T")[0]);
  } 
  return fechas;
}

function formatearFecha(fechaString: string): FechaDisponiblidad {
    const fecha = new Date(fechaString); // Convertir el string a un objeto Date
    const diasSemana: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const diaDelMes: number = fecha.getDate();
    const diaSemana: string = diasSemana[fecha.getDay()];
    const mes: string = meses[fecha.getMonth()]; // Obtener el mes

    const fechaDisponibilidad: FechaDisponiblidad = {
      diaSemana,
      diaDelMes,
      mes,
      fechaSeleccionada:fecha
    }
    
    return fechaDisponibilidad;
}

const getMonth = (sDate:string)=>{
      const fecha = new Date(sDate);
      const meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      return meses[fecha.getMonth()];
}

  const [weeks, setWeeks] = useState<string[]>([]);
   const [currentIndex, setCurrentIndex] = useState(0);

  const getMonthMemo = useMemo(() =>  getMonth(weeks[currentIndex+1]), [currentIndex]);
;
  useEffect(() => {
     setWeeks(obtenerDiasCalendario(undefined)); 
  }, [])
  
 

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const { index } = viewableItems[0]; // Obtener el primer elemento visible
      setCurrentIndex(index); 
    } 
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50, // Esto asegura que se detecte si más del 50% de un item es visible
  };

  const handleEndReached = ()=>{
      const nowDate = new Date(weeks[weeks.length-1]);
      nowDate.setDate(nowDate.getDate()+1)
      setWeeks(prevWeeks=>[...prevWeeks,...obtenerDiasCalendario(nowDate)])
  }

  return (
    <View>
          <Text style={{textAlign:'center',fontSize:18, fontWeight: 'bold'}}>{getMonthMemo}</Text>
          <FlatList
              onEndReached={handleEndReached}
              data={weeks}
              renderItem={({item})=> (<TouchableOpacity style={[styles.card,{margin: 5, padding: 5}]}
                                                        onPress={()=>props.setDate(formatearFecha(item).fechaSeleccionada)} 
                                                        delayPressIn={100}>
                                          <Text>
                                            {formatearFecha(item).diaSemana}
                                          </Text>
                                          <Text>
                                            {formatearFecha(item).diaDelMes}
                                          </Text>
                                      </TouchableOpacity>)}
              horizontal    
              showsHorizontalScrollIndicator={false}                    
              keyExtractor={(item, index) => index.toString()}
              onViewableItemsChanged={onViewableItemsChanged}
              viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};


const styles = StyleSheet.create({
   card: {  
    flex: 1,
    backgroundColor: 'white', 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Para Android, agrega sombra
    shadowColor: '#000', // Para iOS, agrega sombra
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: 50,
    width: 100
  }
})

export default HorizontalCalendar;
