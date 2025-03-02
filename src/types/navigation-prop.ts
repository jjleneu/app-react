import {  BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Especialidad } from "./especialidad";
import { Sucursal } from "./sucursal";

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Index: undefined;
  Menu: undefined;
  Modalidad: undefined;
  DisponibilidadCita: {
    especialty: Especialidad | undefined;
    sucursal: Sucursal | undefined;
  };
  ConfirmacionCita:{
    idsIntervalos:string;
    idCodigoCliente:number;
    esTeleconsulta:string;
  }
};

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;
export type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, "SignUp">;
export type ForgotPasswordProps = NativeStackScreenProps<RootStackParamList, "ForgotPassword">;
export type IndexScreenProps = NativeStackScreenProps<RootStackParamList, "Index">;
export type MenuScreenProps = NativeStackScreenProps<RootStackParamList, "Menu">; 
export type DisponibilidadCitaScreenProps = NativeStackScreenProps<RootStackParamList, "DisponibilidadCita">; 
export type ModalidadCitaScreenProps = NativeStackScreenProps<RootStackParamList, "Modalidad">; 
export type ConfirmacionCitaScreenProps = NativeStackScreenProps<RootStackParamList, "ConfirmacionCita">; 


 
export type RootTabParamList = {
  Menu: undefined;
  Citas: undefined;
};

export type CitasTabScreenProps = BottomTabNavigationProp<RootTabParamList, "Citas">; 
 

export type RootDrawerParamList = {
  Home: undefined;
  Promociones: undefined;
  Setting:undefined;
  Modalidad: undefined
}; 

export type HomeDrawerScreenProps = DrawerScreenProps<RootDrawerParamList, "Promociones">;
export type ModalidadScreenProps =DrawerScreenProps<RootDrawerParamList, "Promociones">;
