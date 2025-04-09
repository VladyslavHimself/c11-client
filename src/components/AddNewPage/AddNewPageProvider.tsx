'use client';

import React, {PropsWithChildren} from "react";
import {MAX_STEPS, Steps} from "@/components/AddNewPage/addNewPage.constants";
import {Step} from "@/components/AddNewPage/addNewPage.types";

const AddNewPageStateContext = React.createContext<null|AddNewPageStateContext>(null);
const AddNewPageActionsContext = React.createContext<null|AddNewPageActionsContext>(null);

type AddNewPageStateContext = {
    currentStep: Step,
    // TODO: Change null to expected data type later
    uploadedImage: null
}

type AddNewPageActionsContext = {
    nextStep: () => void,
    previousStep: () => void,
    setStep: (step: Step) => void
    // TODO: Change null to expected data type later
    setUploadedImage: React.Dispatch<React.SetStateAction<null>>
}

export default function AddNewPageProvider({ children }: PropsWithChildren) {

    const [currentStep, setCurrentStep] = React.useState<Step>(Steps.CHOOSE_IMAGE);
    const [uploadedImage, setUploadedImage] = React.useState(null);

    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, MAX_STEPS - 1) as Step);
    };

    const previousStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0) as Step);
    };

    const setStep = (step: Step) => {
        setCurrentStep(step);
    }

    return (
        <AddNewPageStateContext value={{ currentStep, uploadedImage}}>
            <AddNewPageActionsContext value={{ nextStep, previousStep, setStep, setUploadedImage }}>
                { children }
            </AddNewPageActionsContext>
        </AddNewPageStateContext>
    );
};


export function useAddNewPageActions() {
    const context = React.useContext(AddNewPageActionsContext);
    if (!context) {
        throw new Error('useAddNewPageActions must be used within AddNewPageProvider');
    }
    return context;
}

export function useAddNewPageStates() {
    const context = React.useContext(AddNewPageStateContext);
    if (!context) {
        throw new Error('useAddNewPageStates must be used within AddNewPageProvider');
    }

    return context;
}