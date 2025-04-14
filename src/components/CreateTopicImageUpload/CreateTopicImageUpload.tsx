'use client';

import React from "react";
import styles from './createTopicImageUpload.module.scss';
import {useDropzone} from "react-dropzone";
import UploadIcon from "../../../public/UploadIcon";

const dragBehaviourMap = {
    isDragActive: 'drag-active',
    isDragReject: 'drag-reject',
    isDragAccept: 'drag-accept'
}


export default function CreateTopicImageUpload({ setImage }: { setImage: React.Dispatch<React.SetStateAction<File>> }) {
    // TODO: Remove code duplication when main tasks are done
    const [uploadedPreviewImage, setUploadedPreviewImage] = React.useState();
    const onDropFile = React.useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];

        if (file && file.type.startsWith("image/")) {
            setImage(file);
            setUploadedPreviewImage(URL.createObjectURL(file));
        }
    }, [setImage]);

    const { getRootProps, getInputProps, isDragActive, isDragReject, isDragAccept,} = useDropzone({
        onDrop: onDropFile,
        accept: {
            "image/*": [],
        },
        multiple: false,
    });

    const dragBehaviourState = React.useMemo(() => {
        const dropzoneStates = { isDragActive, isDragReject, isDragAccept };
        type DragStateKey = keyof typeof dropzoneStates;
        for (const key of Object.keys(dropzoneStates) as DragStateKey[]) {
            if (dropzoneStates[key]) return dragBehaviourMap[key as DragStateKey];
        }
        return null;
    }, [isDragActive, isDragReject, isDragAccept]);

    return (
        <div data-drop-state={dragBehaviourState} {...getRootProps()} className={styles['create-topic-image-upload']}>
            <input {...getInputProps()} />
            {
                !uploadedPreviewImage && (
                    <div className={styles['create-topic-image-upload-tile']}>
                        <UploadIcon />
                        <div className={styles['create-topic-image-upload-heading']}>
                            Upload topic image
                        </div>

                        {
                            isDragReject && !isDragActive && (
                                <div>
                                    This should be an image
                                </div>
                            )
                        }
                    </div>
                )

            }
            {uploadedPreviewImage && (
                <div className={styles['create-topic-image-preview']}>
                    <img src={uploadedPreviewImage} alt="" />
                </div>
            )}
        </div>
    );
};