import {WallpaperResponse} from "@/api/Images";
import {useDeleteImageMutation} from "@/hooks/useDeleteImageMutation";
import {TrashIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

type Props = {
    wallpaperMetadata: WallpaperResponse;
};

export default function DeleteImageButton({ wallpaperMetadata }: Props) {
    const { deleteImage } = useDeleteImageMutation();
    const { id } = wallpaperMetadata;

    return (
        <Button onClick={e => {
            e.stopPropagation();
            console.log('deleted wallpaper')
            deleteImage(id);
        }}>
            <TrashIcon style={{ color: "red" }} />
        </Button>
    );
};