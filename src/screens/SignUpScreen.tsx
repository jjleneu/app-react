import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../Styles/Auth';
import { SignUpScreenProps } from '../types/navigation-prop';
import { Controller, useForm } from 'react-hook-form';
import { SignUpForm, validationSignUpSchema } from '../types/auth';
import { yupResolver } from '@hookform/resolvers/yup';


export default function SignUpScreen({navigation}: SignUpScreenProps) {

  

  const {control, handleSubmit, formState: { errors }} = useForm<SignUpForm>({
      resolver: yupResolver(validationSignUpSchema)
  });
  
  const goToLogin= ()=>{
    navigation.navigate('Login')
  }

  const onSubmit = (data: SignUpForm)=>{
    Alert.alert('Se ha creado el usuario correctamente, Inicia Sesión');
    navigation.navigate('Login')
  }

  return (
     <View style={styles.container}> 
            <View style={styles.containerTitulo}>
            <Image  source={require('../../assets/favicon.png')} style={styles.logo}></Image>
            <Text style={styles.titulo}>Create Account</Text> 
            </View> 
            <View style ={{marginVertical: 5}}></View>
            <View style={styles.containerInputs}>
              <View style={styles.errorContainer}>

                <Text>Full Name</Text> 
                {
                  errors.name&&<Text style={signUpStyle.errorLabel}>({errors.name.message})</Text>
                }

              </View>
                <View style={styles.sectionStyle}>
                    <AntDesign name="user" size={24} color="#888" style={styles.imageStyle} /> 
                    <Controller
                      
                      control={control}
                      render={({field: { onChange, onBlur, value }}) => ( 
                            <TextInput
                              placeholder='Enter your Full Name...'
                              underlineColorAndroid="transparent"
                              defaultValue="" 
                              onChangeText={onChange}
                              onBlur={onBlur}
                              value={value}
                              style={styles.input}/> 
                      )}
                      name='name'
                      rules={{required:true}}
                    >
                       
                    </Controller>
                   
                </View>
            </View>
            <View style ={{marginVertical: 10}}></View>
            <View style={styles.containerInputs}>
                <View style={styles.errorContainer}>
                  <Text>Email Address</Text> 
                  {errors.email&&<Text style={signUpStyle.errorLabel}>({errors.email.message})</Text>}      
                </View>
                <View style={styles.sectionStyle}>
                    <Fontisto name="email" size={24} color="#888" style={styles.imageStyle}/>
                    <Controller
                    control={control}
                    render={({field: {value, onBlur, onChange}})=>(
                        <TextInput
                        placeholder='Enter your email...'
                        underlineColorAndroid="transparent"
                              defaultValue="" 
                              onChangeText={onChange}
                              onBlur={onBlur}
                              value={value}
                        style={styles.input}/> 
                    )}
                    name='email'
                    rules={{required:true}}>

                    </Controller>
                    
                </View>
            </View>
            <View style ={{marginVertical: 10}}></View>
            <View style={styles.containerInputs}>
                <View style={styles.errorContainer}>
                  <Text>Password</Text>
                  {errors.password&&<Text style={signUpStyle.errorLabel}>({errors.password.message})</Text>}      
                </View>
                <View style={styles.sectionStyle}>
                    <AntDesign name="lock" size={24} color="#888" style={styles.imageStyle}/>
                    <Controller
                      control={control}
                      render={({field: {value, onBlur, onChange }})=>(
                          <TextInput 
                          placeholder='Enter your password...'
                          underlineColorAndroid="transparent"
                              defaultValue="" 
                              onChangeText={onChange}
                              onBlur={onBlur}
                              value={value}
                          secureTextEntry 
                          style={styles.input}/> 
                      )}
                      name="password"
                      rules={{required:true}}
                    >

                    </Controller>
                    
                </View>
                
            </View>
            <View style ={{marginVertical: 10}}></View>
            <View style={styles.containerInputs}>
                <View style={styles.errorContainer}>
                  <Text>Password Confirmation</Text>
                   {errors.confirmPassword&&<Text style={signUpStyle.errorLabel}>({errors.confirmPassword.message})</Text>}      
                 </View>
                <View style={styles.sectionStyle}>
                    <Ionicons name="key-outline" size={24} color="#888" style={styles.imageStyle} /> 
                    <Controller 
                        control={control}
                        render={({field:{value,onBlur, onChange}})=>(
                            <TextInput 
                          placeholder='Re-Enter your password...'
                          secureTextEntry
                          defaultValue="" 
                              onChangeText={onChange}
                              onBlur={onBlur}
                              value={value}
                          style={styles.input}/> 
                        )}
                        name='confirmPassword'
                        rules={{required:true}}
                        />
                </View>
                
            </View>
            <View style ={{marginTop: 50}}></View>
            <View style={styles.containerInputs}>
                <TouchableOpacity style={styles.button}
                                  onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.textButton}>Sign Up</Text>
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


const signUpStyle = StyleSheet.create({
    errorLabel: {
      color:'red'
    }
})