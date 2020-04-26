import React, { ComponentType, useState } from "react";
import { Flex, Button } from "rebass";
import { Label, Input } from "@rebass/forms";
import Panel from "./panel";
import PanelHeading from "./panel-heading";

const InputPlusSubmit: ComponentType<{
    name: string;
    label: string;
    title?: string;
    onSubmit: (value: string) => void;
}> = ({ name, label, onSubmit, title }) => {
    const [value, updateValue] = useState("");
    return (
        <Panel
            as="form"
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(value);
            }}
        >
            {typeof title !== "undefined" && (
                <PanelHeading>{title}</PanelHeading>
            )}
            <Label htmlFor={name} sx={{ fontWeight: "bold" }}>
                {label}
            </Label>
            <Flex flexDirection={["column", "row"]}>
                <Input
                    name={name}
                    value={value}
                    onChange={(e) => updateValue(e.target.value)}
                    sx={{
                        mr: [0, 2],
                        mb: [2, 0],
                        p: 2,
                        borderColor: "primaryDark",
                        bg: "greyLight",
                        minWidth: "200px",
                    }}
                />{" "}
                <Button sx={{ flexShrink: 0, flexGrow: [1, 0] }}>Submit</Button>
            </Flex>
        </Panel>
    );
};

export default InputPlusSubmit;
