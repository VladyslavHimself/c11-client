import {NextRequest, NextResponse} from "next/server";
import {TagsApi} from "@/api/Tags";

export async function GET(req: NextRequest) {
    const tagPrompt = req.nextUrl.searchParams.get("tag");

    try {
        const data = await TagsApi.searchTags(tagPrompt as string).then(data => data);

        return NextResponse.json({ success: true, ...data });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
    }
}