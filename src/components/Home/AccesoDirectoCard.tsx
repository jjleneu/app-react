 import { StyleSheet, Text, TouchableOpacity, View } from 'react-native' 

export default function AccesoDirectoCard({item}) { 
  return (
    <>
      <TouchableOpacity style={homeStyle.card}>
          <Text>{item.id}</Text>
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
  }
})