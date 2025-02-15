 import { StyleSheet, Text, TouchableOpacity, View } from 'react-native' 
import { OpcionCita } from '../../types'
import { useNavigation } from '@react-navigation/native' 

export type AccesoDirectoCardProps = {
  item: OpcionCita 
}

export default function AccesoDirectoCard({item}: AccesoDirectoCardProps) { 
  const navigation = useNavigation();
  const nuevaCita = ()=>{
      navigation.navigate("Modalidad");
  }
  return (
    <>
      <TouchableOpacity style={homeStyle.card} onPress={nuevaCita}>
          <Text style={{textAlign:'center'}}>{item.title}</Text>
      </TouchableOpacity> 
    </> 
  )
}


const homeStyle = StyleSheet.create({ 
  card: {
    width: 150,
    height:100,
    borderWidth:0.2,
    borderColor:'#888',
    borderRadius:10,
    backgroundColor:'white',
    shadowColor:'#888',
    elevation:5,
    shadowOpacity:0.3,
    shadowOffset: { width: 0, height: 2 },
    justifyContent:'center',
    alignItems:'center'
  }
})