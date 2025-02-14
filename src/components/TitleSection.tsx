import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/color'

type TitleSectionProps = {
    title:string
}

export default function TitleSection({title}: TitleSectionProps) {
  return (
    <View style={[styles.view, {borderLeftColor: colors.primary.background}]}>
       <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
     borderLeftWidth:5,
     marginLeft: 5
  },
  text: {
    fontSize: 18,
    fontWeight:'bold',
    padding: 5
  }
})
