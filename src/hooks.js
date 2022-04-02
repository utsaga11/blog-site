// make custom hooks
import { useState } from "react";
export function useFormInput (initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange (e) {
        setValue(e.taget.value);
    }

    return {
        value,
        onChange: handleChange
    }
}