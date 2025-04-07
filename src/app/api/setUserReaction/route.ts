import { ImagesAPI } from "@/api/Images";
import { NextResponse } from "next/server";

// TODO: GET TO KNOW ABOUT TO MOVE ALL src/api dir inside app/api

export async function POST(req: Request) {
    try {
        const { imageId, reaction } = await req.json();
        const response = await ImagesAPI.setUserReactionToImage(imageId, reaction);

        return NextResponse.json({ success: true, data: response.data });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
    }
}