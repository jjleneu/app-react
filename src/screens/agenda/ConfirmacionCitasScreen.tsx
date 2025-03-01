import React from 'react'
import { Text, View } from 'react-native'
import { ConfirmacionCitaScreenProps } from '../../types/navigation-prop'

export default function ConfirmacionCitasScreen({route}:ConfirmacionCitaScreenProps) {
  console.log({'route':route.params})
  return (
    <View>
        <Text>
            pruebas
        </Text>
    </View>
  )
}
