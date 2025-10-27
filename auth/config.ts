import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { supabase } from "@/lib/supabase"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  events: {
    async signIn({ user }) {
      if (!user.email) return;

      const { data } = await supabase
        .from('users')
        .select('id')
        .eq('id', user.id)
        .single();

      if (!data) {
        await supabase.from('users').insert({
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        });
      }
    },
  },
  pages: {
    signIn: '/login',
  },
}