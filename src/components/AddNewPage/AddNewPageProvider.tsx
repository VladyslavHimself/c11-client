'use client';

import React, {PropsWithChildren} from "react";
const AddNewPageStateContext = React.createContext<null|AddNewPageStateContext>(null);
const AddNewPageActionsContext = React.createContext<null|AddNewPageActionsContext>(null);

type AddNewPageStateContext = {
    // currentStep: Step,
    // // TODO: Change null to expected data type later
    // uploadedImage: null
}

type AddNewPageActionsContext = {
    // nextStep: () => void,
    // previousStep: () => void,
    // setStep: (step: Step) => void
    // // TODO: Change null to expected data type later
    // setUploadedImage: React.Dispatch<React.SetStateAction<null>>
}

export default function AddNewPageProvider({ children }: PropsWithChildren) {

    return (
        <AddNewPageStateContext value={null}>
            <AddNewPageActionsContext value={null}>
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