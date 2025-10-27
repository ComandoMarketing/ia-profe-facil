export interface Lesson {
  slug: string;
  title: string;
  module: string;
  prompt: string;
  content: {
    whatYoullDo: string;
    analogy: string;
    steps: { // <-- AÑADIMOS ESTA LÍNEA
      title: string;
      description: string;
    }[];
  };
}

export const lessonsData: Lesson[] = [
  // --- Módulo 0: Empezando sin Miedo ---
  {
    slug: '0-1',
    title: '¿Qué es la IA y por qué es tu nueva asistente (y no tu reemplazo)?',
    module: 'Módulo 0: Empezando sin Miedo',
    prompt: `Actúa como un experto en tecnología educativa amigable. Expícale a un profesor que no sabe nada de IA qué es la inteligencia artificial. Usa una analogía muy simple y evita cualquier término técnico. El objetivo es que el profesor se sienta tranquilo y vea la IA como una herramienta útil, no como una amenaza.`,
    content: {
      whatYoullDo: "Entenderás qué es la IA en menos de 5 minutos, sin jerga técnica, y cambiarás tu perspectiva de miedo a curiosidad.",
      analogy: "Piensa en la IA como en un asistente de escritura súper rápido. No escribe la novela por ti, pero puede investigar, resumir, darte ideas y corregir tu ortografía. Tú sigues siendo el autor, el director, el que tiene la visión final.",
      steps: [
        { title: "Paso 1: La Analogía del Asistente", description: "Imagina que tienes un asistente que puede leer toda la biblioteca del mundo en un segundo y resumirte cualquier libro. ¿No te gustaría tener esa ayuda para preparar tus clases?" },
        { title: "Paso 2: No es 'pensar', es 'predecir'", description: "La IA no 'piensa' como un humano. Es un maestro de las estadísticas que, con base en millones de textos, predice cuál es la palabra más probable que debe seguir a otra." },
        { title: "Paso 3: Tu Papel es Clave", description: "La IA es una herramienta poderosa, pero sin tu guía, está perdida. Eres tú quien le da las instrucciones claras, quien revisa su trabajo y quien le da el toque humano y pedagógico." }
      ]
    }
  },
  {
    slug: '0-2',
    title: 'La "Regla de Oro": Qué NO compartir con una IA',
    module: 'Módulo 0: Empezando sin Miedo',
    prompt: `Actúa como un experto en seguridad de datos educativos. Dame una lista de 5 reglas de oro sobre qué información NUNCA se debe introducir en una herramienta de IA como ChatGPT. Explica cada regla con un ejemplo claro de por qué es peligroso. El público son profesores, así que usa un lenguaje claro y directo.`,
    content: {
      whatYoullDo: "Aprenderás a proteger la privacidad de tus alumnos y la tuya, usando la IA de forma ética y segura.",
      analogy: "Compartir información sensible con una IA es como gritar un secreto en una plaza pública. Aunque la IA no tiene malas intenciones, no puedes controlar quién escucha o cómo se usa esa información después.",
      steps: [
        { title: "Paso 1: Datos Personales", description: "NUNCA compartas nombres completos, direcciones, DNI, números de teléfono o cualquier información que pueda identificar a un alumno." },
        { title: "Paso 2: Historial Médico o Psicológico", description: "NUNCA compartas información sobre la salud, discapacidades, diagnóstico o problemas de comportamiento de un alumno." },
        { title: "Paso 3: Información Familiar", description: "NUNCA compartas detalles sobre la situación familiar, problemas en casa o cualquier información confidencial que te hayan confiado los padres." },
        { title: "Paso 4: Imágenes o Videos de Menores", description: "NUNCA subas fotos o videos de tus alumnos sin el consentimiento explícito de sus padres o tutores." },
        { title: "Paso 5: Contraseñas o Claves de Acceso", description: "NUNCA compartas contraseñas del sistema del centro, claves de aula o cualquier credencial de acceso." }
      ]
    }
  },

  // --- Módulo 1: Ahorra Tiempo ---
  {
    slug: '1-1',
    title: "Guía Rápida: Crea tu plan de lección en 2 minutos.",
    module: 'Módulo 1: Ahorra Tiempo: El Profesor Eficiente',
    prompt: `Actúa como un profesor de primaria experto. Dame un plan de lección detallado de 45 minutos para una clase de 3º grado sobre el ciclo del agua. Incluye: 1) Un objetivo de aprendizaje claro, 2) Una actividad de inicio (rompehielos) de 5 minutos, 3) Una explicación simple con una analogía para niños, y 4) Una actividad de cierre para comprobar la comprensión.`,
    content: {
      whatYoullDo: "Aprenderás a generar un plan de lección completo y listo para usar en menos tiempo del que tardas en hacerte un café.",
      analogy: "Piensa en la IA como en un asistente de prácticas súper entusiasta. Sabe muchísimo, pero necesita tus instrucciones exactas. Si le das una orden clara (un buen 'prompt'), te dará un resultado fantástico. Tú eres el director del orquesta.",
      steps: [
        { title: "Paso 1 & 2: Abre y Copia", description: "Abre tu herramienta de IA (ChatGPT, Gemini, etc.) y copia este texto mágico (nuestro 'prompt')." },
        { title: "Paso 3: Pega y Envía", description: "Pégalo en la caja de chat de la IA y presiona 'Enter'." },
        { title: "Paso 4: ¡Revisa la Magia!", description: "La IA te devolverá un plan de lección completo. Léelo. ¿Te gusta? ¿Es útil?" },
        { title: "Paso 5: Refina si lo necesitas (Opcional)", description: "¿Es muy largo? Escribe: 'Hazlo más corto'. ¿Quieres algo más? Escribe: 'Añade un dato curioso'." },
        { title: "Paso 6: ¡Guarda tu Trabajo!", description: "Copia el texto que te ha gustado y pégalo en tu documento de Word o Google Docs. ¡Ya tienes tu lección lista!" }
      ]
    }
  },
  {
    slug: '1-2',
    title: "Cómo generar 10 preguntas de examen sobre la Revolución Francesa",
    module: 'Módulo 1: Aumenta tu productividad: El Profesor Eficiente',
    prompt: `Actúa como un profesor de historia de secundaria experto. Necesito crear un examen sobre la Revolución Francesa para una clase de 4º de la ESO. Por favor, genera 10 preguntas variadas: a) 5 preguntas de opción múltiple con 4 opciones cada una, indicando la respuesta correcta. b) 3 preguntas de desarrollo cortas que requieran una respuesta de 2-3 líneas. c) 2 preguntas de verdadero/falso, justificando la respuesta falsa. Los temas a cubrir son: Causas de la revolución, la toma de la Bastilla, el Reinado del Terror y Napoleón Bonaparte.`,
    content: {
      whatYoullDo: "Crearás una base sólida de preguntas variadas y justas para tu examen en menos de un minuto.",
      analogy: "Pedirle preguntas a la IA es como pedir en un restaurante. No pides solo 'comida'. Pides 'un filete a la parrilla con patatas fritas'. Aquí, no pedimos solo 'preguntas'. Le pedimos '5 de opción múltiple, 3 de desarrollo y 2 de verdadero/falso sobre temas específicos'. ¡Cuanto más específico tu pedido, mejor será el plato!",
      steps: [
        { title: "Paso 1: Elige tu Herramienta y Copia", description: "Abre tu herramienta de IA (ChatGPT, Gemini, etc.) y copia este texto mágico." },
        { title: "Paso 2: Pega y Envía", description: "Pégalo en la caja de chat y presiona 'Enter'. La IA entenderá que necesitas varios tipos de preguntas." },
        { title: "Paso 3: Revisa y Adapta", description: "La IA te dará las 10 preguntas. Léelas. ¿Son adecuadas para tu clase? ¿Necesitas ajustar la dificultad? Puedes pedirle: 'Haz las preguntas más sencillas' o 'Añade una pregunta sobre el Congreso de Viena'." },
        { title: "Paso 4: Guarda y Prepara", description: "Copia el texto, pégalo en tu documento y ya tienes una base sólida para tu examen. ¡Listo para imprimir o pasar a un formato digital!" }
      ]
    }
  },
  {
    slug: '1-3',
    title: "Cómo adaptar un texto complejo para estudiantes con dificultades",
    module: 'Módulo 1: Aumenta tu productividad: El Profesor Eficiente',
    prompt: `Actúa como un experto en pedagogía y lingüística. Necesito que adaptes este texto para un alumno de [GRADO] con dificultades de lectura. El texto original es: "[PEGAR TEXTO AQUÍ]". Tu tarea es: 1. Reescribir el texto usando un vocabulario más sencillo y frases más cortas. 2. Explicar cualquier palabra o concepto complicado entre paréntesis de forma fácil de entender. 3. Mantener el significado y la intención original del texto intactos.`,
    content: {
      whatYoullDo: "Aprenderás a tomar cualquier texto, por complejo que sea, y transformarlo en algo accesible y comprensible para todos tus alumnos.",
      analogy: "Piensa en esto como si fueras un traductor. No solo traduces de un idioma a otro, sino del 'lenguaje experto' al 'lenguaje claro'. Tu trabajo es construir un puente para que el conocimiento cruce sin obstáculos y llegue a todos tus alumnos por igual.",
      steps: [
        { title: "Paso 1: Identifica el Texto y el Alumno", description: "Elige el texto que quieres adaptar y define claramente para qué nivel o tipo de alumno lo estás haciendo (ej. 'para un alumno de 6º grado con dislexia')." },
        { title: "Paso 2: Prepara el Prompt Mágico", description: "Copia el texto original y pégalo en la sección `[PEGAR TEXTO AQUÍ]` del prompt. Sé lo más específico posible sobre las necesidades del alumno." },
        { title: "Paso 3: Pega y Envía", description: "Pega el prompt completo en la IA y presiona 'Enter'. La IA analizará el texto y lo reescribirá." },
        { title: "Paso 4: Revisa la Adaptación", description: "Lee la versión adaptada. ¿Es realmente más fácil de entender? ¿Se ha perdido alguna idea importante? Si es necesario, puedes pedirle: 'Hazlo aún más simple' o 'Asegúrate de explicar la palabra [palabra complicada]'." },
        { title: "Paso 5: Comparte con Confianza", description: "Ahora tienes una versión del texto que puedes compartir con tus alumnos que necesitan apoyo, asegurándote de que nadie se queda atrás." }
      ]
    }
  },

  // --- Módulo 2: Creatividad en el Aula ---
  {
    slug: '2-1',
    title: "Cómo crear imágenes impactantes para tus presentaciones (ej. 'Un dinosaurio en Roma')",
    module: 'Módulo 2: Creatividad en el Aula: El Profesor Inspirador',
    prompt: `Actúa como un experto en diseño gráfico educativo. Genera una imagen en estilo ilustración digital para una presentación de primaria sobre el tema: 'Un tiranosaurio rex amigable de pie junto a una columna del Coliseo de Roma'. La imagen debe ser colorida, apropiada para niños, con un estilo artístico y educativo. La composición debe ser clara y centrada en el dinosaurio y el monumento.`,
    content: {
      whatYoullDo: "Aprenderás a crear imágenes únicas y personalizadas para tus presentaciones, lecciones o actividades, sin saber dibujar. Tus alumnos se sorprenderán y tu material será mucho más memorable.",
      analogy: "Piensa en los generadores de imágenes de IA como en un 'chef de arte digital'. Tú le das la receta (el 'prompt') y él cocina el plato (la imagen). Si no te gusta el resultado, pide cambios: 'hazlo más colorido', 'estilo cómic' hasta que esté perfecto. Tú eres el director artístico.",
      steps: [
        { title: "Paso 1: Define la Escena Central", description: "Sé específico. Define claramente el sujeto (dinosaurio), el lugar (Coliseo), el estilo (acuarela) y el público (niños). Cuantos más detalles, mejor será el resultado." },
        { title: "Paso 2: Escribe un Prompt Detallado", description: "Usa un lenguaje descriptivo. En lugar de 'dinosaurio en Roma', prueba: 'Un tiranosaurio rex amigable de pie junto a una columna del Coliseo de Roma, estilo ilustración digital para niños'." },
        { title: "Paso 3: Genera y Refina", description: "Pega el prompt en el generador de imágenes (como DALL-E 3 en ChatGPT Plus o Midjourney). Si no te gusta, pide cambios: 'hazlo más divertido', 'cambia el punto de vista'." },
        { title: "Paso 4: Descarga y Usa", description: "Guarda la imagen en alta calidad. ¡Ahora tienes un recurso visual único para tu clase que captará la imaginación de tus alumnos!" }
      ]
    }
  },
  {
    slug: '2-2',
    title: "Cómo generar ideas para un proyecto de clase (ej. Feria de Ciencias)",
    module: 'Módulo 2: Creatividad en el Aula: El Profesor Inspirador',
    prompt: `Actúa como un profesor de ciencias creativo e innovador. Dame 10 ideas originales y fáciles de hacer para una feria de ciencias de primaria. Las ideas deben usar materiales caseros, ser seguras y explicar un principio científico de forma sencilla. Clasifica las ideas por área: biología, química, física y tierra/espacio.`,
    content: {
      whatYoullDo: "Nunca más te quedarás sin ideas para proyectos. Aprenderás a usar la IA como un torbellino de creatividad para generar propuestas que puedas adaptar a tu nivel y recursos.",
      analogy: "La IA es como un compañero de lluvia de ideas. No te da la idea final y perfecta, sino una lluvia de semillas. Tu trabajo como profesor es elegir la semilla más prometedora, plantarla en el terreno de tu clase y cultivarla hasta que crezca en un proyecto fantástico.",
      steps: [
        { title: "Paso 1: Define el Contexto", description: "Sé claro sobre el tema, el nivel de los alumnos y los materiales disponibles (ej. 'feria de ciencias, 5º grado, materiales caseros')." },
        { title: "Paso 2: Pide Tormenta de Ideas", description: "Usa un prompt que pida cantidad y variedad. Pide que las ideas sean prácticas y que expliquen el 'porqué' del experimento." },
        { title: "Paso 3: Filtra y Adapta", description: "Revisa las 10 ideas. ¿Son seguras? ¿Son realistas? ¿Se adaptan a tu tiempo y a tu currículo? Descarta las que no sirven." },
        { title: "Paso 4: Planifica y Guía", description: "Elige la mejor idea y desglósala en pasos claros para tus alumnos. ¡Ahora tienes un proyecto listo para empezar!" }
      ]
    }
  },
  {
    slug: '2-3',
    title: "Cómo usar la IA para crear cuentos personalizados para tus alumnos",
    module: 'Módulo 2: Creatividad en el Aula: El Profesor Inspirador',
    prompt: `Escribe un cuento corto para niños de [GRADO] que incluya como personaje principal al alumno '[NOMBRE DEL ALUMNO]'. El cuento debe ser sobre [TEMA DEL CUENTO], debe tener una moraleja positiva y un lenguaje adecuado para su edad. El tono debe ser aventurero y divertido.`,
    content: {
      whatYoullDo: "Aprenderás a crear historias únicas que harán que tus alumnos se sientan los protagonistas de su propio aprendizaje. La personalización es la clave de la motivación.",
      analogy: "La IA es como un escritor fantasma que puede tomar cualquier idea y convertirla en una historia. Tú eres el director de la película, le das el personaje principal y el tema, y la IA se encarga de escribir el guion.",
      steps: [
        { title: "Paso 1: Conoce a tu Protagonista", description: "Usa el nombre y los gustos del alumno. ¿Le gustan los dinosaurios? ¿Le encanta el espacio? Eso será el alma del cuento." },
        { title: "Paso 2: Define la Moraleja", description: "¿Qué quieres que aprenda? La importancia de la amistad, el valor de la honestidad, el respeto por la naturaleza... El cuento debe girar en torno a esa enseñanza." },
        { title: "Paso 3: Dale Vida al Personaje", description: "No solo digas que el niño es valiente. Muéstralo en acción: 'María, con su mochila llena de piedras brillantes, se acercó con valentía al arroyo oscuro'." },
        { title: "Paso 4: Comparte y Disfruta", description: "Lee el cuento en voz alta en clase. Imprime una ilustración para acompañarlo. ¡Verás las caras de ilusión de tus alumnos!" }
      ]
    }
  },

  // --- Módulo 3: Comunicación Fácil ---
  {
    slug: '3-1',
    title: "Cómo redactar un email profesional y empático para padres de familia",
    module: 'Módulo 3: Comunicación Fácil: El Profesor Conectado',
    prompt: `Actúa como un experto en comunicación y psicología educativa. Ayúdame a redactar un email a los padres de '[NOMBRE DEL ALUMNO]'. El motivo del email es comunicarles sobre [ASUNTO: ej. su progreso en matemáticas]. El tono debe ser profesional, empático, colaborativo y centrado en soluciones. Estructura el email con: 1) un asunto claro, 2) un saludo cálido, 3) el punto principal (positivo o a mejorar), 4) una propuesta de colaboración y 5) un cierre cordial.`,
    content: {
      whatYoullDo: "Aprenderás a transformar conversaciones difíciles en colaboraciones productivas, construyendo una relación de confianza con las familias.",
      analogy: "Piensa en este email como un puente. Por un lado, están tus observaciones profesionales sobre el alumno. Por otro, están las esperanzas y preocupaciones de los padres. Tu email debe ser ese puente sólido y amable que conecta ambos lados.",
      steps: [
        { title: "Paso 1: Empieza por lo Positivo", description: "Siempre que sea posible, empieza con una buena noticia. 'Quería compartirles el gran progreso que ha hecho Ana en lectura esta semana'." },
        { title: "Paso 2: Sé Específico y Objetivo", description: "Describe el comportamiento, no al niño. En lugar de 'Juan es muy inquieto', di 'Juan ha tenido dificultad para permanecer sentado durante las actividades largas'." },
        { title: "Paso 3: Muestra Empatía", description: "Reconoce el sentimiento de los padres. 'Entiendo que esto pueda ser una preocupación. Quiero que sepan que estamos trabajando juntos en ello'." },
        { title: "Paso 4: Propón una Colaboración", description: "Invita a los padres a ser parte de la solución. 'Les agradecería si pudieran conversar con Juan en casa sobre la importancia de la concentración'." }
      ]
    }
  },
  {
    slug: '3-2',
    title: "Cómo resumir las notas de una reunión de profesores en 5 puntos clave",
    module: 'Módulo 3: Comunicación Fácil: El Profesor Conectado',
    prompt: `Tengo las siguientes notas de una reunión de profesores: '[PEGAR NOTAS AQUÍ]'. Por favor, resume esta información en 5 puntos clave claros y concisos. Cada punto debe ser una acción, una decisión o un tema importante. El resumen debe ser profesional y fácil de entender para que pueda compartirlo con el equipo o para mi propio registro.`,
    content: {
      whatYoullDo: "Aprenderás a sintetizar horas de conversación en minutos, captando lo esencial para que tú y tus compañeros tengan claro cuáles son los siguientes pasos.",
      analogy: "Las reuniones pueden ser como un río caudaloso de información. Tu trabajo es ser el ingeniero que construye una presa para controlar ese río, extrayendo solo la energía (los puntos clave) que necesita para mover los molinos (la acción).",
      steps: [
        { title: "Paso 1: Pega y Pide", description: "Copia el texto completo de tus notas y pégalo en la IA. Pide un resumen con el número de puntos que necesites." },
        { title: "Paso 2: Revisa la Acción", description: "Comprueba que cada punto clave sea una acción o decisión clara. 'Se acordó implementar un nuevo sistema de tutorías' es mejor que 'Se habló de tutorías'." },
        { title: "Paso 3: Limpia el Ruido", description: "La IA es excelente para eliminar conversaciones irrelevantes y centrarse en lo que de verdad importa. Descarta los puntos que no son cruciales." },
        { title: "Paso 4: Formatea y Comparte", description: "Organiza los puntos en una lista numerada o con viñetas para que sea fácil de leer. ¡Listo para enviar por email o para guardar en tu cuaderno!" }
      ]
    }
  }
];