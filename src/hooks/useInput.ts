import React from "react";


type InputInnerProps = {
    value: string;
    onChange: ({target}: React.ChangeEvent<HTMLInputElement>) => void;
}

export type InputReturnValues = {
    clearValue: () => void;
    inputInnerProps: InputInnerProps;
}

export default function useInput(initialValue: string =  ''): InputReturnValues {
    const [value, setValue] = React.useState<string>(initialValue);

    const handleInputChange = React.useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setValue(target?.value);
    }, [])

    function clearValue () {
        setValue('');
    }

   const inputInnerProps = {
        value,
        onChange: handleInputChange
   }

    return { inputInnerProps, clearValue};
}
