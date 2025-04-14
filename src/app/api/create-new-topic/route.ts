import {NextResponse} from "next/server";
import {TopicsAPI} from "@/api/Topics";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const response = await TopicsAPI.createNewTopic(formData)

        // TODO: In other proxy api endpoints check if response includes data key accessor
        return NextResponse.json({ success: true, data: response });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
    }
}