import {NextRequest, NextResponse} from "next/server";
import {TopicsAPI} from "@/api/Topics";

type ApiParams = {
    topicId: string;
}

export async function DELETE(req: NextRequest, { params }: { params: ApiParams }) {
    try {
        await TopicsAPI.deleteTopic(params.topicId);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
    }
}