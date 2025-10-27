import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IA-Profe Fácil - Aprende IA para tu clase',
  description: 'La guía paso a paso para profesores que quieren ahorrar tiempo e inspirar a sus alumnos, sin complicaciones técnicas.',
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <div className="text-center max-w-4xl mx-auto">
        
        {/* Titular Principal */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Aprende a usar IA en tu clase, <span className="text-blue-600">fácil y rápido</span>.
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          La guía paso a paso para profesores que quieren ahorrar tiempo e inspirar a sus alumnos, sin complicaciones técnicas.
        </p>

        {/* Contenedor del Video Explicativo */}
        <div className="mt-12 w-full max-w-3xl">
          <div className="aspect-video bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
            <p className="text-gray-500 text-lg">
              [Aquí irá el video explicativo de 1 minuto]
            </p>
          </div>
        </div>

        {/* Botón de Llamada a la Acción */}
        <div className="mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-300 shadow-xl">
            Comenzar Gratis
          </button>
        </div>

      </div>
    </main>
  )
}