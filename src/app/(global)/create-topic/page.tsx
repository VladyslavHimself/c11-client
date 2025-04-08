'use client';

import styles from '@/styles/create-topic-page.module.scss'
import {Heading} from "@/components/ui/Heading/Heading";
import CreateTopicImageUpload from "@/components/CreateTopicImageUpload/CreateTopicImageUpload";
import useInput from "@/components/HeaderSearchbar/useInput";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import * as React from "react";
import useCreateNewTopicMutation from "@/hooks/useCreateNewTopicMutation";

export default function CreateTopicPage() {
    const topicNameInput = useInput('');
    const { createNewTopic } = useCreateNewTopicMutation(() => {
        topicNameInput.clearValue();
    });

    return (
        <div className={styles['create-topic-page']}>
            <div className={styles['create-topic-page-wrapper']}>
                <Heading title="Create new topic" />
                <div className={styles['create-topic-page-upload-info']}>
                    <CreateTopicImageUpload />
                    <div className={styles['create-topic-page-upload-info-metadata']}>
                        <Input {...topicNameInput} placeholder="Topic name" />
                        <Button onClick={() => createNewTopic({ name: topicNameInput.value!})} variant="accent" >Publish</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};