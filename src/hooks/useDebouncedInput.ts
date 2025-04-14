import React from "react";
import useInput from "@/hooks/useInput";

export default function useDebouncedInput(ms = 500) {
    const searchInput = useInput('');
    const [debouncedInput, setDebouncedInput] = React.useState('');

    React.useEffect(() => {
        const unsubscribeTimeout = setTimeout(() => {
            setDebouncedInput(searchInput.value as string);
        }, ms);

        return () => clearTimeout(unsubscribeTimeout);

    }, [ms, searchInput.value]);


    return { debouncedInput, sourceInput: searchInput };
}
