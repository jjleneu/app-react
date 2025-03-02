import { OpcionCita } from "../types";

export const servicios: OpcionCita[] = [
    { id: '1', title: 'Consulta Médica', icon: "../../assets/consulta-medica.png" },
    { id: '2', title: 'Laboratorio', icon: "../../assets/laboratorio.png" },
    { id: '3', title: 'Imágenes y Procedimiento' },
    { id: '4', title: 'Terapía Física' },
    { id: '5', title: 'Recetas médicas' },
    { id: '6', title: 'Orden externa' },
  ];

export const citas: OpcionCita[] = [
  { id: "1", title: "Próximas citas" },
  { id: "2", title: "Historial de citas" },
];

export const citasAccesoDirecto : OpcionCita[]= [
  { id: "1", title: "Agendar \n cita médica" },
  { id: "2", title: "Card 2" },
  { id: "3", title: "Card 3" },
  { id: "4", title: "Card 4" },
];


export const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4Q29tbWVyY2UiLCJpYXQiOjE3NDA3NjA5NjMsInN1YiI6Im4zVTMkNiQwWC1DMG0zUmMzIiwiaXNzIjoid3N3ZWJhdXJvcmEiLCJleHAiOjE3NDA4NDczNjN9.GJbftKZIiqkuoXUnnTLPCS1d76DzzSO803J2OIP5TUc";

export const codigoEmpresa=3