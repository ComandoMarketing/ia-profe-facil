import { createClient } from '@supabase/supabase-js'

// Estas variables de entorno están en tu archivo .env.local
// Next.js las carga automáticamente aquí.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Creamos y exportamos el cliente de Supabase.
// Lo haremos así para tener una única instancia en toda la app.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)