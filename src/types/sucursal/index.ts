export type Sucursal = {
    nombre:             string;
    idCentro:           number;
    aplicaTeleconsulta: string;
}

export type SucursalesXEspecialidad = {
    mensaje:string,
    virtual: Sucursal[],
    presencial: Sucursal[]
}