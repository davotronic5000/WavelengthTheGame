import useLocalState from "./use-local-state";
import { localStorageName, localStorageRoom } from "./constants";
import { useMemo } from "react";
import { LocalPlayer } from "./types";

const useLocalPlayerState = () => {
    const [name, updateName] = useLocalState(localStorageName);
    const [currentRoomCode, updateCurrentRoomCode] = useLocalState(
        localStorageRoom,
    );
    const player: LocalPlayer = useMemo(
        () => ({ name, currentRoomCode, updateName, updateCurrentRoomCode }),
        [name, currentRoomCode, updateName, updateCurrentRoomCode],
    );
    return player;
};

export default useLocalPlayerState;
