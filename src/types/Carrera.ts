import type { MateriaData } from "./Materia";

export interface CarreraData {
  id: string;
  nombre: string;
  aniosDuracion: number;
  materias: MateriaData[];
}
