import { TOKEN_NAME } from "@/assets/enums";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function hideLogin(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(TOKEN_NAME);

  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}
