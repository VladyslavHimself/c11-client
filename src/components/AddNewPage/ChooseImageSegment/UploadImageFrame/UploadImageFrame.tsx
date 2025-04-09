import styles from './uploadImageFrame.module.scss';
import UploadIcon from "@/../public/UploadIcon";
import React from "react";
import {useDropzone} from "react-dropzone";

type Props = {
    uploadedImage: null,
    setUploadedImage: () => null,
};

const dragBehaviourMap = {
    isDragActive: 'drag-active',
    isDragReject: 'drag-reject',
    isDragAccept: 'drag-accept'
}

export function UploadImageFrame({ uploadedImage, setUploadedImage }: Props) {
    // TODO: Remove code duplication when main tasks are done
    const onDropFile = React.useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file && file.type.startsWith("image/")) {
            setUploadedImage(URL.createObjectURL(file));
        }
    }, [setUploadedImage]);

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
        <div data-drop-state={dragBehaviourState} {...getRootProps()} className={styles['upload-image-frame']}>
            <input {...getInputProps()} />
            {
                !uploadedImage && (
                    <>
                        <UploadIcon />
                        <div className={styles['upload-image-frame-title']}>
                            Choose image or drag & drop it here.
                        </div>
                    </>
                )
            }

            {
                uploadedImage && (
                    <div className={styles['create-topic-image-preview']}>
                        <img src={uploadedImage} alt="" />
                    </div>
                )
            }
        </div>
    );
}