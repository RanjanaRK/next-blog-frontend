import { NextRequest, NextResponse } from "next/server";
import { decryptSession } from "./lib/session";

const protectedRoutes = ["/profile", "/auth/change-password", "/"];
const publicRoutes = ["/auth"];

const proxy = async (req: NextRequest) => {
  const path = req.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // Get cookie from the Incoming Request (middleware allowed)
  const cookie = req.cookies.get("session")?.value;

  // Decrypt cookie
  const session = await decryptSession(cookie);

  // If user is not logged in → redirect to /auth
  if (isProtectedRoute && !session?.jwt) {
    return NextResponse.redirect(new URL("/auth", req.nextUrl));
  }

  // If user is logged in → redirect away from login page
  if (isPublicRoute && session?.jwt) {
    return NextResponse.redirect(new URL("/profile", req.nextUrl));
  }

  return NextResponse.next();
};

export default proxy;

export const config = {
  matcher: ["/profile", "/"],
};
