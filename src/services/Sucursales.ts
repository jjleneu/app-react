import { isAxiosError } from "axios"
import api from "./AxiosConfig";
import { Especialidad } from "../types/especialidad";
import { token } from "../db";


export const obtenerSucursalesXEspecialidad = async(idEspecialidad: Especialidad['idEspecialidad']) =>{
    try {


        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const params = {
            arg0:idEspecialidad,
            arg1:3
        }

        const { data } = await api.get("/Agendamiento/obtenerSucursalXEspecialidad", {
          params,
          headers,
        });

        return data;
    } catch (error) {
        if(error&&isAxiosError(error)){
            console.log(error.message)
            throw new Error(error.message);
            
        }
    }
}