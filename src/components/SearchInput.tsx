import React from 'react'
import {  TextInput, View } from 'react-native'
import styles from '../Styles/Auth'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SearchInput() {
  return (
    <View style={styles.containerInputs}>
            <View style={[{paddingHorizontal: 5}, styles.sectionStyle]}>
                <Ionicons name="search" size={22} color="#888" />
                <TextInput
                        placeholder='Buscar especialidad'
                        underlineColorAndroid="transparent" 
                        style={styles.input}/>
            </View>
        </View>
  )
}
