'use client';

import { signIn } from "next-auth/react"; // <-- Volvemos al idioma de next-auth

export default function LoginPage() {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  const handleMicrosoftSignIn = () => {
    signIn("microsoft", { callbackUrl: "/dashboard" });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <div className="w-full max-w-md text-center">
        
        <h1 className="text-4xl font-bold text-blue-600 mb-2">IA-Profe Fácil</h1>
        <p className="text-lg text-gray-600 mb-8">Inicia sesión para comenzar a aprender</p>

        <div className="space-y-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Iniciar con Google
          </button>

          <button
            onClick={handleMicrosoftSignIn}
            className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#00A4EF" d="M11.4 10.7c-.2 0-.4 0-.5.1l-4.3 2.5v4.9l4.3 2.5c.2.1.4.1.5 0l4.3-2.5v-4.9l-4.3-2.5zM12 1L3 5.8v12.3L12 23l9-4.8V5.8L12 1zm0 2.2l6.9 3.7v7.4L12 18l-6.9-3.7V6.9L12 3.2z"/>
            </svg>
            Iniciar con Microsoft
          </button>
        </div>

        <p className="mt-8 text-xs text-gray-500">
          Al iniciar sesión, aceptas nuestros términos y condiciones.
        </p>
      </div>
    </main>
  );
}