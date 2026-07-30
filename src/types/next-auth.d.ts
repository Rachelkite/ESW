declare module "@auth/core/types" {
  interface User {
    role?: string;
  }

  interface Session {
    user?: {
      id?: string;
      role?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
