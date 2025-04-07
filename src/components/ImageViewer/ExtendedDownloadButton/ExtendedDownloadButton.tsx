'use client';

import DownloadIcon from "../../../../public/DownloadIcon";
import {Button} from "@/components/ui/button";
import {saveAs} from "file-saver";

type Props = {
    link: string,
    filename: string,
};

export default function ExtendedDownloadButton({ link, filename }: Props) {
    return (
        <Button
            variant="accent"
            className="py-6 mt-1.5 w-full"
            onClick={() => saveAs(link, filename)}
        >
            <DownloadIcon style={{ width: 24, height: 24}} fill="black" />
            Download
        </Button>
    );
};