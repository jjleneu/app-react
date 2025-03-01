import { isAxiosError } from "axios"
import api from "./AxiosConfig";
import { token } from "../db";


export const obtenerProfesionalesDisponibles = async()=>{
    try {
        const params = {
          arg0: 1,
          arg1: 133,
          arg2: "28/02/2025",
          arg3: 'N',
          arg4: 3
        };

        const headers = {
             Authorization: `Bearer ${token}`,
        }

        const { data } = await api.get("/Agendamiento/obtenerDisponibilidades", {
          params,
          headers,
        });

        const groupedData = data.disponibilidad.map((item) => ({
          idMedico: item.idMedico,
          nombreMedico: item.nombreMedico,
        }));

        const uniqueGroupedData = Array.from(new Set(groupedData.map((a) => a.idMedico))).map((idMedico) => {
          return groupedData.find((a) => a.idMedico === idMedico);
        });

        const response = uniqueGroupedData.map( item=>{
          return {
            idMedico: item.idMedico,
            nombreMedico: item.nombreMedico,
            turnos: data.disponibilidad.map((dataItem) => {
              return {
                horaInicio: dataItem.horaInicio,
                horaFin: dataItem.horaFin,
                idsIntervalos: dataItem.idsIntervalos,
              };
            }),
          };
        });

        return response;
    } catch (error) {
      console.log(error)
        if(error&&isAxiosError(error)){
            throw new Error(error.message);
            
        }
    }
}