'use client';

import React from "react";
import styles from './followButton.module.scss';
import {Button} from "@/components/ui/button";
import UnfollowIcon from "../../../public/UnfollowIcon";
import FollowIcon from "../../../public/FollowIcon";
import {SubscriptionUserMetadata} from "@/api/Users";
import useUserFollowReactionMutation from "@/hooks/useUserFollowReactionMutation";

type ButtonValue = "Follow" | "Unfollow";

type Props = {
    isFollowing: boolean,
    subscription: SubscriptionUserMetadata
}

export default function FollowButton({ isFollowing, subscription }: Props) {
    const buttonValue: ButtonValue = isFollowing ? "Unfollow" : "Follow";
    const ButtonIcon = isFollowing ? UnfollowIcon : FollowIcon;
    const { setUserFollowReaction } = useUserFollowReactionMutation();


    return (
        <Button
            variant="accent"
            className={`${styles['follow-button']} ${isFollowing && styles['follow-button--is-following'] || ''}`}
            onClick={() => setUserFollowReaction(subscription.id, 'UNFOLLOW')}
        ><ButtonIcon />{buttonValue}</Button>
    );
};