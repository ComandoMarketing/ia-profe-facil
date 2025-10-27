// 1. Esta línea es MUY IMPORTANTE. Le dice a Next.js que este componente es interactivo.
'use client';

// 2. Importamos las herramientas de React que vamos a usar.
import { useState, useEffect } from 'react';

// 3. Asegúrate de tener una interfaz como esta en tu proyecto, o impórtala desde donde la tengas definida.
//    Si no la tienes, puedes descomentar esta como ejemplo.
/*
interface Lesson {
  id: string;
  title: string;
  content: string;
  // ... añade aquí cualquier otra propiedad que tenga tu lección
}
*/

// 4. Asegúrate de que tu hook personalizado esté importado correctamente.
//    Cambia '@/path/to/your/toolbox/hook' por la ruta real a tu hook.
// import { useToolbox } from '@/path/to/your/toolbox/hook';

// 5. Esta es la función principal de tu página. ¡El error estaba aquí y ya está corregido!
export default function LessonPage({ params }: { params: { slug: string } }) {
  // 6. Extraemos el 'slug' de los parámetros de la URL.
  const { slug } = params;

  // 7. Usamos tu hook personalizado (asegúrate de que esté importado arriba).
  //    Si te da error aquí, es porque el hook 'useToolbox' no existe o no está importado.
  const { addPrompt, completedLessons, markLessonAsCompleted } = useToolbox();

  // 8. Creamos un estado para guardar la información de la lección.
  const [lesson, setLesson] = useState<Lesson | null>(null);

  // 9. Este efecto se ejecutará cuando el componente se cargue para obtener los datos de la lección.
  useEffect(() => {
    // Aquí es donde deberías hacer la llamada a tu base de datos o API para obtener la lección.
    console.log(`Cargando datos para la lección con slug: ${slug}`);

    // EJEMPLO de cómo podrías cargar los datos:
    // const fetchLesson = async () => {
    //   try {
    //     const response = await fetch(`/api/lecciones/${slug}`); // Cambia esta URL por tu endpoint real
    //     if (!response.ok) {
    //       throw new Error('Lección no encontrada');
    //     }
    //     const data = await response.json();
    //     setLesson(data);
    //   } catch (error) {
    //     console.error("Error al cargar la lección:", error);
    //   }
    // };
    // fetchLesson();

  }, [slug]); // El efecto se volverá a ejecutar si el 'slug' cambia.

  // 10. Lo que se mostrará en la página.
  return (
    <div>
      <h1>Página de la Lección</h1>
      <p>Estás viendo la lección con el identificador (slug): <strong>{slug}</strong></p>

      {lesson ? (
        <div>
          <h2>{lesson.title}</h2>
          <p>{lesson.content}</p>
          {/* Aquí iría el resto del contenido de tu lección (videos, botones, etc.) */}
        </div>
      ) : (
        <p>Cargando contenido de la lección...</p>
      )}
    </div>
  );
}