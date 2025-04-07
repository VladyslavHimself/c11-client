
import { NextResponse } from "next/server";
import {UsersAPI} from "@/api/Users";

// TODO: GET TO KNOW ABOUT TO MOVE ALL src/api dir inside app/api

export async function POST(req: Request) {
    try {
        const { targetUserId, reaction } = await req.json();
        const response = await UsersAPI.setUserReaction(targetUserId, reaction);

        return NextResponse.json({ success: true, data: response.data });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
    }
}