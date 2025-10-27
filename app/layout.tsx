import type { Metadata } from 'next'
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import { ToolboxProvider } from "../contexts/ToolboxContext" // <-- IMPORTAMOS EL PROVIDER

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "IA-Profe Fácil",
  description: "La guía paso a paso para profesores que quieren ahorrar tiempo e inspirar a sus alumnos.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToolboxProvider> {/* <-- ENVOLVEMOS LA APLICACIÓN */}
          <Navbar />
          {children}
        </ToolboxProvider>
      </body>
    </html>
  )
}