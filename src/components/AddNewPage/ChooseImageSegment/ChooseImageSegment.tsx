import styles from './chooseImageSegment.module.scss';
import {UploadImageFrame} from "@/components/AddNewPage/ChooseImageSegment/UploadImageFrame/UploadImageFrame";
import {useAddNewPageActions, useAddNewPageStates} from "@/components/AddNewPage/AddNewPageProvider";
import AddNewPageActionButton from "@/components/AddNewPage/AddNewPageActionButton/AddNewPageActionButton";
import React from "react";

export default function ChooseImageSegment() {
    const { uploadedImage } = useAddNewPageStates();
    const { nextStep, setUploadedImage } = useAddNewPageActions();

    return (
        <div className={styles['choose-image-segment']}>
            <UploadImageFrame uploadedImage={uploadedImage} setUploadedImage={setUploadedImage}/>
            <div className={styles['choose-image-segment-button']}>
                <AddNewPageActionButton onClick={nextStep} isDisabled={!uploadedImage} />
            </div>
        </div>
    );
};