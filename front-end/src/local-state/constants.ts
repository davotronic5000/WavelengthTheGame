import { LocalPlayer } from "./types";

export const localStorageName = "wavelengthPlayerName";
export const localStorageRoom = "wavelengthPlayerCurrentRoom";

export const defaultPlayer: LocalPlayer = {
    name: "",
    currentRoomCode: "",
    updateCurrentRoomCode: () => {},
    updateName: () => {},
};
