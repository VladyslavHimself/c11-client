import {NextResponse} from "next/server";
import {ImagesAPI} from "@/api/Images";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const response = await ImagesAPI.uploadImage(formData)

        // TODO: In other proxy api endpoints check if response includes data key accessor
        return NextResponse.json({ success: true, data: response });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
    }
}