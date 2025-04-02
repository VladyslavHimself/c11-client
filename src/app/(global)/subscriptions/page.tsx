import styles from '@/styles/subscriptions-page.module.scss';
import {Heading} from "@/components/ui/Heading/Heading";
import SubscriptionList from "@/components/SubscriptionList/SubscriptionList";
import {UsersAPI} from "@/api/Users";


export default async function SubscriptionsPage() {
    const subscriptions = await UsersAPI.getUserSubscriptions();

    return (
        <div className={styles['subscriptions-page']}>
            <div className={styles['subscriptions-page-content-wrapper']}>
                <Heading title="Your subscriptions" />
                <SubscriptionList subscriptions={subscriptions} />
            </div>
        </div>
    );
};