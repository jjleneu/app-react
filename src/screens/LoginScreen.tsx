import React from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LoginScreenProps } from '../types/navigation-prop';
import styles from '../Styles/Auth';
import { Controller, useForm } from 'react-hook-form';
import { LoginForm, validationLoginSchema } from '../types/auth';
import { yupResolver } from '@hookform/resolvers/yup';


export default function LoginScreen({navigation}:LoginScreenProps) {

  const irASignUp = ()=>{
    navigation.navigate('SignUp');
  }

  const login = (data: LoginForm)=>{
    if(isValid){ 
        navigation.navigate('Index')
    }
  }

  const {control, handleSubmit,formState:{errors, isValid}} = useForm<LoginForm>({
    resolver: yupResolver(validationLoginSchema)
  });
 
  return (
    <ScrollView contentContainerStyle={styles.container}>     
        <View style={styles.containerTitulo}>
            <Image  source={require('../../assets/favicon.png')} style={styles.logo}></Image>
            <Text style={styles.titulo}>Let's Sign In</Text> 
            <Text style={styles.subtitulo}>Experience Al Health Assistant for Everyone</Text> 
        </View> 
        <View style ={styles.separator}></View>
        <View style={styles.containerInputs}>
            <View style={styles.errorContainer}>
                <Text>Email Address</Text> 
                {
                    errors.email&&(<Text style={styles.errorLabel}>({errors.email.message})</Text>)
                }
            </View>
            <View style={styles.sectionStyle}>
                <Fontisto name="email" size={24} color="#888" style={styles.imageStyle}/>
                <Controller 
                control={control}
                render={({field: {value, onBlur, onChange}})=>(
                    <TextInput
                        placeholder='Enter your email...'
                        underlineColorAndroid="transparent"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        style={styles.input}/>
                )}
                name='email'
                rules={{required:true}}/>
            </View>
        </View>
         <View style ={styles.separator}></View>
         <View style={styles.containerInputs}>
            <View style={styles.errorContainer}>
                <Text>Password</Text>
                  {
                    errors.password&&(<Text style={styles.errorLabel}>({errors.password.message})</Text>)
                  }
            </View>
            <View style={styles.sectionStyle}>
                <AntDesign name="lock" size={24} color="#888" style={styles.imageStyle}/>
                <Controller
                    control={control}
                    render={({field:{value, onBlur, onChange}})=>(
                        <TextInput 
                        placeholder='Enter your password...'
                        secureTextEntry
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        style={styles.input}></TextInput>
                    )}
                    name='password'
                    rules={{required:true}}/>
                
            </View>
            
        </View>
        <View style ={styles.separator}></View>
        <View style={styles.containerInputs}>
            <TouchableOpacity 
                style={styles.button}
                onPress={handleSubmit(login)}>
                <Text style={styles.textButton}>Sign in</Text>
            </TouchableOpacity>
        </View>
        <View style ={styles.separator}></View>
        <View style={styles.singUpContainer}>
            <Text style={styles.textSignUp}> Don´t have a account?</Text>
            <TouchableOpacity onPress={irASignUp}>
                    <Text style={[{textDecorationLine: 'underline', color:'#7B3AED'}, styles.textSignUp]}>Sign up</Text>
             </TouchableOpacity>
        </View>
        <View style ={styles.separator}></View>
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgotPassword}>Forgot Password</Text>
             </TouchableOpacity>
        </View> 
    </ScrollView>
    
  )
}

