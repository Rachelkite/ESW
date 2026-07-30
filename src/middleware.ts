import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "@/lib/auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoginPage = req.nextUrl.pathname === "/portal/login";
  const isLoggedIn = !!req.auth;

  if (!isLoggedIn && !isLoginPage) {
    const loginUrl = new URL("/portal/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }

  if (isLoggedIn && isLoginPage) {
    return NextResponse.redirect(new URL("/portal/dashboard", req.nextUrl.origin));
  }
});

export const config = {
  matcher: ["/portal/:path*"],
};
