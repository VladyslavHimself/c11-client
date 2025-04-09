'use client';
import React from "react"
import styles from '@/styles/add-new-page.module.scss';
import Stepper from "@/components/Stepper/Stepper";
import { useAddNewPageActions, useAddNewPageStates } from "@/components/AddNewPage/AddNewPageProvider";
import { stepsInfo } from "@/components/AddNewPage/addNewPage.constants";
import {Button} from "@/components/ui/button";

export default function AddNewPage() {
    const { currentStep } = useAddNewPageStates();
    const { nextStep, previousStep } = useAddNewPageActions();

    return (
            <div className={styles['add-new-page']}>
                <div className={styles['add-new-page-content-wrapper']}>
                    <Stepper currentStep={currentStep} steps={stepsInfo} />

                    {stepsInfo[currentStep].component}

                    <Button onClick={previousStep}>Prev</Button>
                    <Button onClick={nextStep}>Next</Button>
                </div>
            </div>
    );
};