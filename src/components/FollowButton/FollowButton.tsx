import styles from './followButton.module.scss';
import {Button} from "@/components/ui/button";
import UnfollowIcon from "../../../public/UnfollowIcon";
import FollowIcon from "../../../public/FollowIcon";
import React from "react";

type ButtonValue = "Follow" | "Unfollow";

type Props = {
    onClickHandler: () => void,
    isFollowing: boolean,
}

export default function FollowButton({ onClickHandler, isFollowing }: Props) {
    const buttonValue: ButtonValue = isFollowing ? "Unfollow" : "Follow";
    const ButtonIcon = isFollowing ? UnfollowIcon : FollowIcon;

    return (
        <Button
            variant="accent"
            className={`${styles['follow-button']} ${isFollowing && styles['follow-button--is-following'] || ''}`}
            onClick={onClickHandler}
        ><ButtonIcon />{buttonValue}</Button>
    );
};