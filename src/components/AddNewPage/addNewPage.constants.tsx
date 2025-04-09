import ChooseImageSegment from "@/components/AddNewPage/ChooseImageSegment/ChooseImageSegment";
import ChooseTopicSegment from "@/components/AddNewPage/ChooseTopicSegment/ChooseTopicSegment";
import ChooseTagsSegment from "./ChooseTagsSegment/ChooseTagsSegment";
import PublishSegment from "@/components/AddNewPage/PublishSegment/PublishSegment";
import React from "react";
import { StepsInfoType } from "@/components/AddNewPage/addNewPage.types";

export const Steps = {
    CHOOSE_IMAGE: 0,
    CHOOSE_TOPIC: 1,
    ADD_TAGS: 2,
    PUBLISH: 3,
} as const;

export const MAX_STEPS = Object.keys(Steps).length;

export const stepsInfo: StepsInfoType = {
    [Steps.CHOOSE_IMAGE]: {
        title: 'Choose image',
        component: <ChooseImageSegment />,
    },
    [Steps.CHOOSE_TOPIC]: {
        title: 'Choose topic',
        component: <ChooseTopicSegment />,
    },
    [Steps.ADD_TAGS]: {
        title: 'Add tags',
        component: <ChooseTagsSegment />
    },
    [Steps.PUBLISH]: {
        title: 'Publish tags',
        component: <PublishSegment />,
    }
};