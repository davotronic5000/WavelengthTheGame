import React, { createContext, ComponentType } from "react";
import { defaultPlayer } from "./constants";
import useLocalPlayerState from "local-state";

export const LocalPlayerContext = createContext(defaultPlayer);

const LocalPlayerContextProvider: ComponentType = ({ children }) => {
    const player = useLocalPlayerState();
    return (
        <LocalPlayerContext.Provider value={player}>
            {children}
        </LocalPlayerContext.Provider>
    );
};

export default LocalPlayerContextProvider;
