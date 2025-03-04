import {ChangeEvent, useCallback, useState} from "react";

export default function useInput(initialValue?: string) {
    const [value, setValue] = useState<string>(initialValue || '');

    const handleInputChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
        setValue(target?.value);
    }, [])

    return { value, onChange: handleInputChange};
}