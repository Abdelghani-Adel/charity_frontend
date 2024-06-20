// middleware/auth.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const protectedRoutes = {
  "/dashboard": ["admin", "user"],
  "/profile": ["user"],
};

export function authMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request is for a protected route
  if (Object.keys(protectedRoutes).some((route) => pathname.startsWith(route))) {
    const token = request.cookies.get("charity_system_token");

    // If token is not present, redirect to login
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      // Decode the token without verifying it
      const decodedToken = jwt.decode(token.value);

      // If decoding fails, redirect to login
      if (!decodedToken) {
        return NextResponse.redirect(new URL("/login", request.url));
      }

      // Get the required roles for the route
      const requiredRoles = Object.keys(protectedRoutes).find((route) =>
        pathname.startsWith(route)
      );

      const isAuthorized = protectedRoutes[requiredRoles].includes(decodedToken.role);

      if (requiredRoles && !isAuthorized) {
        // If the user's role is not authorized, redirect to forbidden page
        return NextResponse.redirect(new URL("/forbidden", request.url));
      }
    } catch (error) {
      // If any error occurs during decoding, redirect to login
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}
