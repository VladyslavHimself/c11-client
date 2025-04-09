'use client';
import React from "react"
import styles from '@/styles/add-new-page.module.scss';
import Stepper from "@/components/Stepper/Stepper";
import { useAddNewPageStates } from "@/components/AddNewPage/AddNewPageProvider";
import {Steps, stepsInfo} from "@/components/AddNewPage/addNewPage.constants";
export default function AddNewPage() {
    const { currentStep } = useAddNewPageStates();

    return (
            <div className={styles['add-new-page']}>
                <div className={styles['add-new-page-content-wrapper']}>
                    { currentStep !== Steps.PUBLISH && <Stepper currentStep={currentStep} steps={stepsInfo} /> }
                    {stepsInfo[currentStep].component}
                </div>
            </div>
    );
};