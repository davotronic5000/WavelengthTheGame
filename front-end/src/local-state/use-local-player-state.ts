import useLocalState from "./use-local-state";
import { localStorageName, localStorageRoom } from "./constants";
import { useMemo } from "react";
import { Player } from "./types";

const useLocalPlayerState = () => {
    const [name, updateName] = useLocalState(localStorageName);
    const [currentRoomCode, updateCurrentRoomCode] = useLocalState(
        localStorageRoom,
    );
    const player: Player = useMemo(
        () => ({ name, currentRoomCode, updateName, updateCurrentRoomCode }),
        [name, currentRoomCode, updateName, updateCurrentRoomCode],
    );
    return player;
};

export default useLocalPlayerState;
