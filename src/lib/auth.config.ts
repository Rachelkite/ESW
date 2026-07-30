import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/portal/login",
  },
  providers: [],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.role = (user as { role?: string }).role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        const user = session.user as { id?: string; role?: string };
        user.role = token.role as string | undefined;
        user.id = token.sub;
      }
      return session;
    },
  },
};
