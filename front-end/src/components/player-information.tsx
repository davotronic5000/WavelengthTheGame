import React, { ComponentType } from "react";
import useLocalPlayer, { localStateSelectors } from "local-state";

const PlayerInformation: ComponentType = () => {
    const player = useLocalPlayer();
    const name = localStateSelectors.getName(player);
    return <div>Hello {name}!</div>;
};

export default PlayerInformation;
