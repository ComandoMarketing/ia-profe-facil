'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useToolbox } from '@/contexts/ToolboxContext';
import { CopyButton } from "@/components/CopyButton";
import { lessonsData } from '@/data/lessons';
import { useEffect, useState } from 'react';
import { use } from 'react'; // <-- Importamos el gancho 'use'

export default function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  // ¡Abrimos la caja de 'params' de forma segura!
  const { slug } = use(params);
  const { addPrompt, completedLessons, markLessonAsCompleted } = useToolbox();
  const [lesson, setLesson] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundLesson = lessonsData.find(l => l.slug === slug);

    if (!foundLesson) {
      notFound();
    } else {
      setLesson(foundLesson);
      setIsLoading(false);
    }
  }, [slug]);

  const isCompleted = completedLessons.includes(slug);

  const handleSavePrompt = () => {
    if (!lesson) return;
    addPrompt({
      title: lesson.title,
      text: lesson.prompt,
    });
    alert('¡Prompt guardado en tu Caja de Herramientas!');
  };

  const handleMarkAsCompleted = () => {
    markLessonAsCompleted(slug);
    alert('¡Lección marcada como completada! ¡Buen trabajo!');
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen bg-gray-50 p-8 flex items-center justify-center">
        <p className="text-lg text-gray-600">Cargando lección...</p>
      </main>
    );
  }

  if (!lesson) {
    return notFound();
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <aside className="w-full md:w-1/4 bg-gray-100 p-6 border-r border-gray-200">
        <Link href="/modulos" className="text-blue-600 hover:underline text-sm mb-4 block">&larr; Volver a Módulos</Link>
        <h2 className="text-xl font-bold mb-4 text-gray-800">{lesson.module}</h2>
        <ul className="space-y-2">
          {lessonsData
            .filter(l => l.module === lesson.module)
            .map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/lecciones/${l.slug}`}
                  className={`block p-2 rounded ${
                    l.slug === slug
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {l.title}
                </Link>
              </li>
            ))}
        </ul>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{lesson.title}</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-2">¿Qué vamos a hacer?</h2>
          <p className="text-gray-700 leading-relaxed">{lesson.content.whatYoullDo}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">La Analogía Clave</h2>
          <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            {lesson.content.analogy}
          </p>
        </div>
      </main>

      <aside className="w-full md:w-1/4 bg-blue-50 p-6 border-l border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Tu Guía Paso a Paso</h2>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">El "Texto Mágico" (Prompt)</h3>
            <div className="bg-gray-100 p-3 rounded text-xs font-mono break-all mb-2">
              {lesson.prompt}
            </div>
            <CopyButton text={lesson.prompt} />
          </div>

          {lesson.content.steps.map((step: { title: string; description: string }, index: number) => ( // <-- Añadimos tipos aquí
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-3">
          <button 
            onClick={handleMarkAsCompleted}
            disabled={isCompleted}
            className={`w-full font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-lg ${
              isCompleted 
                ? 'bg-green-500 text-white cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isCompleted ? 'Lección Completada ✅' : 'MARCAR LECCIÓN COMPLETADA'}
          </button>
          <button onClick={handleSavePrompt} className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg transition-colors duration-300">
            Guardar en mi Caja de Herramientas
          </button>
        </div>
      </aside>
    </div>
  );
}