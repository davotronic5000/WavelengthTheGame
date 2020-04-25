import useLocalState from "./use-local-state";
import { localStorageName, localStorageRoom } from "./constants";
import { useMemo } from "react";

const useLocalPlayerState = () => {
    const [name, updateName] = useLocalState(localStorageName);
    const [currentRoomCode, updateCurrentRoomCode] = useLocalState(
        localStorageRoom,
    );
    const player = useMemo(() => ({ name, currentRoomCode }), [
        name,
        currentRoomCode,
        updateName,
        updateCurrentRoomCode,
    ]);
    return player;
};

export default useLocalPlayerState;
