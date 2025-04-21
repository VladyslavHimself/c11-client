import styles from './subscriptionListItem.module.scss';

import {SubscriptionUserMetadata} from "@/api/Users";
import UserIcon from "../../../../public/UserIcon";
import FollowButton from "@/components/FollowButton/FollowButton";

type Props = {
    subscription: SubscriptionUserMetadata;
};

export default function SubscriptionListItem({ subscription }: Props) {
    const { images, name, surname } = subscription;

    return (
        <div className={styles['subscription-list-item']}>
            <div className={styles['subscription-list-item-user-info']}>
                <div className={styles['subscription-list-item-user-info-avatar']}>
                    <UserIcon />
                </div>

                <div className={styles['subscription-list-item-user-info-metadata']}>
                    <div className={styles['subscription-list-item-user-info-initials']}>
                        {[name, surname].join(' ')}
                    </div>
                    <div className={styles['subscription-list-item-user-info-post-publications-count']}>
                        {images} posts
                    </div>
                </div>
            </div>

            <FollowButton isFollowing subscription={subscription} />
        </div>
    );
};