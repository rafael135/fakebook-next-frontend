"use server"

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;


export function middleware(request: NextRequest) {

    const { pathname, origin } = request.nextUrl;

    const token = cookies().get("loggedUserToken");

    if(token == null || token.value == "") {
        return NextResponse.redirect(`${origin}/login`);
    }

    return NextResponse.next();

    //return NextResponse.next();
}

export const config = {
    matcher: ["/profile"]
}