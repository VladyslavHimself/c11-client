import React from "react";

export type InputReturnValues = {
    value: string | undefined;
    onChange: ({target}: React.ChangeEvent<HTMLInputElement>) => void;
    clearValue: () => void;
}

export default function useInput(initialValue?: string): InputReturnValues {
    const [value, setValue] = React.useState<string | undefined>(initialValue || undefined);

    const handleInputChange = React.useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setValue(target?.value);
    }, [])

    function clearValue () {
        setValue('');
    }

    return { value, onChange: handleInputChange, clearValue};
}
