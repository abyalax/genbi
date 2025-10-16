import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

const authPage = ["login"];

interface WithAuthType {
  middleware: NextMiddleware;
  requireAuth?: string[];
}

export default function withAuth({ middleware, requireAuth = [] }: WithAuthType) {
  return async (req: NextRequest, ev: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname.split("/")[1];
    console.log("Pathname:", pathname);

    const secret = process.env.NEXTAUTH_SECRET;
    if (!secret) {
      console.error("NEXTAUTH_SECRET is not defined.");
      return NextResponse.redirect(new URL("/login", req.url)); 
    }

    if (requireAuth.includes(pathname)) {
      console.log("Route requires authentication.");

      const token = await getToken({ req, secret });
      console.log("Token:", token);

      if (!token) {
        console.log("No token, redirecting to login.");
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("callbackUrl", req.url);
        return NextResponse.redirect(loginUrl);
      }

      if (authPage.includes(pathname)) {
        console.log("User already logged in, redirecting to home.");
        return NextResponse.redirect(new URL("/", req.url));
      }

      switch (token.role) {
        case "admin":
          return NextResponse.next();
        case "root":
          return NextResponse.next();
        default:
          return NextResponse.redirect(new URL("/", req.url));
      }

    }

    console.log("Route does not require authentication.");
    return middleware(req, ev);
  };
}
