import styles from './subscriptionList.module.scss';

import {UserSubscriptionsResponse} from "@/api/Users";
import SubscriptionListItem from "@/components/SubscriptionList/SubscriptionListItem/SubscriptionListItem";

type Props = {
    subscriptions: UserSubscriptionsResponse;
}

export default function SubscriptionList({ subscriptions }: Props) {

    return (
        <div className={styles['subscription-list']}>
            {
                subscriptions?.map((subscription) => (
                    <SubscriptionListItem key={subscription.id} subscription={subscription} />
                ))
            }
        </div>
    )
};