import {TrashIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useDeleteTopicMutation} from "@/hooks/useDeleteTopicMutation";
import {TopicResponseBody} from "@/api/Topics";

type Props = {
    topic: TopicResponseBody;
};

export default function DeleteTopicButton({ topic }: Props) {
    const { deleteTopic } = useDeleteTopicMutation();
    const { id } = topic;

    return (
        <Button onClick={e => {
            e.stopPropagation();
            deleteTopic(id);
        }}>
            <TrashIcon style={{ color: "red" }} />
        </Button>
    );
};