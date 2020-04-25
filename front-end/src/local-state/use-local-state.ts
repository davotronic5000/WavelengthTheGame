import { useState, useEffect, Dispatch, SetStateAction } from "react";

const useLocalState = (
    localStorageKey: string,
): [string, Dispatch<SetStateAction<string>>] => {
    const [value, updateValue] = useState(
        localStorage.getItem(localStorageKey) || "",
    );
    useEffect(() => {
        localStorage.setItem(localStorageKey, value);
    }, [value, localStorageKey]);
    return [value, updateValue];
};

export default useLocalState;
