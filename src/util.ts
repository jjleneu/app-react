function formatearFecha(fechaString: string): string {
  const fecha = new Date(fechaString);  
  const diasSemana: string[] = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const diaDelMes: number = fecha.getDate();
  const diaSemana: string = diasSemana[fecha.getDay()];

  return `${diaSemana} ${diaDelMes}`;
}

function obtenerDiasCalendario(fecha: Date | undefined): string[] {
  const fechas: string[] = [];
  const fechaActual = fecha ? fecha : new Date();

  for (let i = 0; i <= 10; i++) {
    const nuevaFecha = new Date(fechaActual);
    nuevaFecha.setDate(fechaActual.getDate() + i);
    fechas.push(nuevaFecha.toISOString().split("T")[0]);
  }
  return fechas;
}
