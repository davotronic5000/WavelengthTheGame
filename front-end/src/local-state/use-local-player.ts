import { useContext } from "react";
import { LocalPlayerContext } from "./local-player-context";

const useLocalPlayer = () => {
    const player = useContext(LocalPlayerContext);
    return player;
};

export default useLocalPlayer;
