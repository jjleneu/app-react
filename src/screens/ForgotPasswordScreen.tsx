import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto'; 
import styles from '../Styles/Auth';
import { ForgotPasswordProps } from '../types/navigation-prop';

export default function ForgotPasswordScreen({navigation}: ForgotPasswordProps) {
  const [email, setEmail] = useState("");

   const goToLogin = ()=>{
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}> 
         <View style={styles.containerTitulo}>
            <Image  source={require('../../assets/favicon.png')} style={styles.logo}></Image>
            <Text style={styles.titulo}>Forgot Password</Text> 
            <Text style={[styles.subtitulo,{textAlign:'center', marginTop: 10}]}>Please enter your email address to reset your password</Text>
         </View> 
         <View style={styles.containerInputs}> 
               <View style={styles.sectionStyle}>
                    <Fontisto name="email" size={24} color="#888" style={styles.imageStyle}/>
                    <TextInput
                      placeholder='Enter your email...'
                      underlineColorAndroid="transparent" 
                      style={styles.input} 
                      value={email}
                      onChangeText={setEmail}/>
                </View>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.containerInputs}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('Login')}
                style={[styles.button]}
                                  >
                    <Text style={styles.textButton}>Send Email</Text>
                </TouchableOpacity>
        </View>
        <View style ={{marginVertical: 10}}></View>
            <View style={styles.singUpContainer}>
                <Text style={styles.textSignUp}> Already have an account?</Text>
                <TouchableOpacity
                        onPress={goToLogin}>
                        <Text style={[{textDecorationLine: 'underline', color:'#7B3AED'}, styles.textSignUp]}>Sign in</Text>
                </TouchableOpacity>
            </View> 
    </View>
  )
}  
