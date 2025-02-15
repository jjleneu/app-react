import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import AccesoDirectoCard from '../../components/Home/AccesoDirectoCard';
import { colors } from '../../global/color';
import TitleSection from '../../components/TitleSection';
import { citasAccesoDirecto } from '../../db';


export default function HomeScreen( ) {

   

  return (
    <View style={homeStyle.container}>
       <View style={homeStyle.tratamientoContainer}>
        <View style={{backgroundColor:'#fff'}}>
          <Text style={homeStyle.nombreText}>Buenas Noches,{'\n'}Juan</Text>
        </View>
        <View style={{marginVertical: 10}}>
          <TitleSection title="Mis Tratamientos"></TitleSection>
        </View>
          
          <View style={homeStyle.imageContainer}>
              <Image source={
                require('../../../assets/icon-home.png')
              }
              style={homeStyle.image}
              ></Image>
              <Text style={homeStyle.labelImage}>Agenda una cita y revisa tus{'\n'} <Text style={{ color: colors.primary.background }}>tratamientos</Text> aquí</Text>
          </View>
       </View>
       
        
        <View style={homeStyle.accesoRapidoContainer}>
          <View style={{marginVertical: 10}}>
              <TitleSection title="Acceso rápido"></TitleSection>
          </View>
          
          <View>
              <FlatList
                data={citasAccesoDirecto}
                keyExtractor={item=>item.id}
                renderItem={({item})=>(<View style={{padding:5}}>
                                          <AccesoDirectoCard item={item}/>
                                        </View>)}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
              ></FlatList>

          </View>
            
       </View>
    </View>
  )
}

const homeStyle = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    paddingHorizontal:5,
    backgroundColor:'#ffffff'
  },
  tratamientoContainer: {
    flex:7,
    flexDirection:'column',
    backgroundColor:'#EFF2F7'
  },
  accesoRapidoContainer: {
    flex:3,
    marginBottom:20
  },
  imageContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  image: {
    width:200,
    height: 200,
    margin:10
  },
  labelImage: {
    fontSize: 14,
    color: '#00008B',
    textAlign:'center'
  },
  
  accesoRapidoView: {
     borderLeftWidth:5,
     marginVertical: 20
  },
  accesoRapidoLabel:{
    fontSize: 20,
    fontWeight:'bold',
    padding: 5
  },
  nombreText: {
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold'
  },
  card: {
    width: '100%',
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