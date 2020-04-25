import React, { ComponentType, useState } from "react";
import { Box, Flex, Button } from "rebass";
import { Label, Input } from "@rebass/forms";

const InputPlusSubmit: ComponentType<{
    name: string;
    onSubmit: (value: string) => void;
}> = ({ name, onSubmit }) => {
    const [value, updateValue] = useState("");
    return (
        <Box
            as="form"
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(value);
            }}
            sx={{ maxWidth: 400, mx: "auto" }}
        >
            <Label htmlFor={name} sx={{ fontWeight: "bold" }}>
                What is your name?
            </Label>
            <Flex>
                <Input
                    name={name}
                    value={value}
                    onChange={(e) => updateValue(e.target.value)}
                    sx={{ mr: 1, p: 2 }}
                />{" "}
                <Button sx={{ flexShrink: 0 }}>Submit</Button>
            </Flex>
        </Box>
    );
};

export default InputPlusSubmit;
