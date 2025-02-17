export type EspecialidadResponse = {
    especialidades: Especialidad[];
    mensaje:        string;
}

export type Especialidad = {
    idEspecialidad: number;
    nombre:         string;
}
