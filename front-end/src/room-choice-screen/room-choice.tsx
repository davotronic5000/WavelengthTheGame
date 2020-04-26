import React, { ComponentType, Fragment } from "react";
import JoinRoom from "./join-room";
import CreateRoom from "./create-room";
import { Divider } from "components";

const RoomChoice: ComponentType = () => {
    return (
        <Fragment>
            <JoinRoom />
            <Divider>Or</Divider>
            <CreateRoom />
        </Fragment>
    );
};

export default RoomChoice;
