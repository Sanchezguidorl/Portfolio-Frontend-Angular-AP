export interface Credentials {
  email: string;
  password: string;
}
export interface Proyecto {
  nombre: string;
  url_proyecto: string;
  fecha_creacion: string;
  descripcion: string;
  url_miniatura: string;
}
export interface Estudio {
  nombre_institucion: string;
  fecha_inicio: string;
  descripcion: string;
  estado_cursado: string;
}
export interface JwtTokenExpiration {
  sub: string;
  exp: number;
}
