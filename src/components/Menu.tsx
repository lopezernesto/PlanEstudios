import { useState } from "react";
import { Plus, FileUp, Library, BarChart3 } from "lucide-react";
import SidebarMateria from "./SidebarMateria";
import type { MateriaData } from "../types/Materia";

interface Props {
  hayCarrera: boolean;
  agregarMateria: (m: any) => void;
  obtenerMateriasPrevias: (anio: number, cuatri: number) => any[];
  materias: MateriaData[];
  aniosDuracion: number;
  importarProgreso: (file: File) => void;
  cargarLCC: () => void;
  cargarADYSL: () => void;
}

export default function Menu({
  hayCarrera,
  agregarMateria,
  obtenerMateriasPrevias,
  materias,
  aniosDuracion,
  importarProgreso,
  cargarLCC,
  cargarADYSL,
}: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-[100]">
        <div className="bg-[#1a1a1a]/80 border border-white/10 p-3 rounded-2xl shadow-2xl backdrop-blur-md flex flex-col gap-6">
          {hayCarrera ? (
            <>
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-white/60 hover:text-green-400 transition-colors flex flex-col items-center gap-1 group"
              >
                <Plus size={20} />
                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                  Materia
                </span>
              </button>

              <button
                disabled
                className="text-white/20 cursor-not-allowed flex flex-col items-center gap-1 group"
                title="Próximamente"
              >
                <BarChart3 size={20} />
                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                  Stats
                </span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={cargarLCC}
                className="text-white/60 hover:text-cyan-400 transition-colors flex flex-col items-center gap-1 group"
              >
                <Library size={20} />
                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                  LCC
                </span>
              </button>

              <button
                onClick={cargarADYSL}
                className="text-white/60 hover:text-cyan-400 transition-colors flex flex-col items-center gap-1 group"
              >
                <Library size={20} />
                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                  ADYSL
                </span>
              </button>

              <label className="text-white/60 hover:text-purple-400 transition-colors flex flex-col items-center gap-1 group cursor-pointer">
                <FileUp size={20} />
                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                  Importar
                </span>
                <input
                  type="file"
                  accept=".json"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      importarProgreso(file);
                    }
                  }}
                />
              </label>
            </>
          )}
        </div>
      </div>

      {hayCarrera && (
        <SidebarMateria
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onAgregar={agregarMateria}
          obtenerMateriasPrevias={obtenerMateriasPrevias}
          materias={materias}
          aniosDuracion={aniosDuracion}
        />
      )}
    </>
  );
}
