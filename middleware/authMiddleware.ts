// middleware/auth.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import navLinks, { INavLink } from "@/assets/navigation_links";

const routes: INavLink[] = navLinks;

export function authMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("charity_system_token");

  // NO TOKEN
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const decodedToken = jwt.decode(token.value) as IJwtToken;
    const userRoles = decodedToken.roles;

    // DECODE FAILURE
    if (!decodedToken || !userRoles) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const requestedRoute = findLongestMatchingRoute(pathname);

    // NO ROUTE => 404
    if (!requestedRoute) {
      return NextResponse.redirect(new URL("/404", request.url));
    }

    const requiredRoles: string[] = requestedRoute.roles;
    const isAuthorized = requiredRoles.some((role) => userRoles.includes(role));

    // NOT AUTHORIZED
    if (!isAuthorized) {
      return NextResponse.redirect(new URL("/403", request.url));
    }
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // AUTHORIZED
  return NextResponse.next();
}

// Function to find the longest matching route
const findLongestMatchingRoute = (path: string) => {
  const matchingRoutes = routes.filter((route) => path.startsWith(route.href));
  if (matchingRoutes.length === 0) return undefined;
  return matchingRoutes.reduce((a, b) => (a.href.length > b.href.length ? a : b));
};
