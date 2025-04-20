import {api} from "@/api";

export type UserFollowReaction = 'FOLLOW' | 'UNFOLLOW';

export type SubscriptionUserMetadata = {
    id: string
    name: string
    surname: string
    pictureURL?: string
    images: number
}

export type UserResponse = {
    id: string,
    email: string,
    name: string,
    surname: string,
    pictureUrl: string,
    authProvider: 'INTERNAL' | 'GOOGLE',
    authProviderId: string,
    createdAt: string,
    updatedAt: string,
}

export type UserSubscriptionsResponse = SubscriptionUserMetadata[];



export const UsersAPI = {
    getUser(): Promise<UserResponse> {
        return api.get("/api/v1/users/profile").then(({ data }: { data: UserResponse}) => data).catch(err => {
            if (err.status === 401) return null;
            return err;
        });
    },

    getUserSubscriptions(): Promise<UserSubscriptionsResponse> {
        return api.get("/api/v1/users/subscriptions").then(({ data }: { data: UserSubscriptionsResponse}) => data).catch(err => {
            if (err.status === 401) return null;
            return err;
        });
    },

    setUserReaction(targetUserId: string, reaction: UserFollowReaction) {
        return api.post(`/api/v1/users/${targetUserId}/reaction`, { reaction: reaction }).then(({ data }: { data: UserResponse}) => data).catch(err => {
            if (err.status === 401) return null;
            return err;
        });
    },

    findUserById(userId: string) {
        return api.get(`/api/v1/users/${userId}`).then(({ data }: { data: UserResponse}) => data).catch(err => {
            if (err.status === 401) return null;
            return err;
        });
    }
}