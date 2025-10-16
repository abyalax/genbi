import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import withAuth from "./middlewares/auth";

console.log("Middleware file loaded!");

const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  console.log("Middleware running");
  console.log("Middleware triggered for:", req.nextUrl.pathname);
  return NextResponse.next();
};

const withAuthMiddleware = withAuth({
  middleware,
  requireAuth: ["admin"],
});

export const config = {
  matcher: ["/admin/:path*", "/admin"],
};

export default withAuthMiddleware;