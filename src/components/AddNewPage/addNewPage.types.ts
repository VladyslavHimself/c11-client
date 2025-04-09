import React from "react";
import {Steps} from "@/components/AddNewPage/addNewPage.constants";

type Steps = typeof Steps[keyof typeof Steps];

type StepInfo = {
    title: string;
    component: React.JSX.Element;
};
export type StepsInfoType = { [key in Steps]: StepInfo; };

export type Step = typeof Steps[keyof typeof Steps];