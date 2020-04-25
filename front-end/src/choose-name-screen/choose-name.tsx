import React, { ComponentType } from "react";
import { InputPlusSubmit } from "components";
import useLocalPlayer, { localStateSelectors } from "local-state";

const ChooseNameScreen: ComponentType = () => {
    const player = useLocalPlayer();
    const updateName = localStateSelectors.updateName(player);
    return (
        <InputPlusSubmit
            name="name"
            onSubmit={updateName}
            label="What is your name?"
        />
    );
};

export default ChooseNameScreen;
