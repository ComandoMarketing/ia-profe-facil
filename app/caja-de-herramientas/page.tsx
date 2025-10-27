'use client';

import { CopyButton } from "@/components/CopyButton";
import { useToolbox } from "@/contexts/ToolboxContext";

export default function CajaDeHerramientasPage() {
  const { savedPrompts, loading } = useToolbox(); // Obtenemos también el estado de carga

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 p-4 md:p-8 flex items-center justify-center">
        <p className="text-lg text-gray-600">Cargando tu Caja de Herramientas...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Mi Caja de Herramientas</h1>
        <p className="text-lg text-gray-600 mb-8">Aquí tienes guardados todos tus "textos mágicos". Cópielos y úselos cuando los necesite.</p>

        {/* Lista de Prompts Guardados */}
        <div className="space-y-6">
          {savedPrompts.map((prompt) => (
            <div key={prompt.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              
              {/* Título del Prompt */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{prompt.title}</h3>
              
              {/* Contenedor del Texto del Prompt */}
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-sm font-mono text-gray-700 whitespace-pre-wrap break-words">
                  {prompt.text}
                </p>
              </div>
              
              {/* Botones de Acción */}
              <div className="flex justify-end space-x-3">
                <button className="text-gray-500 hover:text-red-600 transition-colors duration-300" title="Eliminar prompt">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <CopyButton text={prompt.text} />
              </div>

            </div>
          ))}
        </div>

        {/* Mensaje si no hay prompts */}
        {savedPrompts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Todavía no has guardado ningún prompt.</p>
            <p className="text-gray-400">¡Completa una lección y guarda tu primer "texto mágico"!</p>
          </div>
        )}

      </div>
    </main>
  );
}