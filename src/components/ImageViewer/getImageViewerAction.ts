import {ImagesAPI} from "@/api/Images";
import {TopicsAPI} from "@/api/Topics";

export default async function getImageViewerAction(wallpaperId: string) {
    const wallpaper = await ImagesAPI.getImageById(wallpaperId);
    const topic = await TopicsAPI.getTopicById(wallpaper.topicId);

    const topicRelatedWallpapers = await ImagesAPI.searchImages(4, `"${wallpaper.topicId}"`)
        .then(({ hits }) =>
            hits.filter(image => image.id !== wallpaperId))

    return { wallpaper, topic, topicRelatedWallpapers };
};