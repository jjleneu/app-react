import { DrawerScreenProps } from "@react-navigation/drawer";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Index: undefined;
  Menu: undefined;
  Modalidad: undefined
};

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;
export type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, "SignUp">;
export type ForgotPasswordProps = NativeStackScreenProps<RootStackParamList, "ForgotPassword">;
export type IndexScreenProps = NativeStackScreenProps<RootStackParamList, "Index">;
export type MenuScreenProps = NativeStackScreenProps<RootStackParamList, "Menu">; 
 
export type RootTabParamList = {
  Menu: undefined;
  Citas: undefined;
}; 


export type RootDrawerParamList = {
  Home: undefined;
  Promociones: undefined;
  Setting:undefined;
  Modalidad: undefined
}; 


export type HomeDrawerScreenProps = DrawerScreenProps<RootDrawerParamList, "Promociones">;
export type ModalidadScreenProps =DrawerScreenProps<RootDrawerParamList, "Promociones">;
