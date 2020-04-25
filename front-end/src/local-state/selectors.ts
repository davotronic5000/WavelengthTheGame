import { LocalPlayer } from "./types";

export const getName = (localState: LocalPlayer) => localState.name;
export const hasName = (localState: LocalPlayer) => getName(localState).length;

export const getCurrentRoomCode = (localState: LocalPlayer) =>
    localState.currentRoomCode;
export const hasCurrentRoomCode = (localState: LocalPlayer) =>
    getCurrentRoomCode(localState).length;
