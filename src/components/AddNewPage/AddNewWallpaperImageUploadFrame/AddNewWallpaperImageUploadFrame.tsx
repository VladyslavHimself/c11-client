'use client';

import styles from './addNewWallpaperImageUploadFrame.module.scss';
import React from "react";
import {useDropzone} from "react-dropzone";
import { useAddNewPageActions } from "@/components/AddNewPage/AddNewPageProvider";
import UploadIcon from "../../../../public/UploadIcon";


// TODO: Remove duplicated code fragment related to drag-n-drop
const dragBehaviourMap = {
    isDragActive: 'drag-active',
    isDragReject: 'drag-reject',
    isDragAccept: 'drag-accept'
}

export default function AddNewWallpaperImageUploadFrame() {
    const { setSelectedImage } = useAddNewPageActions();
    const [uploadedPreviewImage, setUploadedPreviewImage] = React.useState();
    const onDropFile = React.useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];

        if (file && file.type.startsWith("image/")) {
            setSelectedImage(file);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setUploadedPreviewImage(URL.createObjectURL(file));
        }
    }, [setSelectedImage]);

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
    }, [isDragActive, isDragReject, isDragAccept])

    return (
        <div data-drop-state={dragBehaviourState} {...getRootProps()} className={styles['add-new-wallpaper-image-upload-frame']}>
            <input {...getInputProps()} />
            {
                !uploadedPreviewImage && (
                    <div className={styles['add-new-wallpaper-image-upload-frame-tile']}>
                        <UploadIcon />
                        <div className={styles['add-new-wallpaper-image-upload-heading']}>
                            Upload Image
                        </div>

                        {
                            isDragReject && !isDragActive && (
                                <div>
                                    Error while uploading image
                                </div>
                            )
                        }
                    </div>
                )
            }

            {
                uploadedPreviewImage && (
                    <div className={styles['create-tag-image-preview']}>
                        <img src={uploadedPreviewImage} alt="" />
                    </div>
                )
            }

        </div>
    );
};