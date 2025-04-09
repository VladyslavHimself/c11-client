import styles from './addNewPageActionButton.module.scss';
import {Button} from "@/components/ui/button";
type Props = {
    onClick: () => void
    isDisabled: boolean
};

export default function AddNewPageActionButton({ onClick, isDisabled}: Props) {
    return (
        <div className={styles['add-new-page-action-button']}>
            <Button disabled={isDisabled} onClick={onClick} variant="accent" >Next</Button>
        </div>
    );
};