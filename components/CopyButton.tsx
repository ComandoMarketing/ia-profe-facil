'use client';

import { useState, useEffect } from 'react';

// ESTA ES LA LÍNEA CLAVE. EXPORTAMOS EL COMPONENTE CON UN NOMBRE.
export const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      console.error('Error al copiar el texto: ', err);
    }
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <button
      onClick={handleCopy}
      className={`font-bold py-2 px-4 rounded text-sm transition-colors duration-300 ${
        isCopied
          ? 'bg-green-600 hover:bg-green-700 text-white'
          : 'bg-gray-800 hover:bg-gray-700 text-white'
      }`}
    >
      {isCopied ? '¡Copiado!' : 'Copiar'}
    </button>
  );
};