import { useState, useEffect } from "react";

const useLocalState = (localStorageKey: string) => {
    const [value, updateValue] = useState(
        localStorage.getItem(localStorageKey) || "",
    );
    useEffect(() => {
        localStorage.setItem(localStorageKey, value);
    }, [value]);
    return [value, updateValue];
};

export default useLocalState;
