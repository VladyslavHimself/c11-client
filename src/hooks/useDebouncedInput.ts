import React from "react";
import useInput from "@/hooks/useInput";

export default function useDebouncedInput(ms = 500) {
    const { inputInnerProps } = useInput('');
    const [debouncedInput, setDebouncedInput] = React.useState('');

    React.useEffect(() => {
        const unsubscribeTimeout = setTimeout(() => {
            setDebouncedInput(inputInnerProps.value as string);
        }, ms);

        return () => clearTimeout(unsubscribeTimeout);

    }, [ms, inputInnerProps.value]);


    return { debouncedInput, sourceInput: inputInnerProps};
}
