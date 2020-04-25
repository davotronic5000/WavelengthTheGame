import { LocalState } from "./types";
import { possiblyUndefinedValueExists } from "utils";

export const getPreferredName = (localState: LocalState) =>
    localState.preferredName;
export const hasPreferredName = (localState: LocalState) =>
    possiblyUndefinedValueExists(getPreferredName(localState));

export const getCurrentGame = (localState: LocalState) =>
    localState.currentGame;
export const hasCurrentGame = (localState: LocalState) =>
    possiblyUndefinedValueExists(getCurrentGame(localState));
