import { saveAs } from 'file-saver'
import DownloadIcon from "../../../public/DownloadIcon";
import {Button} from "@/components/ui/button";

type Props = {
    link: string;
    filename: string;
};

export function MiniatureDownloadButton({ link, filename }: Props) {
    return (
        <Button onClick={e => {
            e.stopPropagation();
            saveAs(link, filename);
        }}>
            <DownloadIcon />
        </Button>
    );
};