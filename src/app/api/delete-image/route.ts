import {ImagesAPI} from "@/api/Images";
import {NextResponse} from "next/server";


export async function DELETE(req: Request): Promise<void> {
    try {
        const { imageId } = await req.json();
        await ImagesAPI.deleteImage(imageId);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
    }
}