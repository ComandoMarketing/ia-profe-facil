import Link from 'next/link';

// Aquí está toda la información de nuestro curso.
// En el futuro, esto vendría de una base de datos.
const courseData = [
  {
    id: 'modulo-0',
    title: 'Módulo 0: Empezando sin Miedo',
    description: 'Introducción a la IA y cómo usarla de forma segura.',
    status: 'completed',
    lessons: [
      { id: '0-1', title: '¿Qué es la IA y por qué es tu nueva asistente?', slug: '0-1', status: 'completed' },
      { id: '0-2', title: 'Creando tu cuenta segura en herramientas clave', slug: '0-2', status: 'completed' },
      { id: '0-3', title: 'La "Regla de Oro": Qué NO debes compartir con una IA', slug: '0-3', status: 'completed' },
    ]
  },
  {
    id: 'modulo-1',
    title: 'Módulo 1: Ahorra Tiempo: El Profesor Eficiente',
    description: 'Usa la IA para tu planificación y creación de materiales.',
    status: 'current',
    lessons: [
      { id: '1-1', title: 'Guía Rápida: Crea tu plan de lección en 2 minutos', slug: '1-1', status: 'completed' },
      { id: '1-2', title: 'Cómo generar 10 preguntas de examen sobre la Revolución Francesa', slug: '1-2', status: 'current' },
      { id: '1-3', title: 'Cómo adaptar un texto complejo para estudiantes con dificultades', slug: '1-3', status: 'locked' },
    ]
  },
  {
    id: 'modulo-2',
    title: 'Módulo 2: Creatividad en el Aula: El Profesor Inspirador',
    description: 'Genera recursos visuales e ideas creativas para tus clases.',
    status: 'locked',
    lessons: [
      { id: '2-1', title: 'Cómo crear imágenes para tu presentación usando IA', slug: '2-1', status: 'locked' },
      { id: '2-2', title: 'Cómo generar ideas para un proyecto de clase', slug: '2-2', status: 'locked' },
      { id: '2-3', title: 'Cómo usar la IA para crear cuentos personalizados', slug: '2-3', status: 'locked' },
    ]
  },
  {
    id: 'modulo-3',
    title: 'Módulo 3: Comunicación Fácil: El Profesor Conectado',
    description: 'Optimiza tus tareas administrativas y de comunicación.',
    status: 'locked',
    lessons: [
      { id: '3-1', title: 'Cómo redactar un email profesional para padres', slug: '3-1', status: 'locked' },
      { id: '3-2', title: 'Cómo resumir las notas de una reunión de profesores', slug: '3-2', status: 'locked' },
    ]
  },
];

// Función para obtener el icono de estado de una lección
const getLessonIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return '✅';
    case 'current':
      return '▶️';
    case 'locked':
      return '🔒';
    default:
      return '🔒';
  }
};

export default function ModulosPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Contenido del Curso</h1>
        <p className="text-lg text-gray-600 mb-8">Aquí tienes todos los módulos y lecciones. ¡Avanza a tu propio ritmo!</p>

        <div className="space-y-8">
          {courseData.map((module) => (
            <section key={module.id} className={`bg-white p-6 rounded-xl shadow-md border-2 ${module.status === 'current' ? 'border-blue-400' : 'border-transparent'}`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{module.title}</h2>
                {module.status === 'completed' && <span className="text-green-600 font-semibold">✅ Completado</span>}
                {module.status === 'current' && <span className="text-blue-600 font-semibold">▶️ En curso</span>}
                {module.status === 'locked' && <span className="text-gray-400 font-semibold">🔒 Bloqueado</span>}
              </div>
              <p className="text-gray-600 mb-4">{module.description}</p>
              
              <ul className="space-y-3">
                {module.lessons.map((lesson) => (
                  <li key={lesson.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <span className="text-2xl">{getLessonIcon(lesson.status)}</span>
                    {lesson.status !== 'locked' ? (
                      <Link href={`/lecciones/${lesson.slug}`} className="text-blue-600 hover:underline font-medium">
                        {lesson.title}
                      </Link>
                    ) : (
                      <span className="text-gray-400 font-medium">{lesson.title}</span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}