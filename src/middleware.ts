import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    if (request.url.includes('/projects')) {
        if (request.cookies.get('sessionId') === undefined) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
    if (request.url.includes('/login') || request.url.includes('/register')) {
        if (request.cookies.get('sessionId') !== undefined) {
            return NextResponse.redirect(new URL('/projects', request.url));
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: "/((?!.*\\.).*)",
}