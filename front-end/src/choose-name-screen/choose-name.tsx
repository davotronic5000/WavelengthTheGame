import React, { ComponentType } from "react";
import { InputPlusSubmit } from "components";
import useLocalPlayer, { localStateSelectors } from "local-state";

const ChooseNameScreen: ComponentType = () => {
    const player = useLocalPlayer();
    const updateName = localStateSelectors.updateName(player);
    return (
        <div>
            <InputPlusSubmit name="name" onSubmit={updateName} />
        </div>
    );
};

export default ChooseNameScreen;
