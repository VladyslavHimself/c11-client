import {NextRequest, NextResponse} from "next/server";
import {TopicsAPI} from "@/api/Topics";

export async function GET(req: NextRequest) {
    const topicPrompt = req.nextUrl.searchParams.get("topic");
    try {
        const data = await TopicsAPI.searchTopics(topicPrompt as string).then(data => data);
        return NextResponse.json({ success: true, ...data });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
    }
}