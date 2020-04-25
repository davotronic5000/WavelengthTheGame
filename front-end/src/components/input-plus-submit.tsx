import React, { ComponentType, useState } from "react";
import { Box, Flex, Button } from "rebass";
import { Label, Input } from "@rebass/forms";

const InputPlusSubmit: ComponentType<{
    name: string;
    label: string;
    onSubmit: (value: string) => void;
}> = ({ name, label, onSubmit }) => {
    const [value, updateValue] = useState("");
    return (
        <Box
            as="form"
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(value);
            }}
            sx={{
                maxWidth: 450,
                mx: "auto",
                bg: "greyMedium",
                p: 3,
                border: "solid",
                borderRadius: "default",
            }}
        >
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
        </Box>
    );
};

export default InputPlusSubmit;
