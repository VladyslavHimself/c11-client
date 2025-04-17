'use client';

import styles from '@/styles/create-topic-page.module.scss'
import {Heading} from "@/components/ui/Heading/Heading";
import CreateTopicImageUpload from "@/components/CreateTopicImageUpload/CreateTopicImageUpload";
import useInput from "@/hooks/useInput";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import * as React from "react";
import useCreateNewTopicMutation from "@/apiHooks/useCreateNewTopicMutation";

export default function CreateTopicPage() {
    const {inputInnerProps, clearValue } = useInput('');
    const { createNewTopic } = useCreateNewTopicMutation(() => {
        clearValue();
    });
    const [imageFile, setImageFile] = React.useState<File|null>(null);

    return (
        <div className={styles['create-topic-page']}>
            <div className={styles['create-topic-page-wrapper']}>
                <Heading title="Create new topic" />
                <div className={styles['create-topic-page-upload-info']}>
                    <CreateTopicImageUpload setImage={setImageFile} />
                    <div className={styles['create-topic-page-upload-info-metadata']}>
                        <Input {...inputInnerProps} placeholder="Topic name" />
                        <Button onClick={() => createNewTopic(imageFile, inputInnerProps.value)} variant="accent" >Publish</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};