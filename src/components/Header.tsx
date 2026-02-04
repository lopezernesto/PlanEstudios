import { FileDown, ArrowLeft, BookOpenText } from "lucide-react";
import { useState } from "react";
import { ModalConfirmar } from "./ModalConfirmacion";

interface Props {
  nombreCarrera: string;
  onExportar: () => void;
  onCambiarCarrera: () => void;
}

export default function Header({
  nombreCarrera,
  onExportar,
  onCambiarCarrera,
}: Props) {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <>
      <div className="fixed top-6 left-6 z-[100] bg-[#1a1a1a]/80 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md p-4 min-w-[400px]">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">
              <BookOpenText color="white" />
            </div>
            <h1 className="text-lg font-bold text-white tracking-tight">
              {nombreCarrera}
            </h1>
          </div>

          <div className="flex gap-2">
            <button
              onClick={onExportar}
              className="px-4 py-2 rounded-lg text-white/60 hover:text-blue-400 hover:bg-white/5 transition-all flex items-center gap-2 text-sm font-medium"
              title="Exportar progreso"
            >
              <FileDown size={16} />
              <span>Exportar</span>
            </button>

            <button
              onClick={() => setMostrarModal(true)}
              className="px-4 py-2 rounded-lg text-white/60 hover:text-purple-400 hover:bg-white/5 transition-all flex items-center gap-2 text-sm font-medium"
              title="Cambiar de carrera"
            >
              <ArrowLeft size={16} />
              <span>Cambiar</span>
            </button>
          </div>
        </div>
      </div>

      {mostrarModal && (
        <ModalConfirmar
          titulo="¿Cambiar de carrera?"
          mensaje="Perderás los cambios actuales si no exportaste tu progreso. ¿Querés continuar?"
          textoBoton="Cambiar"
          colorBoton="bg-purple-600 hover:bg-purple-500"
          onConfirm={() => {
            onCambiarCarrera();
            setMostrarModal(false);
          }}
          onClose={() => setMostrarModal(false)}
        />
      )}
    </>
  );
}
