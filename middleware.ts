import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // Si el usuario está autenticado, lo dejamos pasar
    if (req.nextauth.token) {
      return NextResponse.next()
    }

    // Si no está autenticado, lo redirigimos a la página de login
    // pero guardamos la URL a la que quería ir para redirigirlo después del login
    const loginUrl = new URL("/login", req.url)
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Solo si hay un token (JWT) está autorizado
    },
  }
)

// Aquí definimos qué rutas debe proteger este guardia
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/modulos/:path*",
    "/lecciones/:path*",
    "/caja-de-herramientas/:path*",
    "/perfil/:path*"
  ]
}