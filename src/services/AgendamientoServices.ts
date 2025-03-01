import { isAxiosError } from "axios";
import { codigoEmpresa, token } from "../db";
import api from "./AxiosConfig";

type agendarCitaProps = {
    idTurnos:string
    idCliente:number
    usuario:string,
    modalidad:string
}
export const agendarCita = async(datosAgendamiento: agendarCitaProps) => { 
  try {

    const params = {
      arg0: datosAgendamiento.idTurnos,
      arg1: 323104,//datosAgendamiento.idCliente,
      arg2: "KSUR",
      arg3: datosAgendamiento.modalidad,
      arg4: codigoEmpresa
    };

    const headers = {
              Authorization: `Bearer ${token}`,
    };

    console.log(params);

    const { data } = await api.post("/Agendamiento/agendarCitaMedica", {
      params,
      headers,
    });

    return data;

  } catch (error) {
      if(error&&isAxiosError(error)){
        console.log(error)
        throw new Error(error.response?.data); 
      }
  }
};