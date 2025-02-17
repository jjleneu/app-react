import { isAxiosError } from "axios";
import api from "./AxiosConfig"
import { token } from "../db";


export const obtenerEspecialidades = async(modalidad:string)=>{
    try {
         const params = {
            arg0: modalidad,
            arg1: 3
        }

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const { data } = await api("/Agendamiento/obtenerEspecialidades", { params, headers });
        return data;
    } catch (error) {
        if(error&&isAxiosError(error)){
            console.log(error.message)
            throw new Error(error.message);
            
        }
    }
    
}