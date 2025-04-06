import {api} from "@/api";

export const POPULAR_TOPICS_COUNT = 20;
// TODO: Move types into separate file
type TopicImage = {
    id: string
    url: string
    heightList: number[]
    placeholder: string
}

export type TopicResponseBody = {
    id: string
    name: string
    image: TopicImage
    images: number
}
// TODO: Check similarities with UserData.
type TopicAuthor = {
    id: string
    name: string
    surname: string
    email: string
    pictureURL: string
    authProvider: string
    authProviderId: string,
    createdAt: string
    updatedAt: string
}

// TODO: Create commmon types and move entities like "createdAt", "updatedAt" into them
type FoundTopicResponse = {
    id: string
    name: string
    image: TopicImage,
    author: TopicAuthor
    createdAt: string,
    updatedAt: string,
}

export const TopicsAPI = {
    getPopularTopics(count: number): Promise<TopicResponseBody[]> {
        return api.get(`/api/v1/topics/popular`, { params: count ? { count } : undefined, })
            .then(({ data }: { data: TopicResponseBody[] }) => data).catch(err => {
            if (err.status === 401) return null;
            return err;
        })
    },

    getTopicById(topicId: string): Promise<FoundTopicResponse> {
        return api.get(`/api/v1/topics/${topicId}`).then(({ data }: { data: TopicResponseBody[] }) => data).catch(err => {
            if (err.status === 401) return null;
            return err;
        })
    }
}