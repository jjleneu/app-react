import React from 'react'
import { Image, View } from 'react-native'

type IconOptionCardProps = {
title:string
}

export default function IconOptionCard({title}: IconOptionCardProps) { 

  return (
    <View>
        
       {
        // Verifica que option.icon sea válido antes de usarlo
       title === "Consulta Médica" && (
          <Image source={require("../../assets/consulta-medica.png")}  />
        ) 
      }
      {
         title === "Laboratorio"&&(
            <Image source={require("../../assets/laboratorio.png")}  />
         )
      }
      {
         title === "Terapía Física"&&(
            <Image source={require("../../assets/terapia-fisica.png")}  />
         )
      }
      {
         title === "Recetas médicas"&&(
            <Image source={require("../../assets/receta-medica.png")}  />
         )
      }
      {
         title === "Orden externa"&&(
            <Image source={require("../../assets/orden.png")}  />
         )
      }
      {
         title === "Imágenes y Procedimiento"&&(
            <Image source={require("../../assets/proc.png")}  />
         )
      } 
      {
         title === "Próximas citas"&&(
            <Image source={require("../../assets/proxima-citas.png")}  />
         )
      } 
      {
         title === "Historial de citas"&&(
            <Image source={require("../../assets/historial.png")}  />
         )
      } 
    </View>
  )
}