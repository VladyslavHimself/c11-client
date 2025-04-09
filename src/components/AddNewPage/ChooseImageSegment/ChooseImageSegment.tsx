import {UploadImageFrame} from "@/components/AddNewPage/ChooseImageSegment/UploadImageFrame";
import {useAddNewPageActions, useAddNewPageStates} from "@/components/AddNewPage/AddNewPageProvider";

export default function ChooseImageSegment() {
    const { uploadedImage } = useAddNewPageStates();
    const { nextStep, previousStep, setUploadedImage } = useAddNewPageActions();

    return (
        <div>
            choose image
            <UploadImageFrame uploadedImage={uploadedImage} setUploadedImage={setUploadedImage}/>
        </div>
    );
};