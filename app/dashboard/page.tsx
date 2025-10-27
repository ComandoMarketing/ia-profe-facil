'use client'; // <-- ¡ESTA ES LA LÍNEA MÁGICA QUE FALTABA!

import Link from 'next/link';
import { useToolbox } from '@/contexts/ToolboxContext';

export default function DashboardPage() {
  const { completedLessons } = useToolbox();

  const nextLesson = {
    title: "Tu Próxima Lección",
    lessonName: "Lección 1.2: Genera preguntas de examen",
    slug: "1-2"
  };

  const courseProgress = [
    { module: "Módulo 0", lessons: ['0-1', '0-2', '0-3'] },
    { module: "Módulo 1", lessons: ['1-1', '1-2', '1-3'] },
    { module: "Módulo 2", lessons: ['2-1', '2-2', '2-3'] },
    { module: "Módulo 3", lessons: ['3-1', '3-2'] },
  ];

  const getModuleStatus = (moduleLessons: string[]) => {
    const completedInModule = moduleLessons.filter(lesson => completedLessons.includes(lesson)).length;
    const progressPercentage = Math.round((completedInModule / moduleLessons.length) * 100);
    
    if (progressPercentage === 100) return { status: 'completed', progress: 100 };
    if (progressPercentage > 0) return { status: 'current', progress: progressPercentage };
    return { status: 'locked', progress: 0 };
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">¡Hola, Profesor! 👋</h1>

        <section className="bg-white p-8 rounded-2xl shadow-xl mb-12">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">{nextLesson.title}</h2>
          <p className="text-2xl font-bold text-gray-800 mb-6">{nextLesson.lessonName}</p>
          <Link 
            href={`/lecciones/${nextLesson.slug}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg inline-block"
          >
            Continuar Aprendiendo
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Tu Progreso en el Curso</h2>
          <div className="flex justify-center items-center space-x-4 md:space-x-8">
            {courseProgress.map((module, index) => {
              const { status, progress } = getModuleStatus(module.lessons);
              return (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
                      status === 'completed'
                        ? 'bg-green-500 text-white'
                        : status === 'current'
                        ? 'border-4 border-blue-500 text-blue-500'
                        : 'border-2 border-gray-300 text-gray-400'
                    }`}
                  >
                    {status === 'completed' && '✓'}
                    {status === 'current' && `${progress}%`}
                    {status === 'locked' && '🔒'}
                  </div>
                  <p className="text-sm text-gray-600 mt-2 max-w-[80px] text-center">{module.module}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}