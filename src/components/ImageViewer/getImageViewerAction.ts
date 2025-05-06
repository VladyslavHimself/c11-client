import {ImagesAPI} from "@/api/Images";
import {TopicsAPI} from "@/api/Topics";

export default async function getImageViewerAction(wallpaperId: string) {
    const wallpaper = await ImagesAPI.getImageById(wallpaperId);
    const topic = await TopicsAPI.getTopicById(wallpaper.topicId);

    const queryWithoutCurrent = `"${topic.id}" -"${wallpaper.id}"`;
    const { hits: topicRelatedWallpapers } = await ImagesAPI.searchImages(3, queryWithoutCurrent);

    return { wallpaper, topic, topicRelatedWallpapers };
};
